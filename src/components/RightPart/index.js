import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Home from './Home';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lyrics from './Lyrics';
import Artist from './Artist';
import Profile from './Profile';
import './style.css';

class RightPart extends Component {

  static propTypes = {
      artist: PropTypes.object,
      recommanded: PropTypes.array,
   };

  render() {

    const { artist, recommanded } = this.props;

    return (
      <div className='RightPart'>
      	<Tabs>
          <TabList>
            <Tab>Artiste</Tab>
            <Tab>Recommandations</Tab>
            <Tab>Paroles</Tab>
            <Tab>Profil</Tab>
          </TabList>

          <TabPanel>
          	<Artist artist={artist} recommanded={recommanded}/>
          </TabPanel>

          <TabPanel>
          	<Home/>
          </TabPanel>


          <TabPanel>
          	<Lyrics/>
          </TabPanel>

          <TabPanel>
          	<Profile/>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default RightPart;
