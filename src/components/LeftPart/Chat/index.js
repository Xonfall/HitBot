import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Chat extends React.Component {
  render() {

    return (
      <section>
        <ul>
          <li className='botMessage'>
            <p>Un message</p>
          </li>
          <li className='clienttMessage'>
            <p>Un message</p>
          </li>
        </ul>
      </section>
    )
  }
}

export default Chat;