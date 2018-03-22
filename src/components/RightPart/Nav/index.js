import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css';

class LeftPart extends Component {

  render() {

    return (
      <header>
        <Tabs>
          <TabList>
            <Tab>Accueil</Tab>
            <Tab>Artistes</Tab>
            <Tab>Paroles</Tab>
            <Tab>Profil</Tab>
          </TabList>
        </Tabs>
      </header>
    );
  }
}

export default LeftPart;
