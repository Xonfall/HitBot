import React, { Component } from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import { doSearch, getSongs, getSong, getArtist } from '../GeniusAPI';

import axios from 'axios';

class App extends Component {

  state = {
    artist: null,
    songs: null,
    recommanded: null,
  }

  componentWillMount() {
    const artist = getArtist("Michael Jackson");
    const recommanded = getSongs("Michael Jackson");
    this.setState({
      artist,
      recommanded,
    })
  }

  onSearch = (type, name) => {
    let result = null;
    if (type === 'artist') {
      result = getArtist(name);
      const recommanded = getSongs(name);
      this.setState({
        artist: result,
        recommanded
      });
    } else if (type === 'songs') {
      result = getSongs(name);
      this.setState({
        songs: result
      });
    }

    return result;
  }

  // callBotApi = () => {
  //    axios.get('http://localhost:3000/api/music')
  //    .then(res => {
  //      this.setState({ data: res.data, loading: false });
  //    })
  //  }

  render() {

    const { artist, recommanded } = this.state;
    // const search = getArtist('We are the champions');
    // console.log(search);



    return (
      <div className="App">
          <LeftPart onSearch={this.onSearch} />
          <RightPart
            artist={artist && artist}
            recommanded={recommanded && recommanded}
          />
      </div>
    );
  }
}
export default App;
