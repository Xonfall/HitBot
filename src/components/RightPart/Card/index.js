import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Card extends Component {

  render() {

    return (
        <a href='#'>
          <article className='Card'>
            <div>
              <p>Écouter sur <img src="#" alt="logo deezer"/></p>
            </div>
          </article>
          <p><span>Prime</span>Merlose</p>
        </a>
    );
  }
}

export default Card;
