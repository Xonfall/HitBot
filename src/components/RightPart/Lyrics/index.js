import React from 'react';
import Fullimg from '../Fullimg';
import Back from '../Back';
import Title from '../Title';
import Parole from '../Parole';


class Artist extends React.Component {
  render() {

    return (
      <section>
        <Fullimg/>
        <Back/>
        <Title/>
        <Parole/>
      </section>
    )
  }
}

export default Artist;