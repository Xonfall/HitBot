import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Fullimg extends React.Component {

  static propTypes = {
    src: PropTypes.string,
   };

  render() {

    const { src } = this.props;

    return (
      <section className='bannerImg'>
        <img src={src} className='ArtistImg'/>
      </section>
    )
  }
}

export default Fullimg;
