import React, { Component } from 'react';
import './App.css';
import Bubble from './Bubble';
import { doSearch, getSong, getArtist, getLyrics } from '../GeniusAPI';

class App extends Component {

  render() {

    // const test = getLyrics("test");
    // console.log(test);

    const search = getArtist('Aznavour');
    console.log(search);

    function createDesc() {
      return {__html: search.description};
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Hit!</h1>
        </header>
        <div className="Content">
          <Bubble type="user" text="Salut !" />
          <Bubble type="bot" text="Hello boi. Je suis Hit!" />
          <textarea className="Textarea"></textarea>
          <div dangerouslySetInnerHTML={createDesc()} />
        </div>
      </div>
    );
  }
}

export default App;
