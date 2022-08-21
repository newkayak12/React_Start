import React, {useState, useRef, useReducer, useEffect} from "react";
import ComponentTr from "@/ComponentTr";
const ComponentTable = ({onClick, tableData, dispatch}) => {
    const [] = useState([])
    return (
        <>
            <table>
                <tbody>
                    {Array(tableData.length).fill().map((tr, i)=><ComponentTr rowIndex={i} rowData={tableData[i]}
                                          dispatch={dispatch} key={i}/>)}
                </tbody>
            </table>
        </>
    )
}
export  default ComponentTable