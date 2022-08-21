import React, {memo, useMemo, useRef, useReducer, useEffect} from "react";
import ComponentTd from "@/ComponentTd";
const ComponentTr = memo(({rowIndex, rowData, dispatch}) => {
    return (
        <>
            <tr>
                {Array(rowData.length).fill().map((td,i)=>
                    useMemo(() => <ComponentTd rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} dispatch={dispatch} key={i} />,
                    [rowData[i]]))}
            </tr>
        </>
    )
})
export  default ComponentTr