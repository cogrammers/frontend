import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';

const lines = [
  'are awesome',
  'is not a bootcamp',
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
