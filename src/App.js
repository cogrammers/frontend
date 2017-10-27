import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';

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
    return (
      <div>
        <div className="app-header">
          Cogrammers ...
        </div>
        <Banner lines={lines}/>
      </div>
    );
  }
}

export default App;
