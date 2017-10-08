import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      linkData: [
        { text: 'Home', url: 'idk' },
        { text: 'About', url: 'idk' },
        { text: 'Curriculum', url: 'idk' },
        { text: 'Contact', url: 'idk' },
      ],
    };
  }
  render() {
    const links = this.state.linkData.map(link =>
    <NavBarItem text={link.text} url={link.url} />,
  );
    return (
      <nav className="nav-main">
        {links}
      </nav>
    )
  }
}

export default NavBar;
