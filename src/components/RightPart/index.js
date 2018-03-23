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
      displayMenu: PropTypes.func.isRequired,
      displayMenuBool: PropTypes.bool.isRequired,
   };

  render() {

    const { artist, recommanded, displayMenuBool } = this.props;

    return (
      <div className={displayMenuBool ? 'RightPart active' : 'RightPart'}>
      <div onClick={this.props.displayMenu} className='menuBurger'><i class="fa fa-angle-left"></i></div>
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
