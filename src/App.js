import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Content from './components/Content';

const lines = [
  'are awesome',
  'cooperate with each other',
  'is a place of learning',
  'make meaningful things',
  'is open source',
  'is not a bootcamp',
  'is under construction...',
];

class App extends Component {
  render() {
    const mission = [
      "Welcome to cogrammers!",
      "Our mission is to foster a community based around the simple idea that a tech education should be accessible, ongoing, and engaging. We are based around the following pillars:"
    ]
    return (
      <div>
        <div className="app-header">
          Cogrammers ...
        </div>
        <Banner lines={lines}/>
        <Content message={mission} />
      </div>
    );
  }
}

export default App;
