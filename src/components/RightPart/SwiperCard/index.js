import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import Card from '../Card';

class SwiperCard extends Component {

  static propTypes = {
    items: PropTypes.array,
   };

  render() {

    const { items = null } = this.props;

  	const params = {
      slidesPerView:3,
      loop:true,
      spaceBetween: 30,
      freeMode: true
    };

    return (
    	<section>
    	<h2>{this.props.titre}</h2>
	      <Swiper {...params}>
          {items && items.map((item, i) => {
            return (
              <div key={i}><Card content={item} /></div>
            )
          })}
	      </Swiper>
	      </section>
    )
  }
}

export default SwiperCard;
