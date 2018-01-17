import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import logo_with_text from '../assets/logo_with_text.png';

class Logo extends Component {
  render() {
    const src = this.props.includeText ? logo_with_text : logo;
    return (
      <img id="logo" alt="Cogrammers logo with two gears" src={src}/>
    )
  }
}

export default Logo;
