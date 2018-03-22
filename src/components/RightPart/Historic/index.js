import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Historic extends Component {

  render() {

    return (
      <section>
        <h2>Dernières recherches</h2>
        <ul className='list'>
          <li><p>Une recherche ...<button>x</button></p></li>
          <li><p>Une recherche ...<button>x</button></p></li>
          <li><p>Une recherche ...<button>x</button></p></li>
          <li><p>Une recherche ...<button>x</button></p></li>
        </ul>
      </section>
    );
  }
}

export default Historic;
