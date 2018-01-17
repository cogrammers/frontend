import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import logo_with_text from '../assets/full-logo.svg';

class Logo extends Component {
  render() {
    const src = this.props.includeText ? logo_with_text : logo;
    return (
      <img id="logo" alt="Cogrammers logo with two gears" src={src}/>
    )
  }
}

export default Logo;
