import React,{Component} from "react";
import {useLocation, useNavigate} from "react-router";
import NumberBaseBallHooks from '@/baseball/NumberBaseBallHooks'
import RspHooks from "@/rsp/RspHooks";
import LotteryHooks from "@/lottery/LotteryHooks";


class GameMatcher extends Component{
    render() {
    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    console.log(urlSearchParams.get('page'));
    console.log(this.props)
    let path = this.props.location.pathname
    console.log(path)
        if(path.includes("numberBaseBall")){
            return <NumberBaseBallHooks/>
        } else if(path.includes("rsp")) {
            return <RspHooks/>
        } else if(path.includes("lottery")){
            return <LotteryHooks/>
        }
        return (
            <div>일치하는 게임이 없습니다.</div>
        )
    }
}

const WrappedComponent = (props) => {
    const location = useLocation()

    return <GameMatcher location={location} {...props} />
}
export default WrappedComponent