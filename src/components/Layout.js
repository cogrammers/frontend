import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Logo from './Logo';
import Footer from './Footer';

class Layout extends Component {
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
            {this.props.children}
          </Col>
          <Col md={3} />
        </Row>
        <Row align="center">
          <Footer />
        </Row>
      </Container>
    )
  }
}

export default Layout;
