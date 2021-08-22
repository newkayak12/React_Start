import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CHildProperty extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

CHildProperty.propTypes = {
  children: PropTypes.node,
};
export default CHildProperty;
