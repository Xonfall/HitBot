import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Card extends Component {

  render() {

    return (
        <a href='#'>
          <article className='Card'>
            <div>
              <p>Écouter sur Deezer</p>
            </div>
          </article>
          <p className='cardInfos'><span>Prime</span><br/>Merlose</p>
        </a>
    );
  }
}

export default Card;
