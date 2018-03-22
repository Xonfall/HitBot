import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Title extends React.Component {

  static propTypes = {
    name: PropTypes.string,
   };

  render() {

    const { name } = this.props;

    return (
      <section className='Title'>
<<<<<<< HEAD
      	<h2 className='subtitle'>{name}</h2>
      	<h3>Page Artiste</h3>
=======
      	<h2 className='subtitle'>{this.props.name}</h2>
      	<h3>{this.props.subname}</h3>
>>>>>>> jawed
      </section>
    )
  }
}

export default Title;
