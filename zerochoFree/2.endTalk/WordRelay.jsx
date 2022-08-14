const React = require("react")
const { useState, useRef } = React
// const { Component } = React
// class WordRelay extends Component {
const WordRelay = () =>{
    // state = {
    //     wordRef:'제로초',
    //     input:'',
    //     result:''
    // }
    const [ wordRef, setWordRef ] = useState('제로초')
    const [ input, setInput]  = useState('')
    const [result, setResult] = useState('');
    const inputRef = useRef(null);
    // inputRef
    // onRefInput = (c)=>{
    //     this.inputRef = c
    // }
    const onInput = (e) =>{
        e.preventDefault()
        // if(this.state.wordRef[this.state.wordRef.length-1] == this.state.input[0]){
        if(wordRef[wordRef.length-1] == input[0]){
            // this.setState({result:"정답!", wordRef: this.state.input, input:''})
            setResult("정답")
            setWordRef(input)
            setInput('')
        } else {
            this.setState({result:"땡"})
        }
        // this.input.focus()
        inputRef.current.focus()
    }
    const onChangeInput = (e) =>{
        // this.setState({input:e.currentTarget.value})
        setInput(e.target.value)
    }
    const keyUp = (e) =>{
        if(e.keyCode == 13){
            // this.onChangeInput(this.input)
        }
    }

    // render () {
       return (
           <>
               <h1>{wordRef}</h1>
               {/*<input type="text" ref={this.onRefInput} value={this.state.input} onChange={this.onChangeInput} onKeyUp={this.keyUp}/>*/}
               <input className="bye" type="text" ref={inputRef} value={input} onChange={onChangeInput} onKeyUp={keyUp}/>
               <button onClick={onInput}>입력</button>
               <div>{result}</div>
           </>
       )
    // }
    /**
     * input에는 controlledInput, unControlledInput이 있다.
     * controlledInput은 value, onChange(setState로 바꾸는)
     * unControlledInput은 이 둘이 없는 원시적 형태
     *
     * unControlledInput는 onSubmit(submitForm)에서만 특정 동작을 하는 경우
     *
     * 참조 [https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/]
     *
     * unControlledInput에 기본값을 넣고 싶으면 defaultValue=''로 넣는다. 
     */
}
module.exports = WordRelay