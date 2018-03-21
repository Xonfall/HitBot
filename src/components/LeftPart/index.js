import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Chat from './Chat';
import Suggestions from './Suggestions';
import Form from './Form';
import '../App.css';
import './style.css';

class LeftPart extends Component {

  render() {

    return (
      <div className='LeftPart'>
      	<Logo/>
      	<Chat/>
      	<Suggestions/>
      	<Form/>
      </div>
    );
  }
}

export default LeftPart;
