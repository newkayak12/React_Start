import React from "react";
import {useState,useRef} from "react";

const STATE = {
    WAIT:'waiting',
    READY:'ready',
    NOW:'now'
}
const ReactionRateCheckHooks = () =>{
    const [state, setState] = useState(STATE.WAIT)
    const [msg, setMsg] = useState('클릭해서 시작하기')
    const [result, setResult] = useState([])

    let timeout;
    let startTime;
    let endTime;

    const clickScreen = (e) =>{

    }
    return (
        <>
            <h2>반응속도 체크</h2>
            <div id="screen" className={state} onClick={clickScreen}>
                <p>{msg}</p>
            </div>
            {result.length === 0? null:<div>평균: {result.reduce((p, n) => p + n, 0) / result.length}ms</div>}
        </>
    )
}
export default  ReactionRateCheckHooks
