import React, {useReducer, createContext, useMemo, useEffect} from "react";
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


const platMineZero = (row = 10, cell = 10, mine = 20) => {
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });
    const shuffle = [];
    while (candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    const data = [];
    for (let i = 0; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for (let j = 0; j < cell; j++) {
            rowData.push(MINE_STATUS.NORMAL);
        }
    }

    for (let k = 0; k < shuffle.length; k++) {
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = MINE_STATUS.MINE;
    }

    console.log(data);
    return data;
}
const platMine = (row = 10, cell= 10 , mine = 20 )=>{
    const arr = new Array(parseInt(row)).fill().map(i=>new Array(parseInt(cell)).fill(-1))
    console.log(arr)

    const mineArr = []
    let count = mine
    while(count>0){
        const val = {row: Math.floor(Math.random()*row), cell:Math.floor(Math.random()*cell)}
        if(mineArr.filter(i=> i.row === val.row && i.cell === val.cell).length <= 0){
            mineArr.push(val)
            count -= 1
        }
    }
    console.log(arr, mineArr)
    mineArr.forEach(v=>{
        arr[v.row][v.cell] = MINE_STATUS.MINE
    })
    return arr
}
const initialState = {
    tableData : platMine(),
    halted:false,
    timer:'',
    result:''
}
const reducer = (state, action) => {
    switch (action.type) {
        case TYPE.START_GAME: {
            return {
                ...state,
                tableData: platMine(action.row, action.cell, action.mine),
                halted: false
            }
        }
        case TYPE.OPEN_CELL: {
            const tableData = [...state.tableData]
            tableData[action.row] = [...state.tableData[action.row]]
            tableData[action.row][action.cell] = MINE_STATUS.OPENED
            return {
                ...state,
                tableData
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
            console.log(state, action)
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
        default:
            return state
    }
}


const MineSweeper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => ({tableData: state.tableData, halted: state.halted, dispatch}), [state.tableData, state.halted]);
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
}
export default MineSweeper