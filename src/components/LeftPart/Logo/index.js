import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class LeftPart extends Component {

  render() {

    return (
    	<div className='topLogo'>
    	  <img className='logo' src='/logo.png'/>
    	  <div className='menuBurger'><div></div></div>
    	</div>
    );
  }
}

export default LeftPart;
