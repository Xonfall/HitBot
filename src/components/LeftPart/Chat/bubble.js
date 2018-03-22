import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bubble extends Component {

  static propTypes = {
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
   };

  render() {

   const { text, type } = this.props;

    return (
      <div>
        <span className={ type === 'user' ? 'user' : 'bot' }>{ text }</span>
      </div>
    );
  }
}

export default Bubble;
