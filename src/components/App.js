import React, { Component } from 'react'; 
import LeftPart from './LeftPart';
import RightPart from './RightPart';

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
