import React, {useState, useRef, useReducer, useEffect} from "react";
import ComponentTd from "@/ComponentTd";
const ComponentTr = ({rowIndex, rowData, dispatch}) => {
    return (
        <>
            <tr>
                {Array(rowData.length).fill().map((td,i)=>
                    <ComponentTd rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} dispatch={dispatch} key={i} />)}
            </tr>
        </>
    )
}
export  default ComponentTr