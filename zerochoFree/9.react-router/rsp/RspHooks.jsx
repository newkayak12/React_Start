import React, {useState, useRef, useEffect} from "react";
import useInterval from "@/rsp/IntervalEffect";
const POINTER = {
    R:'0px',
    S:'-135px',
    P:'-284px'
}
const RspHooks = () =>{
    const [result, setResult] = useState('')
    const [score, setScore] = useState(0)
    const [imgCoord, setImgCoord] = useState(POINTER.R)
    const [isRunning, setIsRunning] = useState(true)
    // const interval = useRef(null)

    /**
     * lifeCycleHook이 따로 없고
     * useEffect가 있다.
     */
    // useEffect(()=>{ // 각 라이프사이클과 1:1 대응은 아니지만 흉내는 낼 수 있다. -> componentDidMount + componentDidUpdate + componentWillUnmount = useEffect
    //     interval.current = setInterval(()=>{rolling()}, 100)//didMount
    //     return () =>{ //willUnmount
    //         clearInterval(interval.current)
    //     }
    // }, [imgCoord])//useEffect를 실행할 State(Closure 문제)
    /**
     * 함수 컴포넌트는 렌더할 때마다 전체가 다시 실행됨
     * -> useEffect도 다시 실행 -> 결국..?
     * deps:는 렌더시 감지 무시할..?
     *
     * [] -> didmount
     * [imgCoord] -> didupdate
     *
     *
     * //useEffect도 여러번 사용할 수 있다. 단, 화면 그릴 때마다 실행
     */
        // useEffect(()=>{
        //     console.log(1)
        //     return console.log("1-1")
        // })
        // useEffect(()=>{
        //     console.log(2)
        //     return console.log("2-1")
        // })
    /**
     * useLayoutEffect는 화면 리사이징 전에
     * useEffect는 리사이징 이후에 do
     * React 가 웹 프레임워크 시장에서 대세가 되면서, 많은 사람들이 웹 어플리케이션을 제작하기 위해 React 를 사용하고 있습니다. 특히, 2018년 10월의 React Conf 에서 발표된 React Hooks 가 등장함에 따라서 Class Component 기반에서 Functional Component 기반으로 넘어오고 있습니다. 많은 hooks 중에서 useEffect 와 useLayoutEffect 의 차이점을 명확하게 구분하지 못하는 경우가 많아 이번 글에서는 useEffect 와 useLayoutEffect 의 차이점을 설명해 보겠습니다.
     *
     * 설명에 들어가기전에 필수개념 2가지를 먼저 눈에 익혀주세요.
     *
     * Render: DOM Tree 를 구성하기 위해 각 엘리먼트의 스타일 속성을 계산하는 과정
     * Paint: 실제 스크린에 Layout을 표시하고 업데이트하는 과정
     * useEffect
     * useEffect 는 컴포넌트들이 render 와 paint 된 후 실행됩니다. 비동기적(asynchronous) 으로 실행됩니다. paint 된 후 실행되기 때문에, useEffect 내부에 dom 에 영향을 주는 코드가 있을 경우 사용자 입장에서는 화면의 깜빡임을 보게됩니다.
     *
     *
     * useEffect 의 라이프사이클 (출처)
     * useLayoutEffect
     * useLayoutEffect 는 컴포넌트들이 render 된 후 실행되며, 그 이후에 paint 가 됩니다. 이 작업은 동기적(synchronous) 으로 실행됩니다. paint 가 되기전에 실행되기 때문에 dom 을 조작하는 코드가 존재하더라도 사용자는 깜빡임을 경험하지 않습니다.
     *
     *
     * useLayoutEffect 의 라이프사이클 (출처)
     * 결론
     * useLayoutEffect 는 동기적으로 실행되고 내부의 코드가 모두 실행된 후 painting 작업을 거칩니다. 따라서 로직이 복잡할 경우 사용자가 레이아웃을 보는데까지 시간이 오래걸린다는 단점이 있어, 기본적으로는 항상 useEffect 만을 사용하는 것을 권장드립니다. 구체적인 예시로는
     *
     *  출처 [https://medium.com/@jnso5072/react-useeffect-%EC%99%80-uselayouteffect-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-e1a13adf1cd5]
     */






    const rolling = () => {
        if(imgCoord === POINTER.S){
            setImgCoord(POINTER.R)
        }else if(imgCoord === POINTER.R){
            setImgCoord(POINTER.P)
        } else if(imgCoord === POINTER.P){
            setImgCoord(POINTER.S)
        }
    }

    //gracefully하게 refactoring: CustomHook
    //Hook이 반복되면 이렇게 빼버리는 방법도 있다.
    useInterval(rolling, isRunning ? 100 : null)

    const scoring = (target) =>{
        switch (target){
            case POINTER.R:
                return 0
            case POINTER.S:
                return 1
            case POINTER.P:
                return -1
        }
    }
    const doPlay = (target) => {
        // clearInterval(interval.current)
        // const myScore = scoring(target)
        // const comScore = scoring(imgCoord)
        // const diff = myScore - comScore
        // if(diff===0){
        //     setResult('비겼다.')
        // }else if([-1,2].includes(diff)){
        //     setResult("이겼다.")
        //     setScore((prevScore)=> prevScore + 1)
        // } else {
        //     setResult("졌다.")
        //     setScore((prevScore)=> prevScore - 1)
        // }
        // setTimeout(()=>{
        //     interval.current = setInterval(()=>{
        //         rolling()
        //         setResult('')
        //     },200)},100)

        if(isRunning) {
            setIsRunning(false)
            const myScore = scoring(target)
            const comScore = scoring(imgCoord)
            const diff = myScore - comScore
            if(diff===0){
                setResult('비겼다.')
            }else if([-1,2].includes(diff)){
                setResult("이겼다.")
                setScore((prevScore)=> prevScore + 1)
            } else {
                setResult("졌다.")
                setScore((prevScore)=> prevScore - 1)
            }
            setTimeout(()=>{
                setIsRunning(true)
            }, 1000)
        }
    }

    return (
        <>
            <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`, width:'150px', height: `200px`}}></div>
            <div style={{display:"flex", justifyContent:"space-around", width:'150px'}}>
                <button onClick={(e)=>doPlay(POINTER.S)}>가위</button>
                <button onClick={(e)=>doPlay(POINTER.R)}>바위</button>
                <button onClick={(e)=>doPlay(POINTER.P)}>보</button>
            </div>
            <h1>{result}</h1>
            <p>현재 {score} 점</p>
        </>
    )
}

export default RspHooks
