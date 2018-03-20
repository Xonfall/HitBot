import React, { Component } from 'react';
import './App.css';
import Bubble from './Bubble';
import { doSearch } from '../GeniusAPI';

class App extends Component {

  render() {

    const search = doSearch("Who am I? Someone that's afraid to let go, uh");
    console.log(search);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Hit!</h1>
        </header>
        <div className="Content">
          <Bubble type="user" text="Salut !" />
          <Bubble type="bot" text="Hello boi. Je suis Hit!" />
        </div>
      </div>
    );
  }
}

export default App;
