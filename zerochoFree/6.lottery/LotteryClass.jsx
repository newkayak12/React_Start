import React, {Component} from "react";
import LotteryBallClass from "@/LotteryBallClass";
function select() {
    const set = new Set()
    const arr = []
    while(set.size < 7){
        set.add(Math.floor(Math.random()*45)+1)
    }
    set.forEach(v=> arr.push(v))
    return arr
}
class LotteryClass extends Component{
    state = {
        presentNumber:[],
        presentWinNumber:'',
        number: [],
        winNumber:''
    }
    interval;
    componentDidMount() {
        const arr = select()
        this.state.number = arr.slice(0, 6)
        this.state.winNumber = arr.slice(6, arr.length)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //언제 업뎃할지?
        console.log(prevProps, prevState, snapshot)
    }

    collect = () =>{
        const {presentNumber, presentWinNumber, number, winNumber} = this.state
        new Promise((resolve)=>{
            this.interval = setInterval(()=>{
                if(this.state.presentNumber.length>5){
                    clearInterval(this.interval)
                    resolve()
                }
                this.setState((prevState)=>{
                    const selectedNumber = number.pop()
                    const result  = [...prevState.presentNumber]
                    if(selectedNumber){
                       result.push(selectedNumber)
                    }
                    return {
                        presentNumber: result
                    }
                })
            },500)
        }).then(()=>{
            this.setState((prevState)=>{return {presentWinNumber:prevState.winNumber.pop()}})
        })
    }
    onClick = () =>{
        this.collect()
    }
    onRedo = () => {
        this.setState({presentNumber:[], presentWinNumber:''})
        const arr = select()
        this.state.number = arr.slice(0, 6)
        this.state.winNumber = arr.slice(6, arr.length)
        this.collect()
    }


    render() {
        const {presentNumber, presentWinNumber} = this.state
        return (
            <>
                <h1>Lottery</h1>
                {presentNumber.length>0? <p>번호</p>:null}
                <div style={{display:"flex"}}>
                    {presentNumber.map((v,i)=> <LotteryBallClass number={v} hidden={false} key={i}/>)}
                </div>

                {presentWinNumber? <p>행운 번호</p>:null}
                {presentWinNumber === ''? null: <LotteryBallClass number={presentWinNumber} hidden={true}/>}
                <br/>
                <button onClick={presentNumber.length>0 && presentWinNumber? this.onRedo:this.onClick}>{presentNumber.length>0 && presentWinNumber? '재추첨':'추첨!'}</button>
            </>
        )
    }
}
export  default LotteryClass
