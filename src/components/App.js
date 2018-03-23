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
    displayMenuBool: false,
  }

  displayMenu = () => {
    this.setState({
      displayMenuBool: !this.state.displayMenuBool
    })
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
    } else if (type === 'song') {
      result = getSong(name);
      this.setState({
        artist: getArtist(result.artist),
        recommanded: getSongs(result.artist),
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

    const { artist, recommanded, displayMenuBool } = this.state;
    // const search = getArtist('We are the champions');
    // console.log(search);



    return (
      <div className="App">
          <LeftPart onSearch={this.onSearch} displayMenu={this.displayMenu} />
          <RightPart
            artist={artist && artist}
            recommanded={recommanded && recommanded}
            displayMenu={this.displayMenu}
            displayMenuBool={displayMenuBool}
          />
      </div>
    );
  }
}
export default App;
