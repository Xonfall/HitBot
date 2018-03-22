import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import Card from '../Card';

class SwiperCard extends React.Component {
  render() {

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
	        <div><Card/></div>
	        <div><Card/></div>
	        <div><Card/></div>
	        <div><Card/></div>
	        <div><Card/></div>
	      </Swiper>
	      </section>
    )
  }
}

export default SwiperCard;