import React, {useMemo, memo, useRef, useCallback, useEffect, useContext} from "react";
import {TableContext, MINE_STATUS, TYPE} from "./MineSweeper";


const getTdStyle = (code)=>{

    const {
        OPENED,
        NORMAL,
        QUESTION,
        FLAG,
        QUESTION_MINE,
        FLAG_MINE,
        CLICKED_MINE,
        MINE
    } = MINE_STATUS

    switch (code){
        case NORMAL:
        case MINE:
            return {background:'#444'}
        case CLICKED_MINE:
        case OPENED:
            return {background: 'white'}
        case QUESTION:
        case QUESTION_MINE:
            return {background: 'yellow'}
        case FLAG_MINE:
        case FLAG:
            return {background: 'blue'}
        default:
            return {background: 'white'}
    }
}
const getTdText = (code)=>{

    const {
        OPENED,
        NORMAL,
        QUESTION,
        FLAG,
        QUESTION_MINE,
        FLAG_MINE,
        CLICKED_MINE,
        MINE
    } = MINE_STATUS

    switch (code){
        case NORMAL:
            return ''
        case MINE:
            return 'X'
        case OPENED:
            return
        case CLICKED_MINE:
            return 'BOOM'
        case FLAG_MINE:
        case FLAG:
            return '🏁'
        case QUESTION:
        case QUESTION_MINE:
            return '❓'
        default:
            return code > 0? code:''
    }
}
const MineTd =memo(({rowIndex, cellIndex}) => {
    const {tableData, halted, dispatch} = useContext(TableContext);


    const onClickTd = useCallback((e) => {

        const {
            OPENED,
            NORMAL,
            QUESTION,
            FLAG,
            QUESTION_MINE,
            FLAG_MINE,
            CLICKED_MINE,
            MINE
        } = MINE_STATUS

        if(halted) return
            switch (tableData[rowIndex][cellIndex]){
                case OPENED:
                case FLAG_MINE:
                case FLAG:
                case QUESTION_MINE:
                case QUESTION:
                case NORMAL:
                    dispatch({type:TYPE.OPEN_CELL, row: rowIndex, cell: cellIndex})
                    return
                case MINE:
                    dispatch({type:TYPE.CLICK_MINE, row:rowIndex, cell:cellIndex})
                    return
            }
        },[tableData[rowIndex][cellIndex]]);
    const onRightClickTd = useCallback( (e) => {

        const {
            NORMAL,
            QUESTION,
            FLAG,
            QUESTION_MINE,
            FLAG_MINE,
            MINE
        } = MINE_STATUS

        e.preventDefault()
        if(halted) return
        switch (tableData[rowIndex][cellIndex]){
            case NORMAL: //-1
            case MINE: //-7
                dispatch({type: TYPE.FLAG_CELL, row: rowIndex, cell: cellIndex})
                return
            case FLAG_MINE: //-5
            case FLAG: //-3
                dispatch({type: TYPE.QUESTION_CELL, row: rowIndex, cell: cellIndex})
                return
            case QUESTION_MINE: //-4
            case QUESTION: //-2
                dispatch({type: TYPE.NORMALIZE_CELL, row: rowIndex, cell: cellIndex})
                return
        }
    },[tableData[rowIndex][cellIndex]]);


    // return useMemo(()=>(
    //     <>
    //         <td style={getTdStyle(tableData[rowIndex][cellIndex])} onClick={onClickTd} onContextMenu={onRightClickTd}>{/*getTdText(cellData)*/ getTdText(tableData[rowIndex][cellIndex])}</td>
    //     </>
    // ), [tableData[rowIndex][cellIndex]])

    return (
        <RealTd onClickTd={onClickTd} onRightClickTd={onRightClickTd} data={tableData[rowIndex][cellIndex]}></RealTd>
    )
})

const RealTd = memo(({onClickTd, onRightClickTd, data})=>{
    return (
        <>
            <td style={getTdStyle(data)} onClick={onClickTd} onContextMenu={onRightClickTd}>{/*getTdText(cellData)*/ getTdText(data)}</td>
        </>
    )
})
export  default MineTd