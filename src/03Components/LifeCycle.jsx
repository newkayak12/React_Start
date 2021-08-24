import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shallowEqualObjects } from 'shallow-equal';

class LifeCycle extends Component {
  /* 
		lifeCycle
		--생성
		1. constructor : 맨 처음에 생성될 떄 단 한 번만 호출되며 상태를 선언할 때 사용 또한 super()를 최상단에 호출해야한다. >>> 자바랑 이건 똑같네
		2. render() : 데이터가 변경되어 새 화면을 그려할 때 자동으로 호출되는 함수(callback?)
		3. static getDerivedStateFromProps(props, state) : static 함수, this.~~ 사용 불가 그냥 인자로 전달된 props, state를 사용해야한다. 상위 컴포넌트에서 전달 받은 프로퍼티로 state값을 연동할 때 주로 사용된다. 
		4. componentDidMount() : render로 화면을 그린 후  (화면 표현 후 해야하는 )
		--수정
		5. shoudComponentUpdate(nextProps, nextState) : 프로퍼티 변경, setState로 state를 변경하면 화면을 새로 출력해야하는 지를 판단하는 함수, 이 함수는 화면을 새로 출력할지 말지를 판단하며, 데이터 변화를 비교하는 작업을 포함하므로 리액트 성능에 영향을 준다. 
		6. getSnapshowBeforeUpdate(prevProps, prevState) : 컴포넌트의 변경된 내용이 가상 화면에 완성된 이후에 호출되는 함수이다. >> 출력될 엘리먼트의 크기 또는 스크롤 위치 등의 DOM 정보에 접근할 떄 사용된다.
		7. ComponentDidUpdate(prevProps, prevState, snapShot) : 실제 화면에 출력된 이후 ㅅ호출되는 함수, 부모 컴포넌트로 부터 전달된 이전 프로퍼티와 이전 스태이트 값고 ㅏ함께 getSnapshowBeforeUppdate() 함수에 서 반환된 값을 인자로 전달받는다. 이갑들을 이요하여 스크롤 위치를 옮기거나 커서를 ㅣㅇ동시키는 등의 DOM 정보를 변경할 떄 사용된다. 
		--소명
		8. componentWillUnmount() : 컴퐇넌트가 소멸되기 직전에 호출되는 함수, 컴포넌트에서 감시하고 있는 작업들을 해체할 떄 필요한 함수이다. 

		Spring에서 AOP?이런 느낌이 나긴하네... 
	
	*/
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }

  constructor(props) {
    super(props);
    console.log('constructor 호출');
    this.state = {};
  }

  //   componentWillMount() {
  //     console.log('componentWillMount 호출');
  //   }

  componentDidMount() {
    console.log('componentDidMount 호출');
    this.setState({ updated: true });
  }

  //   componentWillReceiveProps(nextProps) {
  //     console.log('componentWillReceiveProps 호출');
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('shoutldComponentUpdate 호출');
  //     //     console.log('false 반환하여 강제로 변경을 하지 않는다면?');
  //     //     return false; //loading : false라는 문구와 함께 로딩이 되지 않는다 .
  //   }

  //   componentWillUpdate(nextProps, nextState) {
  //     console.log('componentWillUpdate 호출');
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate 호출');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount호출');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
    return {};
  }

  shouldComponentUpdate() {
    console.log('shoutldComponentUpdate 호출');
    //     //     console.log('false 반환하여 강제로 변경을 하지 않는다면?');
    //     //     return false; //loading : false라는 문구와 함께 로딩이 되지 않는다 .
    return true;
  }

  render() {
    console.log('render 호출');
    return null;
  }
}

LifeCycle.propTypes = {
  /* 
		lifeCycle
		1. constructor : 맨 처음에 생성될 떄 단 한 번만 호출되며 상태를 선언할 때 사용 또한 super()를 최상단에 호출해야한다. ()
	
	*/
};

export default LifeCycle;
/* 
	lifeCycle
	1. constructor : 맨 처음에 생성될 떄 단 한 번만 호출되며 상태를 선언할 때 사용 또한 super()를 최상단에 호출해야한다. ()

*/
