import React, {PureComponent, Component} from "react";
"use strict"
class RenderTest extends PureComponent {
    state = {
        counter: 0
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     //어떤 경우에 렌더를 해야하는지 정해줄 수 있다.
    //     if(this.state.counter !== nextState.counter){
    //         return true
    //     }
    //     return false
    // }
    /**
     * nextContext의 context?
     *
     * A(조상)=>B(부모)=>C(자식)
     * A=>C로 props로 넘기려면.. B를 꼭 거쳐야한다..
     *
     * 여기서 A => C로 바로 넘기려면 context 혹은 redux
     */
    //이거보다 편한 방법? PureComponent -> 객체, 배열같은 복잡한(참조 관계가 있는) 구조는 판단하지 못한다.
    //state, props가 달라지면 재 렌더
    // -> Array, Object는 새로 할당하는 식으로 극복이 가능
    //
    // 함수형은 memo
    // 클래스는 PureComponent
    //
    //PureComponent의 경우 복잡해지면 작동하지 않을 수도 있다.
    /**
     * 결론
     * functional components는 아직까지 최적화되어있지 않다. 그 이유는 함수형 컴퍼넌트도 결국엔 클래스 기반 컴퍼넌트로 래핑되기 때문이다.
     * (하지만 React Team은 언젠가 함수형 컴퍼넌트를 최적화하겠다고 했다.)
     * 따라서 현재까지는 최적화가 필요한 컴퍼넌트에서는 클래스 컴퍼넌트의 shouldComponentUpdate 메소드를 사용하거나 PureComponent를 통해 최적화하는 것이 가장 좋은 방법이라고 할 수 있다.
     * 출처 : [https://wonism.github.io/react-pure-component/]
     *
     *
     * ++ Vue는 알아서 비교 대조한다고 합니다
     */

    onClick = () =>{
        this.setState({})
    //    state, props가 바뀌어야만 렌더가 되는데, 그냥 setState만 호출해도 바뀐다.
    }

    render(){
        console.log("RENDER", this.state)
        return (
            <div>
                <button onClick={this.onClick}>CLICK</button>
            </div>
        )
    }
}
export default  RenderTest
