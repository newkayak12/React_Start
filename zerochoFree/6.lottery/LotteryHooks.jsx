import React, {useRef, useState, useEffect, useMemo} from "react";
import Ball from '@/LotteryBallHooks'
function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill('').map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}
const LotteryHooks = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    //두 번쨰 인자가 바뀌지 않는한 다시 실행 X
    /**
     * useMemo: computed => 함수의 리턴 값을 기억
     * useCallback => 함수 자체를 기억하고 있 -> 함수 상태 자체를 기억하고 있어서 위에서 공을 뽑아 놓은 것까지 기억할 것
     *  ㄴ 필수로 적용해야할 때가 있다. 만약 자식 컴포넌트에 props로 함수를 넘길 때는 useCallback을 사용해야한다.
     *  ㄴ 그렇지 않으면 부모로부터 계속 props가 바꿔서 준다고 인지해버림
     * useRef: 일반 값을 기억
     */
    const [winNumbers, setWinNumbers] = useState(lottoNumbers)
    const [winBalls, setWinBalls] = useState([])
    const [bonus, setBonus] = useState(null)
    const [redo, setRedo] = useState(false)
    const timeouts = useRef([])


    useEffect(()=>{
        console.log('didMount - useEffect')
        runTimeouts()
        console.log('gen number - useEffect')
        return ()=> {
            timeouts.current.forEach(v=>clearTimeout(v))
        }
    }, [timeouts.current])
    //조건
    //배열이 빈배열 === componentDidMount

    // useEffect(()=>{
    //
    // },[])
    //배열이 있으면 === componentDidMount와 componentDidUpdate  수행

    // useEffect(() => {
    //     return ()=> {
    //         timeouts.current.forEach(v=>clearTimeout(v))
    //     }
    // })
    // return 을 하면 componentWillUnmount
    const onClickRedo = () => {
        console.log('onClickRedo');
        setWinNumbers(lottoNumbers)
        setWinBalls([])
        setBonus(null)
        setRedo(false)
        timeouts.current = []
    };
    const runTimeouts = () => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]])
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6])
            setRedo(true)
        }, 7000);
    };

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창" style={{display:"flex"}}>
                {winBalls.map((v) => <Ball key={v} number={v} style={{margin:'0 15px'}} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    )
}
export default LotteryHooks
/**
 * hooks는 순서가 중요해서 바뀌면 안된다.
 * 예를 들어 useState 훅스를 조건문, for 안에 넣거나하는 짓은 문제를 야기할 수 있다.
 * 다른 effect 안에서 useState()와 같이 넣으면 실행 순서가 확실하지 않아서 비추
 *
 *
 * useMemo 값을 기억
 * useCallback 함수를 기억
 * useEffect는 [] 안의 항목이 바뀌면 실행
 */