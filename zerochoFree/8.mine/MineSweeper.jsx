import React, {memo, seReducer, createContext, useMemo, useEffect, useReducer} from "react";
import MineTable from "./MineTable";
import Form from "./Form";
export const TableContext = createContext({
    tableData:[],
    halted:true,
    dispatch: () => {}
})
export const TYPE = {
    START_GAME: 'START_GAME',
    OPEN_CELL: 'OPEN_CELL',
    CLICK_MINE: 'CLICK_MINE',
    FLAG_CELL:"FLAG_CELL",
    QUESTION_CELL:"QUESTION_CELL",
    NORMALIZE_CELL:"NORMALIZE_CELL",
    INCREMENT_TIMER:"INCREMENT_TIMER"
}
export const MINE_STATUS = {
    OPENED: 0,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    MINE: -7,
}

const platMine = (row = 0, cell= 0 , mine = 0 )=>{
    const arr = new Array(parseInt(row)).fill().map(i=>new Array(parseInt(cell)).fill(-1))
    const mineArr = []
    let count = mine
    while(count>0){
        const val = {row: Math.floor(Math.random()*row), cell:Math.floor(Math.random()*cell)}
        if(mineArr.filter(i=> i.row === val.row && i.cell === val.cell).length <= 0){
            mineArr.push(val)
            count -= 1
        }
    }
    mineArr.forEach(v=>{
        arr[v.row][v.cell] = MINE_STATUS.MINE
    })
    return arr
}
const initialState = {
    tableData : platMine(),
    halted:true,
    timer:0,
    data:{row:0,cell:0,mine:0},
    openedCount:0,
    result:''
}
const reducer = (state, action) => {
    switch (action.type) {
        case TYPE.START_GAME: {
            return {
                ...state,
                data:{row:parseInt(action.row), cell:parseInt(action.cell), mine:parseInt(action.mine)},
                tableData: platMine(action.row, action.cell, action.mine),
                halted: false,
                timer:0,
                openedCount: 0
            }
        }
        case TYPE.OPEN_CELL: {
            const tableData = [...state.tableData]
            tableData.forEach((row,i)=>{
                tableData[i] = [...row]
            })
            const checked = []
            let openedCount = 0
            const checkAround = (row, cell) =>{
                if(row < 0 || row >= tableData.length || cell < 0 || cell >= tableData[0].length){
                    return
                }
                if([MINE_STATUS.OPENED, MINE_STATUS.FLAG_MINE, MINE_STATUS.FLAG, MINE_STATUS.QUESTION_MINE, MINE_STATUS.QUESTION].includes(tableData[row][cell])){
                    return;
                }
                if(checked.includes(row+','+cell)){
                    return
                } else {
                    checked.push(row+","+cell)
                }
                let around = [
                    tableData[row][cell - 1], tableData[row][cell + 1],
                ];
                if(tableData[row -1 ]){
                    around = around.concat(
                        tableData[row -1][cell - 1],
                        tableData[row -1][cell],
                        tableData[row -1][cell + 1]
                    )
                }
                if(tableData[row + 1 ]){
                    around =   around.concat(
                        tableData[row + 1][cell - 1],
                        tableData[row + 1][cell],
                        tableData[row + 1][cell + 1]
                    )
                }
                const count = around.filter((v)=> [MINE_STATUS.MINE, MINE_STATUS.FLAG_MINE, MINE_STATUS.QUESTION_MINE].includes(v)).length;
                tableData[row][cell] = count
                if(count === 0){
                    if( row > -1){
                        const near = []
                        if(row - 1 > -1){
                            near.push([row -1, cell -1])
                            near.push([row -1, cell ])
                            near.push([row -1, cell +1])
                        }
                        near.push([row , cell -1])
                        near.push([row , cell +1])
                        if(row + 1 < tableData.length){
                            near.push([row +1, cell -1])
                            near.push([row +1, cell ])
                            near.push([row +1, cell +1])
                        }
                        near.forEach((n)=> {
                            if(tableData[n[0]][n[1]] !== MINE_STATUS.OPENED){
                                checkAround(n[0],n[1])
                            }
                        })
                    }
                }
                if(tableData[row][cell] > MINE_STATUS.NORMAL){
                    openedCount += 1
                }
                tableData[row][cell] = count
            }
            checkAround(action.row, action.cell)
            let halted = false
            let result = ''
            if(state.data.row + state.data.cell - state.data.mine === state.openedCount + openedCount){
                halted = true
                result = 'YOU WIN'
            }
            return {
                ...state,
                tableData,
                halted,
                result,
                openedCount: state.openedCount + openedCount,
            }
        }
        case TYPE.CLICK_MINE: {
            const tableData = [...state.tableData]
            tableData[action.row] = [...state.tableData[action.row]]
            tableData[action.row][action.cell] = MINE_STATUS.CLICKED_MINE
            return {
                ...state,
                tableData,
                halted: true
            }
        }
        case TYPE.FLAG_CELL:{
            const tableData = [...state.tableData]
            tableData[action.row] = [...state.tableData[action.row]]

            if(tableData[action.row][action.cell]===MINE_STATUS.MINE){
                tableData[action.row][action.cell] = MINE_STATUS.FLAG_MINE
            } else {
                tableData[action.row][action.cell] = MINE_STATUS.FLAG
            }
            return {
                ...state,
                tableData
            }
        }
        case TYPE.QUESTION_CELL:{
            const tableData = [...state.tableData]
            tableData[action.row] = [...state.tableData[action.row]]
            if(tableData[action.row][action.cell]===MINE_STATUS.FLAG_MINE){
                tableData[action.row][action.cell] = MINE_STATUS.QUESTION_MINE
            } else {
                tableData[action.row][action.cell] = MINE_STATUS.QUESTION
            }
            return {
                ...state,
                tableData,
            }
        }
        case TYPE.NORMALIZE_CELL:{
            const tableData = [...state.tableData]
            tableData[action.row] = [...state.tableData[action.row]]

            if(tableData[action.row][action.cell]===MINE_STATUS.QUESTION_MINE){
                tableData[action.row][action.cell] = MINE_STATUS.MINE
            } else {
                tableData[action.row][action.cell] = MINE_STATUS.NORMAL
            }
            return {
                ...state,
                tableData,
            }
        }
        case TYPE.INCREMENT_TIMER:{

            return {
                ...state,
                timer: state.timer += 1
            }
        }

        default:
            return state
    }
}


const MineSweeper = memo(() => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => ({tableData: state.tableData, halted: state.halted, dispatch}), [state.tableData, state.halted]);


    useEffect(()=>{
        let timer;
        if(state.halted == false) {
           timer = setInterval(()=>{
                dispatch({type: TYPE.INCREMENT_TIMER})
            }, 1000)
        }
        return ()=>{
            clearInterval(timer)
        }
    }, [state.halted])
    return (
        <TableContext.Provider value={value}>
            {/*<Form dispatch={dispatch()} />*/}
            {/*context API 설정*/}
            <Form />
            <div>{state.timer}</div>
            <MineTable />
            <div>{state.result}</div>
        </TableContext.Provider>
    )
})
export default MineSweeper