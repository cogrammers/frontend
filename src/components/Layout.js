import React, { Component } from 'react';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import Logo from './Logo';
import Header from './header/Header';
import Footer from './Footer';

class Layout extends Component {


  render() {
    return (
        <div>
          <Header />
          <div>
            {this.props.children}
          </div>
        </div>

    )
  }
}

export default Layout;
