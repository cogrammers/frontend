import React, { Component } from 'react';
import logo from '../assets/logo.jpg';

class Logo extends Component {

  render() {
    return (
      <img id="logo" alt="Cogrammers logo with two gears" src={logo}/>
    )
  }
}

export default Logo;
