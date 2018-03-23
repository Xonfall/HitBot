import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwiperCard from '../SwiperCard';
import Ads from '../Ads';
import Historic from '../Historic';
import { getSong } from '../../../GeniusAPI';

class Home extends Component {

  render() {

    const recommandedMusics = [
      {
        title: 'Je ne regrette rien',
        release_date: 1960,
        artist: 'Edith Piaf',
        image: 'https://images.genius.com/8cbf5583d704b894f4a15d297ad88c60.280x280x1.jpg',
        album_title: 'All The Best',
      },
      {
        title: 'No Woman, No Cry',
        release_date: 1974,
        artist: 'Bob Marley & the Wailers',
        image: 'https://images.genius.com/df02819048ef50e6c2871af5d9ce9eb8.983x1000x1.jpg',
        album_title: 'Natty Dread',
      },
      {
        title: 'Thriller',
        release_date: 1984,
        artist: 'Michael Jackson',
        image: 'https://images.rapgenius.com/99957d6f16abf71d66b7a5ac0034221a.1000x988x1.jpg',
        album_title: 'Thriller',
      },
      {
        title: 'Chandelier',
        release_date: 2014,
        artist: 'Sia',
        image: 'https://images.genius.com/5bcfb76690b3fb068a317c76579b70b5.1000x1000x1.jpg',
        album_title: '1000 Forms of Fear',
      }
    ]

    return (
      <section>
        <SwiperCard titre='Musique recommandée pour vous' items={recommandedMusics}/>
        <Ads/>
        <SwiperCard titre='Artistes recommandés pour vous' items={recommandedMusics}/>
      </section>
    )
  }
}

export default Home;
