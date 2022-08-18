import {useRef, useEffect} from "react";
function useInterval(callback, delay){
    /*
        커스텀훅은 리액트 훅을 가지고 하나의 셋으로 만들어서 사용
     */
    const savedCallback = useRef()
    useEffect(()=>{
        savedCallback.current = callback
    })
    useEffect(()=>{
        function tick() {
            savedCallback.current()
        }

        if(delay !== null){
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])

    return savedCallback.current
}
export default useInterval
