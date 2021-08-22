import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 흠.. 개념이 어렵네

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

PropsComponent.propTypes = {
  name: PropTypes.string,
};

// 특수변수????

export default PropsComponent;
