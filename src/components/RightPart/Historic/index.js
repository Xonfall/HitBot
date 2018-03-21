import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Historic extends Component {

  render() {

    return (
      <section>
        <h2>Dernières recherches</h2>
        <ul>
          <li><p>Une recherche ...</p><span>x</span></li>
          <li><p>Une recherche ...</p><span>x</span></li>
          <li><p>Une recherche ...</p><span>x</span></li>
          <li><p>Une recherche ...</p><span>x</span></li>
        </ul>
      </section>
    );
  }
}

export default Historic;
