import React, {Component} from "react";

const STATE = {
    WAIT:'waiting',
    READY:'ready',
    NOW:'now'
}

class ReactionRateCheckClass extends Component {

    state = {
        state:STATE.WAIT,
        msg:'클릭해서 시작하기',
        result:[]
    }
    timeout;
    startTime;
    endTime;
    clickScreen = (e) =>{
        const {state, msg, result} = this.state

        if(state == STATE.WAIT){
            this.setState({
                state:STATE.READY,
                msg:'초록색이 되면 시작하세요'
            })
            this.timeout = setTimeout(()=>{
                this.setState({state:STATE.NOW, msg: "지금!"})
            }, Math.floor(Math.random() * 1000) + 2000)
            this.startTime = new Date()
        } else if(state === STATE.READY) {
            this.setState({
                state:STATE.WAIT,
                msg:'너무 빨리 눌렀어요.'
            })
            clearTimeout(this.timeout)
        } else if (state === STATE.NOW){
            this.endTime = new Date()
            this.setState((prevState)=>{
                return {
                    state:STATE.WAIT,
                    msg:'클릭해서 시작하세요',
                    result:[...prevState.result, this.endTime-this.startTime]
                }
            })
        }

    }
    onReset = () =>{
        this.setState({result:[]})
    }
    avg = () =>{
        const {result} = this.state
        return (
            <>
                {result.length === 0 ? null : <div>평균: {result.reduce((p, n) => p + n, 0) / result.length}ms</div>}
                <button onClick={this.onReset}>REST</button>
            </>
        )
    }
    render(){
        const {state, msg, result} = this.state
        return(
            <>
                <h2>반응속도 체크</h2>
                <div id="screen" className={state} onClick={this.clickScreen}>
                    <p>{msg}</p>
                </div>
                {this.avg()}

            </>
        )
    }
}
export default ReactionRateCheckClass
