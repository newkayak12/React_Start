import React, { Component } from 'react';

class changeStateText extends Component {
  constructor(props) {
    super(props);

    this.increaseCount = this.increaseCount.bind(this);
    this.state = {
      count: 0,
    };
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  render() {
    return (
      <div>
        <span> 카운트 : {this.state.count}</span>
        <br></br>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}
/* 일단 this가 헷깔리는 건 전체적으로 보고 어차피 다시 볼거니까.. */
export default changeStateText;
