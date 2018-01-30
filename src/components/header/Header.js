import React, { Component } from 'react';
// import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import headerBackground from './header-background.svg';
import Logo from '../../assets/logo.svg';
import LogoName from '../../assets/logoname.svg';

class Header extends Component {

  render() {
    return (
      <div class="header-div">
        <img id="header-background" alt="colorful background image" src={headerBackground}/>
        <img id="header-logo-name" alt="cogrammers logo name" src={LogoName}/>
        <img id="header-logo-gears" alt="Cogrammers logo" src={Logo}/>
      </div>
    )
  }
}

export default Header;
