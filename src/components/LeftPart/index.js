import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Chat from './Chat';
import './style.css';

class LeftPart extends Component {

  static propTypes = {
      onArtistSearch: PropTypes.func.isRequired,
   };

  render() {

    const { onArtistSearch } = this.props;

    return(
      <div className='LeftPart'>
        <Logo />
        <Chat onArtistSearch={this.props.onArtistSearch} />
      </div>
    );
  }
}

export default LeftPart;
