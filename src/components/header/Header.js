import React, { Component } from 'react';
import headerBackground from './header-background.svg';
import Logo from '../../assets/logo.svg';
import LogoName from '../../assets/logoname.svg';

class Header extends Component {

  render() {
    return (
      <div className="header-div">
        <img id="header-background" alt="colorful overlapping shapes background" src={headerBackground}/>
        <img id="header-logo-name" alt="cogrammers logo name" src={LogoName}/>
        <img id="header-logo-gears" alt="Cogrammers logo" src={Logo}/>
      </div>
    )
  }
}

export default Header;
