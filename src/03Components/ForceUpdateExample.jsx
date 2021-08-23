import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    //state를 쓰기 위해서 생ㅓ자

    this.loading = true;
    this.formData = 'no Data';

    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new Data';

    //state를 변경한다.

    this.loading = false;
    this.formData = data;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <span> 로딩중 : {String(this.loading)}</span>
        <span> 결과 : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
