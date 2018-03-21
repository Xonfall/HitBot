import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Home from './Home';
import Lyrics from './Lyrics';
import Artist from './Artist';
import Profile from './Profile';
import '../App.css';
import './style.css';

class RightPart extends Component {

  render() {

    return (
      <div className='RightPart'>
      	<Nav/>
      	<Home/>
      </div>
    );
  }
}

export default RightPart;
