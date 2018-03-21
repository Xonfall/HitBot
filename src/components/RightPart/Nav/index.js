import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class LeftPart extends Component {

  render() {

    return (
      <header>
      	<nav>
      		<a className='active' alt="">Accueil</a>
      		<a alt="">Artistes</a>
          <a alt="">Paroles</a>
      		<a alt="">Profil</a>
      	</nav>
      </header>
    );
  }
}

export default LeftPart;
