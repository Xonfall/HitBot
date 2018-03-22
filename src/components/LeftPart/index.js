import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Chat from './Chat';
import './style.css';

class LeftPart extends Component {

  static propTypes = {
      onSearch: PropTypes.func.isRequired,
   };

  render() {

    const { onSearch } = this.props;

    return(
      <div className='LeftPart'>
        <Logo />
        <Chat onSearch={onSearch} />
      </div>
    );
  }
}

export default LeftPart;
