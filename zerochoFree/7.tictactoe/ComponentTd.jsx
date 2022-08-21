import React, {useMemo, memo, useRef, useCallback, useEffect} from "react";
import {TYPE} from "@/TictactoeHooks";
const ComponentTd = memo(({rowIndex, cellIndex, cellData,  dispatch}) => {
    const ref = useRef([]);
    useEffect(()=>{
        console.log("=====================================")
        console.log('rowIndex ',rowIndex === ref.current[0])
        console.log('cellIndex ',cellIndex === ref.current[1])
        console.log('dispatch ',dispatch === ref.current[3])
        console.log('cellData ',cellData === ref.current[4])
        console.log("\n")

        ref.current = [rowIndex, cellIndex, dispatch, cellData]
    }, [rowIndex, cellIndex, cellData,  dispatch])

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
})
export  default ComponentTd