import React from 'react';
import PropTypes from 'prop-types';
import SwiperCard from '../SwiperCard';
import Ads from '../Ads';
import Historic from '../Historic';

class Logo extends React.Component {

  state ={
    history: [ {nom: 'oui'},{nom: 'oui'},{nom: 'oui'} ]
  }

  render() {

    return (
      <section>
        <SwiperCard titre='Musiques recommandés pour vous'/>
        <Ads/>
        <SwiperCard titre='Artistes recommandés pour vous'/>
        <Historic tableau={this.state.history}/>
        <SwiperCard titre='Top chansons' />
      </section>
    )
  }
}

export default Logo;