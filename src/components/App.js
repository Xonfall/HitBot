import React, { Component } from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import { doSearch, getSong, getArtist } from '../GeniusAPI';

class App extends Component {

  state = {
    artist: null,
  }

  onArtistSearch = (name) => {
    // const artist = getArtist(name);
    // this.setState({
    //   artist
    // })
  }

  render() {

    const { artist } = this.state;
    const search = getArtist('Eminem');
    console.log(search);

    return (
      <div className="App">
          <LeftPart onArtistSearch={this.onArtistSearch} />
          <RightPart artist={artist && artist} />
      </div>
    );
  }
}
export default App;
