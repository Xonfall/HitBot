import React, { Component } from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import { doSearch, getSongs, getArtist } from '../GeniusAPI';

import axios from 'axios';

class App extends Component {

  state = {
    artist: null,
    songs: null,
  }

  // componentWillMount() {
  //   const artist = getArtist("Kendrick Lamar");
  //   this.setState({
  //     artist
  //   })
  // }

  onSearch = (type, name) => {
    let result = null;
    if (type === 'artist') {
      result = getArtist(name);
      this.setState({
        artist: result
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

    const { artist } = this.state;
    // const search = getArtist('We are the champions');
    // console.log(search);



    return (
      <div className="App">
          <LeftPart onSearch={this.onSearch} />
          <RightPart artist={artist && artist} />
      </div>
    );
  }
}
export default App;
