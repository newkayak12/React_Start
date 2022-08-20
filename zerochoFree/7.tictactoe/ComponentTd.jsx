import React, {useState, useRef, useCallback, useReducer} from "react";
import {TYPE} from "@/TictactoeHooks";
const ComponentTd = ({rowIndex, cellIndex, cellData, dispatch}) => {
    const onClickTd = useCallback(()=>{
        if(cellData) return
        //state가 비동기적으로 바뀜 -> 비동기 처리에 따라 변경하려면 useEffect 사용
        dispatch({type:TYPE.CLICK_CELL, rowIndex:rowIndex, cellIndex: cellIndex})

    },[cellData])


    return (
        <>
            <td onClick={onClickTd}>{cellData}</td>
        </>
    )
}
export  default ComponentTd