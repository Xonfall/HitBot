import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Card extends Component {

  static propTypes = {
    content: PropTypes.object,
   };

  render() {

    const { content } = this.props;

    return (
        <a href='#'>
          <article className='Card'>
            <img className='recommanded' src={content.image} />
            <div>
              <p>Écouter sur Deezer</p>
            </div>
          </article>
          <p className='cardInfos'><span>{content.artist}</span><br/>{content.title}</p>
        </a>
    );
  }
}

export default Card;
