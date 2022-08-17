import React, {useState, useRef} from 'react'
import TryHooks from "@/TryHooks";

const getNumbers = () =>{
    const set = new Set()
    while(set.size<4){
        set.add(Math.floor(Math.random()*10))
    }
    const result = Array.from(set)
    return result.join('')
}
const numberBaseBall = () =>{
    const [result, setResult] = useState('')
    const [value, setValue] = useState('')
    // const [answer, setAnswer] = useState(getNumbers())
    //함수 컴포넌트 특성상 렌더할 때마다 전체 다 실행됨 이래서 getNumbers 매번 연산
    const [answer, setAnswer] = useState(getNumbers)
    //그래서 함수를 넣을 때는 함수 자체를 넘겨서 getNumbers의 처음 값으로 initValue를 잡고 그 다음부터는 무시
    //lazy init??
    const [tries, setTries] = useState([])

    const inputEl = useRef(null)

    const init = () =>{
        setResult('')
        setValue('')
        setAnswer(getNumbers())
        /**
         * setAnswer(getNumber)는... 되긴 하지만
         * setAnswer((prevState)=>{}) 있던거에 얻어 걸린거
         */
        setTries([])
    }
    const onChangeInput =  (e) => {
        setValue(e.target.value)
    }
    const onClickInput = (e) => {
        if(!value){
            return
        }
        if(value === answer) {
            setResult("홈런")
            setTries([...tries,{try: value, result:"홈런!"} ])
            alert('you WIN')
            init()
        }
        if(value !== answer){
            const answerArray = answer.split('').map((v)=> parseInt(v))
            const valueArray = value.split('').map((v)=>parseInt(v))
            let strike = 0
            let ball = 0

            if(tries.length >= 9 ){
                setResult(`GAME OVER \n answer: ${answer}`)
                alert('you lose!')
                init()
            }

            if(tries.length < 9){
                for(let i = 0; i < 4; i ++){
                    if(answerArray[i] === valueArray[i]){
                        strike += 1
                    } else if(answerArray.includes(valueArray[i])){
                        ball += 1
                    }
                }
                setTries([...tries, {try:value, result:`${strike} 스트라이크 ${ball} 볼입니다.`}])
            }
            setValue('')
            inputEl.current.focus()
        }
    }


    return (
        <>
            <h1>숫자야구</h1>
            <h3>{result}</h3>
            <input type="text" maxLength={4} value={value} onChange={onChangeInput} ref={inputEl}/>
            &nbsp;
            <button onClick={onClickInput}>정답?</button>
            <div>시도: {tries.length}</div>
            <ul>
                {/*여기거 재렌더 되는 이유는 부모가 재렌더 되기 때문 */}
                {tries.map((v,i)=> <TryHooks try={v.try} result={v.result} key={i}/>)}
            </ul>
        </>
    )
}
export default numberBaseBall
