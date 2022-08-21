import React, {useMemo, memo, useRef, useCallback, useEffect, useContext} from "react";
import {TableContext, MINE_STATUS, TYPE} from "./MineSweeper";
const getTdStyle = (code)=>{
    console.log(code)
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
            return ''
    }
}
const MineTd = memo(({rowIndex, cellIndex, cellData}) => {
    const {tableData, dispatch} = useContext(TableContext);
    const onClickTd = useCallback(() => {
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
            switch (cellData){
                case OPENED:
                case FLAG_MINE:
                case FLAG:
                case QUESTION_MINE:
                case QUESTION:
                case NORMAL:
                    dispatch({type:TYPE.OPEN_CELL, row: rowIndex, cell: cellIndex})
                    return
                case MINE:
                    dispatch({type:TYPE.CLICK_MINE, row:rowIndex, cellIndex})

            }
        },[cellData]);
    const onRightClickTd = useCallback( (e) => {
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
        e.preventDefault()
        switch (cellData){
            case NORMAL:
            case MINE:
                dispatch({type: TYPE.FLAG_CELL, row: rowIndex, cell: cellIndex})
            case FLAG_MINE:
            case FLAG:
                dispatch({type: TYPE.QUESTION_CELL, row: rowIndex, cell: cellIndex})
            case QUESTION_MINE:
            case QUESTION:
                dispatch({type: TYPE.NORMALIZE_CELL, row: rowIndex, cell: cellIndex})
        }
    },[cellData]);


    return (
        <>
            <td style={getTdStyle(Number(cellData))} onClick={onClickTd} onContextMenu={onRightClickTd}>{getTdText(Number(cellData))}</td>
        </>
    )
})
export  default MineTd