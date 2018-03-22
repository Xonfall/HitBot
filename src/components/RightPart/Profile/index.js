import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import './style.css';

class Profile extends Component {

  render() {

    return (
      <section>
        <div className='formProfile'>
          <Title name='Inscription' subname=''/>
          <form>
            <label></label>
            <input type='text' placeholder='Nom'/>
            <input type='text' placeholder='Prénom'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Mot de passe'/>
            <input type='password' placeholder='Confirmation mot de passe'/>
            <input type='submit' value='Inscription'/>
          </form>
        </div>
        <div className='formProfile'>
          <Title name='Connexion' subname=''/>
          <form>
            <input type='text' placeholder='Email'/>
            <input type='text' placeholder='Mot de passe'/>
            <input type='submit' value='Connexion'/>
          </form>
          <a href="#">Connexion avec Facebook</a>
          <a href="#">Connexion avec Twitter</a>
        </div>
      </section>
    );
  }
}

export default Profile;
