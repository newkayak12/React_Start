const React = require('react')
const ReactDom = require('react-dom')
const WordRelay  = require('@/WordRelay')

//여기서 할 수도 있으나.. 코드가 많아지면.. ㅎㄷㄷ,  모듈로 나누는게 낫겠습니다.
// class WordReplay extends React.Component {
//     state = {
//
//     }
//     render(){
//
//     }
// }
ReactDom.render( <WordRelay/>, document.querySelector('#root'))
