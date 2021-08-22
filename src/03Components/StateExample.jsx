import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    // state를 정의한다?
    this.state = {
      loading: true,
      formData: 'no Data',
    };

    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new Data';
    const { formData } = this.state;

    this.setState({
      loading: false,
      formData: data,
    });
    //this.state.loading은 true?
    console.log('loading : ', this.state.loading);
  }

  render() {
    return (
      <div>
        {/* state데이터 == this.state로 접근 가능 */}
        <span>로딩중 : {String(this.state.loading)}</span>
        <span> 결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
