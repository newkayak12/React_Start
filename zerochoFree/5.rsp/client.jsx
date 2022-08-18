import React from "react";
import ReactDom from 'react-dom'

//class
// import Rsp from "@/RspClass";
//()=>{}
import Rsp from "@/RspHooks";
//구버전
// ReactDom.render(<Rsp/>, document.querySelector('#root') )
ReactDom.createRoot(document.querySelector('#root')).render(<Rsp/>)
