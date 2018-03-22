import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Parole extends React.Component {

  static propTypes = {
    text: PropTypes.string,
   };

  render() {

 const createDesc = () => {
     return {__html: this.props.text};
   }

    return (
      <section className='lyrics' dangerouslySetInnerHTML={createDesc()} />
    )
  }
}

export default Parole;
