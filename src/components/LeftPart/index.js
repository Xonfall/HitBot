import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Chat from './Chat';
import './style.css';

class LeftPart extends Component {

  render() {

    return(
      <div className='LeftPart'>
        <Logo />
        <Chat />
      </div>
    );
  }
}

export default LeftPart;
