import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import '../App.css';
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
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Cogrammers</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {links}
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar;
