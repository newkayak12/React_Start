import React, {memo, useMemo, useRef, useReducer, useEffect} from "react";
import MindTd from "@/MineTd";
const MineTr = memo(({rowIndex, rowData}) => {
    return (
        <>
            <tr>
                {Array(rowData.length).fill().map((td,i)=><MindTd rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} key={i} />)}
            </tr>
        </>
    )
})
export default MineTr