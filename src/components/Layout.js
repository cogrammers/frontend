import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Menu from './Menu';
import data from '../data/data';
import '../App.css';

class Layout extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: <LandingPage />
    }
  }

  onClickHandler = (e) => {
    // this.setState({
    //   currentPage:
    // })
    console.log(e.target)
    console.log(e.target.getAttribute('id'));
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
    // let innerContent;
    // if(this.state.currentPage === 'landingPage') {
    //   innerContent = <LandingPage />;
    // } else if(this.state.currentPage === 'aboutPage') {
    //   innerContent = <AboutPage />;
    // } else if(this.state.currentPage === 'contactPage') {
    //   innerContent = <ContactPage />;
    // }
    return (
          <Container className="body-content">
              <Row align="center" style={{ height: '300px' }} >

                <Col sm={1} >
                </Col>

                <Col sm={3} >
                  <img id="logo" src={require("../static/img/logo.jpg")}/>
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
                  <div class="force-overflow">
                    {this.state.currentPage}
                  </div>
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
