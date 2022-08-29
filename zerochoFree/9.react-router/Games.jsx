import React from "react";
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import NumberBaseBallHooks from '@/baseball/NumberBaseBallHooks'
import RspHooks from "@/rsp/RspHooks";
import LotteryHooks from "@/lottery/LotteryHooks";
import GameMatcher from "@/GameMatcher";

const Games =  () => {

    return (
        <BrowserRouter>
            <div>
                <div><Link to="/game/numberBaseBall/?key=1">숫자야구</Link></div>
                <div><Link to="/game/rsp/?key=1">가위바위보</Link></div>
                <div><Link to="/game/lottery/?key=1">로또추첨</Link></div>
                <div><Link to="/game/gameMatcher/?key=1">게임매처</Link></div>
            </div>
            <div>
                <Routes>
                    {/*<Route path='/numberBaseBall/' element={<NumberBaseBallHooks/>}/>*/}
                    {/*<Route path='/rsp/' element={<RspHooks/>}/>*/}
                    {/*<Route path='/lottery/' element={<LotteryHooks/>}/>*/}
                    <Route path='/game/:name' element={<GameMatcher/>}/>
                    <Route path='/game/lottery/' element={<LotteryHooks/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export  default Games