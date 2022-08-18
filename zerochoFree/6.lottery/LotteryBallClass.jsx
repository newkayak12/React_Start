import React, {PureComponent} from "react";
class LotteryBallClass extends PureComponent{

    classNamer = () =>{
        if(this.props.hidden){
            return ' hidden'
        }
        if(this.props.number>36){
            return ' purple'
        }
        if(this.props.number>27){
            return ' blue'
        }
        if(this.props.number>18){
            return ' green'
        }
        if(this.props.number>9){
            return ' orange'
        }
        if(this.props.number>0){
            return ' red'
        }
    }

    render() {
        return (
            <>
                <div className={`ball ${this.classNamer()}`} >
                    {this.props.number}
                </div>
            </>
        )
    }
}
export default  LotteryBallClass
