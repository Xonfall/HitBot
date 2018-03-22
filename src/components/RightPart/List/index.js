import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class List extends React.Component {
  render() {

    return (
      <section className='listImg'>
        <h2>Ceci est un titre</h2>
        <ul>
          <li>
            <img src=''/>
            <div>
              <p>Flip</p>
              <p>2017</p>
            </div>
          </li>
          <li>
            <img src=''/>
            <div>
              <p>Flip</p>
              <p>2017</p>
            </div>
          </li>
          <li>
            <img src=''/>
            <div>
              <p>Flip</p>
              <p>2017</p>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default List;