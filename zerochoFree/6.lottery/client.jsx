import React from "react";
import ReactDom from 'react-dom/client'

//class
// import Lottery from "@/LotteryClass";
//()=>{}
import Lottery from "@/LotteryHooks";
//구버전
// ReactDom.render(<Rsp/>, document.querySelector('#root') )
ReactDom.createRoot(document.querySelector('#root')).render(<Lottery/>)
