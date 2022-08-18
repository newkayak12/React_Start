import React, {Component} from "react";
class LotteryBallClass extends Component{

    classNamer = () =>{
        if(this.props.hidden){
            return 'ball hidden'
        }
        if(this.props.number>36){
            return 'ball purple'
        }
        if(this.props.number>27){
            return 'ball blue'
        }
        if(this.props.number>18){
            return 'ball green'
        }
        if(this.props.number>9){
            return 'ball orange'
        }
        if(this.props.number>0){
            return 'ball red'
        }
    }

    render() {
        return (
            <>
                <div className={this.classNamer()} >
                    {this.props.number}
                </div>
            </>
        )
    }
}
export default  LotteryBallClass
