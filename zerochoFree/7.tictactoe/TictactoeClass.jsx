import React, {Component, useCallback, useReducer} from "react";
import ComponentTable from "@/ComponentTable";
export const TYPE ={
    SET_WINNER:'SET_WINNER',
    CLICK_CELL: 'CLICK_CELL',
    SET_TURN:'SET_TURN',
    RESET_GAME:'RESET_GAME'
}
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
class TictactoeClass extends Component {
    state = null
    dispatch = null
    componentDidMount() {
        const [state, dispatch] = useReducer(reducer, initialState);
        this.state = state
        this.dispatch = dispatch()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.tableData !== this.state.tableData || prevState.recentCell !== this.state.recentCell){
            const [row,cell] = this.state.recentCell
            const {tableData, turn} = this.state

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
                this.dispatch({type: TYPE.SET_WINNER, winner: turn})
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
                    this.dispatch({type:TYPE.SET_TURN})
                }
                if(all){
                    this.dispatch({type:TYPE.RESET_GAME})
                }
            }
        }
    }
    onClickTable = useCallback(()=>{
        this.dispatch({type:'SET_WINNER', winner: 'O'})//action을 dispatch 할 때 마다 action이 실행
    }, [])


    render() {
        return (
            <>
                <ComponentTable onClick={this.onClickTable} tableData={this.state.tableData} dispatch={this.dispatch} />
                {this.state.winner && <div>{this.state.winner}님의 승리</div>}
            </>
        )
    }
}
export  default  TictactoeClass