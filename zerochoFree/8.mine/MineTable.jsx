import React, {useState, useRef, useReducer, memo, useContext} from "react";

import MineTr from "@/MineTr";
import {TableContext} from "./MineSweeper";
const MineTable = memo(({}) => {
    const {tableData} = useContext(TableContext);
    return (
        <>
            <table>
                <tbody>
                    {Array(tableData.length).fill().map((tr, i)=><MineTr rowIndex={i} rowData={tableData[i]} key={i}/>)}
                </tbody>
            </table>
        </>
    )
})
export  default MineTable