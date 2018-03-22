import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Title extends React.Component {
  render() {

    return (
      <section className='Title'>
      	<h2 className='subtitle'>Titre</h2>
      	<h3>Sous-titre</h3>
      </section>
    )
  }
}

export default Title;