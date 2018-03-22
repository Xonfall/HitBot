import React from 'react';
import PropTypes from 'prop-types';
import Fullimg from '../Fullimg';
import Back from '../Back';
import Title from '../Title';
import Parole from '../Parole';
import List from '../List';


class Artist extends React.Component {

  static propTypes = {
    artist: PropTypes.object,
   };

  render() {

    const { artist } = this.props;

    console.log(artist);

    return (
      <section>
        <Fullimg src={artist.image}/>
        <Back/>
        <Title name={artist.name} />
        <Parole/>
        <List/>
        <List/>
      </section>
    )
  }
}

export default Artist;
