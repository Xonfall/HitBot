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
    recommanded: PropTypes.array,
   };

  render() {

    const { artist = null, recommanded } = this.props;

    const firstList = recommanded ? [recommanded[0], recommanded[1], recommanded[2]] : null;
    const secondList = recommanded ? [recommanded[3], recommanded[4], recommanded[5]] : null;

    return (
      <section>
        <Fullimg src={artist && artist.image}/>
        <Title name={artist && artist.name} />
        <Parole text={artist && artist.description} />
        <h2>Titres principaux</h2>
        <List items={firstList}/>
        <List items={secondList}/>
      </section>
    )
  }
}

export default Artist;
