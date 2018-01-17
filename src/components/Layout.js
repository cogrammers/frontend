import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Logo from './Logo';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Menu from './Menu';

const menuData = [
  {
    text: 'Home',
    component: <LandingPage />,
  },
  {
    text: 'About',
    component: <AboutPage />,
  },
];

class Layout extends Component {
  constructor() {
    super();
    this.onMenuClick = this.onMenuClick.bind(this);
    this.state = {
      subPage: <LandingPage />
    }
  }

  onMenuClick(index) {
    if (!menuData[index]) {
      console.error('Unexpected menu item clicked', index);
    }
    this.setState({subPage: menuData[index].component});
  }

  render() {
    const items = menuData.map(d => ({ text: d.text }));
    return (
      <Container className="body-content">
        <Row align="center">
          <Logo includeText={true}/>
        </Row>
        <Row align="center" style={{ height: '300px' }} >
          <Col sm={3}>
          </Col>
          <Col sm={4} className="content" >
            {this.state.subPage}
          </Col>

          <Col sm={4} className="menu" >
            <Menu items={items} onClick={this.onMenuClick} />
          </Col>
          <Col sm={1}>
          </Col>

        </Row>
        <Row align="center">
          <ContactPage />
        </Row>
      </Container>
    )
  }
}

export default Layout;
