import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Logo from './Logo';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Menu from './Menu';
import data from '../data/data';

class Layout extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: <LandingPage />
    }
  }

  onClickHandler = (e) => {
    if(e.target.getAttribute('id') === "Contact Us") {
      this.setState({
        currentPage: <ContactPage />
      })
    } else if(e.target.getAttribute('id') === "About") {
      this.setState({
        currentPage: <AboutPage />
      })
    } else if(e.target.getAttribute('id') === "Home"){
      this.setState({
        currentPage: <LandingPage />
      })
    }
  }

  render() {
    return (
          <Container className="body-content">
              <Row align="center" style={{ height: '300px' }} >

                <Col sm={1} >
                </Col>

                <Col sm={3} >
                  <Logo />
                </Col>

                <Col sm={1} >
                  <div>
                    <p>
                      <strong>I</strong>
                    </p>
                    <p>
                      <strong>I</strong>
                    </p>
                    <p>
                      <strong>I</strong>
                    </p>
                    <p>
                      <strong>I</strong>
                    </p>
                  </div>
                </Col>

                <Col sm={4} className="content" >
                  {this.state.currentPage}
                </Col>

                <Col sm={3} className="menu" >
                  <Menu items={data} onClickHandler={this.onClickHandler.bind(this)} />
                </Col>

              </Row>
          </Container>
    )
  }
}

export default Layout;
