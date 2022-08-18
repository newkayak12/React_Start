import React, {Component} from "react";

/**
 * class의 경우 contructor가 돌고, render -> ref 설정 -> (componentDidMount)
 * -> shouldComponentUpdate(update rule) -> (setState/props 변경 시 재렌더)
 * 부모가 자식을 없애면 componentWillUnmount
 */

const POINTER = {
    R:'0px',
    S:'-135px',
    P:'-284px'
}
class RspClass extends Component {
    state = {
        result:'',
        score:0,
        imgCoord:POINTER.S,
    }

    /**
     * 라이프 사이클 훅
     * === beforeCreate
     * === created
     * componentWillMount === beforeMount
     * componentDidMount === mounted
     * === beforeUpdate
     * componentDidUpdate === updated
     * componentWillUnmount === beforeDestroy(beforeUnmounted)
     * === destroyed(unmounted)
     *
     * .... hooks는 없다고 합니다.
     */

    interval;

    componentWillMount() {
       this.interval = setInterval(()=>{this.rolling()},200)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    rolling(){
        const {imgCoord} = this.state
        if(imgCoord === POINTER.S){
         this.setState({imgCoord: POINTER.R})
         return
        }
        if(imgCoord === POINTER.R){
            this.setState({imgCoord: POINTER.P})
            return
        }
        if(imgCoord === POINTER.P){
            this.setState({imgCoord: POINTER.S})
            return
        }
    }
    doPlay = (e,target) =>{
        clearInterval(this.interval)
        const myScore = this.score(target)
        const comScore = this.score(this.state.imgCoord)
        const diff  = myScore - comScore
        if(diff===0){
            this.setState({result:'비겼다.'})
        }else if([-1,2].includes(diff)){
            this.setState((prevState)=>{return {result:'이겼다.', score: prevState.score + 1 }})
        } else {
            this.setState((prevState)=>{return {result:'졌다.', score: prevState.score - 1 }})
        }
        setTimeout(()=>{
            this.interval = setInterval(()=>{this.rolling()
            this.setState({result:''})
        },200)},1000)
    }
    score = (target) =>{
        switch (target){
            case POINTER.R:
                return 0
            case POINTER.S:
                return 1
            case POINTER.P:
                return -1
        }
    }
    render() {
        const {result, score, imgCoord} = this.state
        return (
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`, width:'150px', height: `200px`}}></div>
                <div style={{display:"flex", justifyContent:"space-around", width:'150px'}}>
                    <button onClick={(e)=>this.doPlay(e,POINTER.S)}>가위</button>
                    <button onClick={(e)=>this.doPlay(e,POINTER.R)}>바위</button>
                    <button onClick={(e)=>this.doPlay(e,POINTER.P)}>보</button>
                </div>
                <h1>{result}</h1>
                <p>현재 {score} 점</p>
            </>
        )
    }
}
export default RspClass
