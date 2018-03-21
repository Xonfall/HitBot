import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Input extends Component {

    static propTypes = {
      getTextArea: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired
   };

   handleChange = (event) => {
    //this.setState({value: event.target.value});
    this.props.getTextArea(event.target.value);
  }

    render() {

      return (
        <input className="Input" type="text" value={this.props.value} onChange={ this.handleChange } />
      );
    }
  }
  export default Input;
