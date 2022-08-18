import React from "react";
import {useState,useRef, useMemo} from "react";

const STATE = {
    WAIT:'waiting',
    READY:'ready',
    NOW:'now'
}
const ReactionRateCheckHooks = () =>{
    const [state, setState] = useState(STATE.WAIT)
    const [msg, setMsg] = useState('클릭해서 시작하기')
    const [result, setResult] = useState([])
    const timeout = useRef(null)
    const startTime = useRef(null)
    const endTime = useRef(null)

    /**
     * memo에 대해서 pureComponent에 대한 hooks의 사용버에서 memo(()=>{})가 있었는데
     * Vue의 computed와 성질이 같다고 한다.
     * 여기에서도 memo를 사용할 수 있다.
     */
    //state와 ref의 차이 ->
    /**
     * state는 set하면 재렌더
     * useRef는  렌더 없이 그냥 감
     */
    const test = useMemo(()=>{
        return result
    },[result])
    // let timeout;
    // let startTime;
    // let endTime;
    //클래스에서는 그냥 써도 되는데.. hooks에서는 ref가 this의 속성들을 가진다고 합니다.
    const clickScreen = (e) =>{
        if(state === STATE.WAIT){
              setState(STATE.READY)
              setMsg("초록색이 되면 시작하세요")
              timeout.current = setTimeout(()=>{
                  setState(STATE.NOW)
                  setMsg("지금")
              }, Math.floor(Math.random()*1000)+2000)
              startTime.current = new Date();
            return
        }
        if(state === STATE.READY){
           setState(STATE.WAIT)
           setMsg("너무 빨랐습니다.")
           clearTimeout(timeout.current)
            return
        }
        if(state === STATE.NOW){
            endTime.current = new Date();
            setState(STATE.WAIT)
            setMsg("클릭해서 시작하세요")
            setResult((prevResult)=>[...prevResult, endTime.current - startTime.current])
        }
    }
    const onReset = () =>{
        setResult([])
    }
    const avg = () =>{
        return (
            <>
                {result.length === 0 ? null : <div>평균: {result.reduce((p, n) => p + n, 0) / result.length}ms</div>}
                <button onClick={onReset}>REST</button>
            </>
        )
    }
    return (
        <>
            <h2>반응속도 체크</h2>
            <div id="screen" className={state} onClick={clickScreen}>
                <p>{msg}</p>
            </div>
            {/*{avg()}*/}
            {(()=>{
            if(result.length === 0){
                return null
            } else {
                return (
                    <>
                        <div>평균: {result.reduce((p, n) => p + n, 0) / result.length}ms</div>
                        <button onClick={onReset}>REST</button>
                    </>
                )
            }
            })()}

            {/*    즉시 실행 함수로 반복문, 조건문 가능*/}
            {/*    {(()=>{*/}
            {/*        const arr = []*/}
            {/*        for(let i = 0; i < 5; i++){*/}
            {/*            arr.push(<p>{i + 1}</p>)*/}
            {/*        }*/}
            {/*        return arr*/}
            {/*    })()}*/}
        </>
    )
}
export default  ReactionRateCheckHooks
