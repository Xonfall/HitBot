import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Form extends React.Component {
  render() {

    return (
      <form>
        <input type='text'/>
        <input type='submit'/>
      </form>
    )
  }
}

export default Form;