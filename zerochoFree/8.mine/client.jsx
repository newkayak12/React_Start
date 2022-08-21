import React from "react";
import ReactDom from 'react-dom/client'

//class
// import TicTacToe from "@/TictactoeClass";
//()=>{}
import MineSweeper from "@/MineSweeper";
//구버전
// ReactDom.render(<Rsp/>, document.querySelector('#root') )
ReactDom.createRoot(document.querySelector('#root')).render(<MineSweeper/>)
