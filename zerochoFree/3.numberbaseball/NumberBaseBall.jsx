// import React, {Component} from "react";
"use strict"
const React  = require("react")
const {Component, createRef} = React
const Tries = require('./Tries')
const Try = require('@/Try')

function getNumbers() {
    //this를 안쓰면 밖으로 뺄 수 있다는데.. 그냥 취향인거 같음
    const set = new Set()
    while(set.size<4){
        set.add(Math.floor(Math.random()*10))
    }
    const result = Array.from(set)
    return result.join('')
}

class NumberBaseBall extends Component {

    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries : [],
        // fruits: [['사과','맛있다.'], ['바나나','맛없다.'], ['포도','달다'], ['귤','시다'], ['감','떫다.'], ['배', '시원하다.'], ['밤','쿰쿰하다.']]
    }
    input = createRef();
    // refInput = (c) =>{this.input = c} //이렇게하는 건? 다른 동작이 필요할 때, ref 설정에 자유도가 있음
    // 이렇게하면 hooks와 유사해짐

    onChangeInput = (e) => {
        this.setState({
            value:e.target.value
        })
    }
    onClickEvent = (e) => {
        if(this.state.value === ''){
            return
        }
         e.preventDefault
        if(this.state.value === this.state.answer){
            this.setState((prevState)=> { return {result:`홈런!`,tries: [...prevState.tries, {try: value, result:"홈런!"}]}})
            alert("you win")
            this.setState({value:'', answer:getNumbers(), tries:[]})
        //    불변성? =>... Vue랑 똑같은 이유, 감지를 못한다는 문제
        //    렌더링 기준이 이전 state, 지금 state가 다를 경우 렌더가 일어남.
        } else {
            const realAnswer = this.state.answer.split('').map((v)=> parseInt(v))
            const answerArray = this.state.value.split('').map((v)=> parseInt(v))
            let strike = 0;
            let ball = 0;
            if(this.state.tries.length >= 9){
                this.setState({
                    result:`GAME OVER \n answer: ${this.state.answer}`
                })
                alert("you lose!")
                this.setState({value:'', answer:getNumbers(), tries:[]})
            } else {
                for(let i = 0; i < 4; i+=1){
                    if(answerArray[i] === realAnswer[i]){
                        strike += 1;
                    } else if(realAnswer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this. setState((prevState)=>{
                    return {tries: [ ...prevState.tries, {try: this.state.value, result:`${strike} 스트라이크 ${ball} 볼입니다.`}]}
                })
            }
        }

        this.setState({value:''})
        this.input.current.focus()
    }

   // ()=>{}를 쓰지 않는다면
   //  constructor(props) {
   //      super(props);
   //      this.state = { ... }
   //      this.onChangeInput = this.onChangeInput.bind(this)
   //      this.onClickEvent = this.onClickEvent.bind(this)
   //      //lexicalScope this,
   //  }
   //  onChangeInput = function(e){
   //      this.setState({ value:e.target.value})
   //  }
   //  onClickEvent = function(e){
   //      e.preventDefault
   //  }

    render(){
        const {result, value, tries, answer} = this.state
        return (
            <>
                <h1>숫자야구</h1>
                <h3>{result}</h3>
                <input type="text" maxLength={4} value={value} onChange={this.onChangeInput} ref={this.input}/>
                &nbsp;<button onClick={this.onClickEvent}>정답?</button>
                <div>시도: {tries.length}</div>
                <ul>
                    {/*리액트에서 반복문을 사용하는 방법*/}

                    {/*exam1*/}
                    {/*{tries.map((value,index)=>{*/}
                    {/*    return ( <li key={index}>{value}</li> )*/}
                    {/*})}*/}

                    {/*exam2*/}
                    {/*{[['사과','맛있다.'], ['바나나','맛없다.'], ['포도','달다'], ['귤','시다'], ['감','떫다.'], ['배', '시원하다.'], ['밤','쿰쿰하다.']].map((v, i)=>{*/}
                    {/*    return ( <li key={i}>*/}
                    {/*        <b>{v[0]}</b>*/}
                    {/*        <span>-</span>*/}
                    {/*        {v[1]}*/}
                    {/*    </li> )*/}
                    {/*})}*/}
                    {/* key에 map의 index를 사용하면 나중에 성능 최적화에서 문제가 생길 수 있다.  => 엘리먼트 추가/수정 시 배열의 순서가 바뀌면 문제가 생길 수 있다. (Vue도 같을 거 같네요)*/}

                    {/*조금 더 간결하게는 */}
                    {/*{fruits.map((v)=> (<li> <b>{v[0]}</b> <span>-</span>{v[1]}</li>))}*/}

                    {/*아예 파일을 빼버리는 방법도 있다.*/}
                    {/*  이런 반복문을 처리하는 방법으로 props(는 vue랑 같은 거였구요..)  */}
                    {/*{fruits.map((v,i)=> (<Tries value={v} index={i} key={i}/>))}*/}


                    {tries.map((v,i)=>(<Try try={v.try} result={v.result} key={i}/>))}
                </ul>
            </>
        )
    }
}
module.exports = NumberBaseBall;
