import React, { Component } from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import { doSearch, getSong, getArtist } from '../GeniusAPI';

import axios from 'axios';

class App extends Component {

  state = {
    artist: null,
  }

  // componentWillMount() {
  //   const artist = getArtist("Kendrick Lamar");
  //   this.setState({
  //     artist
  //   })
  // }

  onArtistSearch = (name) => {
    const artist = getArtist(name);
    this.setState({
      artist
    })

    return artist;
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
          <LeftPart onArtistSearch={this.onArtistSearch} />
          <RightPart artist={artist && artist} />
      </div>
    );
  }
}
export default App;
