import React from 'react';
import PropTypes from 'prop-types';
import Swiper from '../Swiper';
import Ads from '../Ads';
import Historic from '../Historic';

class Logo extends React.Component {
  render() {

    return (
      <section>
        <Swiper/>
        <Ads/>
        <Swiper/>
        <Historic/>
        <Swiper/>
      </section>
    )
  }
}

export default Logo;