import React, { Component } from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import { doSearch, getSong, getArtist } from '../GeniusAPI';

import axios from 'axios';

class App extends Component {

  state = {
    artist: null,
  }

  onArtistSearch = (name) => {
    const artist = getArtist(name);
    console.log(artist);
    // this.setState({
    //   artist
    // })
  }

  // callBotApi = () => {
  //    axios.get('http://localhost:3000/api/music')
  //    .then(res => {
  //      this.setState({ data: res.data, loading: false });
  //    })
  //  }

  render() {

    const { artist } = this.state;
    const search = doSearch('J\'ai neuf pussy, pas neuf fusils qui me font la cour');
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
