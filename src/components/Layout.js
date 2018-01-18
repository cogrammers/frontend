import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Logo from './Logo';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      subPage: <AboutPage />
    }
  }

  render() {
    return (
      <Container className="body-content">
        <Row align="center">
          <Col md={3} />
          <Col md={6}>
            <Logo includeText={true}/>
          </Col>
          <Col md={3} />
        </Row>
        <Row align="center">
          <Col md={3} />
          <Col md={6}>
            {this.state.subPage}
          </Col>
          <Col md={3} />
        </Row>
        <Row align="center">
          <ContactPage />
        </Row>
      </Container>
    )
  }
}

export default Layout;
