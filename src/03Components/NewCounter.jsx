import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inreaseCount = this.inreaseCount.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      count,
      newCount: count === state.count ? state.newCount : count,
    };
  }

  inreaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }
  render() {
    return (
      <div>
        <div>현재 카운트 : {this.state.newCount}</div>
        <div>
          <button onClick={this.inreaseCount}>카운트 증가 </button>
        </div>
      </div>
    );
  }
}

export default NewCounter;
