import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ChildComponent2 extends Component {
  render() {
    const { objValue, rqStringValue } = this.props;
    return (
      <div>
        <div> 객체 값 : {String(Object.entries(objValue))}</div>
        <div>필수 값: {rqStringValue} </div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    //객체 프로퍼티
  }),

  rqStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
