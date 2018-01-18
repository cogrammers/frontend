import React, { Component } from 'react';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import Logo from './Logo';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <Container fluid={true} className="body-content">
        <Row align="center">
          <Col md={12} style={{width: '200px'}}>
            <Hidden xs sm>
              <Logo includeText={true}/>
            </Hidden>
            <Visible xs sm>
              <Logo includeText={false}/>
            </Visible>
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
