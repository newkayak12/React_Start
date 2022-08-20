import React, {useState, useRef, useReducer, useCallback, useEffect} from "react";
import ComponentTable from "@/ComponentTable";
const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    recentCell: [-1, -1],
};
export const TYPE ={
    SET_WINNER:'SET_WINNER',
    CLICK_CELL: 'CLICK_CELL',
    SET_TURN:'SET_TURN',
    RESET_GAME:'RESET_GAME'
}
const reducer = (state, action) => {
    switch (action.type) {
        case TYPE.SET_WINNER:
            return {
                ...state,
                winner: action.winner
            }
        case TYPE.CLICK_CELL:
            const tableData = [...state.tableData]
            tableData[action.rowIndex] = [...tableData[action.rowIndex]]
            tableData[action.rowIndex][action.cellIndex] = state.turn
            const recentCell = [action.rowIndex, action.cellIndex]
            return {
                ...state,
                tableData,
                recentCell
            }
        case TYPE.SET_TURN:
            return {
                ...state,
                turn: state.turn === 'O'? 'X':'O'
            }
        case TYPE.RESET_GAME:
            return {
                ...state,
                tableData:[
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ]
            }
        default:
            return state
    }
}
const TictactoeHooks = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [winner, setWinner] = useState('')
    // const [turn, setTurn] = useState('O')
    // const [tableData, setTableData] = useState(new Array(3).fill(new Array(3).fill('')))

    const onClickTable = useCallback(()=>{
        dispatch({type:'SET_WINNER', winner: 'O'})//action을 dispatch 할 때 마다 action이 실행
    }, [])

    //state가 비동기적으로 바뀜 -> 비동기 처리에 따라 변경하려면 useEffect 사용
    useEffect(() => {
        const [row,cell] = state.recentCell
        const {tableData, turn} = state

        if(row<0)    return

        let win = false;

        if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn ){
            win = true
        }
        if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell]  === turn){
            win = true
        }
        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn){
            win = true
        }
        if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn){
            win = true
        }

        if(win){
            dispatch({type: TYPE.SET_WINNER, winner: turn})
        } else {
            let all = true
            tableData.forEach((row)=>{
                row.forEach((cell)=>{
                    if(!cell){
                        all &= false
                    }
                })
            })
            if(!all){
                dispatch({type:TYPE.SET_TURN})
            }
            if(all){
                dispatch({type:TYPE.RESET_GAME})
            }
        }


    }, [state.tableData, state.recentCell]);



    return (
        <>
            <ComponentTable onClick={onClickTable} tableData={state.tableData} dispatch={dispatch} />
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
}

export  default TictactoeHooks