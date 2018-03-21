import React, { Component } from 'react';
import './App.css';
import Bubble from './Bubble';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import { doSearch } from '../GeniusAPI';

class App extends Component {

  render() {

    return (
      <div className="App">
          <LeftPart/>
          <RightPart/>
      </div>
    );
  }
}

export default App;
