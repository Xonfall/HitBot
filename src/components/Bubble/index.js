import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Bubble extends Component {

  static propTypes = {
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
   };

  render() {

   const { text, type } = this.props;

    return (
      <div className={type === 'user' ? 'user' : 'bot'}>
        <span>{text}</span>
      </div>
    );
  }
}

export default Bubble;
