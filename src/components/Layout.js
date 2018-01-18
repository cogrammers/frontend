import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Logo from './Logo';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <Container fluid={true} className="body-content">
        <Row align="center">
          <Col md={12}>
            <Logo includeText={true}/>
          </Col>
        </Row>
        <Row align="center">
          <Col md={12}>
            {this.props.children}
          </Col>
        </Row>
        <Row align="center">
          <Col md={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Layout;
