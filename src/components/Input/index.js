import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Input extends Component {
  
    static propTypes = {
      getTextArea: PropTypes.func.isRequired
   };

   handleChange = (event) => {
    //this.setState({value: event.target.value});
    this.props.getTextArea(event.target.value);
  }

    render() {

      return (
        <textarea onChange={ this.handleChange } />
      );
    }
  }
  export default Input;