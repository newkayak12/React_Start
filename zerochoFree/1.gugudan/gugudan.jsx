const React = require('react')
const Gugudan = () =>{
    const [first, setFirst] = React.useState(Math.ceil(Math.random()*9))
    const [second, setSecond] = React.useState(Math.ceil(Math.random()*9))
    const [value, setValue] = React.useState('')
    const [result, setResult] = React.useState('')
    const inputRef = React.useRef(null);

    const onChange = (e) => {
        setValue(e.target.value)
    }
    // 옛날 State를 사용하는 경우
    /**
     * setResult((prevResult) => {
     *     return prevResult + 1
     * }
     * 등과 같이 사용할 수 있다.
     */
    const onClick = (e) => {
        e.preventDefault()
        if(parseInt(value) === (first * second)){
            setResult(`${value}입니다! 정답`)
            setFirst(Math.ceil((Math.random()*9)))
            setSecond(Math.ceil((Math.random()*9)))
            setValue('')
            //setState가 비동기인 이유가 위 set 할 때마다 렌더가 일어나는게 아니라 한 번에 모아서 한다. 그래서 비동기이다.
        } else {
            setResult('땡')
            setValue('')
        };
        inputRef.current.focus()
    }
    //React에서는 Class를 html클래스 , class 문법 때문에 class를 못 쓴다고 합니다. 그래서
    //className으로 써야한다.
    //label에 for은 반복 for이랑 헷깔려서  htmlFor로 바꿔서 써야한다.
    return (
        <React.Fragment>
            <p>{first} 곱하기 {second} 은(는)?</p>
            <input ref={inputRef} type="number" value={value} onChange={onChange}/>
            <button onClick={onClick}>입력</button>
            <div>{result}</div>
        </React.Fragment>
    )
}
module.exports = Gugudan