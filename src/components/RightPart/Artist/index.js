import React from 'react';
import PropTypes from 'prop-types';
import Fullimg from '../Fullimg';
import Back from '../Back';
import Title from '../Title';
import Parole from '../Parole';
import List from '../List';


class Artist extends React.Component {
  render() {

    return (
      <section>
        <fullImg/>
        <Back/>
        <Title/>
        <Parole/>
        <List/>
        <List/>
      </section>
    )
  }
}

export default Artist;