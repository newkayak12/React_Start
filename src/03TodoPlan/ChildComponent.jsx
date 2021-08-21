import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ChildComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <br />
        <br />
        <span>boolVal: {boolValue}</span>
        <br />
        <span>numberVal: {numValue}</span>
        <br />
        <span>arrayVal: {arrayValue}</span>
        <br />
        <span>objVal: {String(objValue)}</span>
        <br />
        <span>nodeVal: {nodeValue}</span>
        <br />
        <span>funcVal: {String(funcValue)}</span>
        <br />
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
