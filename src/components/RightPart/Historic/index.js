import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Historic extends Component {

  render() {

    return (
      <section>
        <h2>Dernières recherches</h2>
        <ul className='list'>
          {this.props.tableau.map(t => (
              <li><p>{t.nom}</p><button>x</button></li>
            ))
          }
        </ul>
      </section>
    );
  }
}

export default Historic;
