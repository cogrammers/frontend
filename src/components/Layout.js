import React, { Component } from 'react';
import Grid from 'react-css-grid';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

class Layout extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 'layout'
    }
  }
  render() {
    let innerContent;
    if(this.state.currentPage === 'landingPage') {
      innerContent = <LandingPage />;
    } else if(this.state.currentPage === 'aboutPage') {
      innerContent = <AboutPage />;
    } else if(this.state.currentPage === 'contactPage') {
      innerContent = <ContactPage />;
    }
    return (
      <div className="app-container">
        <header>This is the header</header>
          <Grid
            width={320}
            gap={24}>
            <div id="logo">
              <img src={require("../static/img/logo.jpg")}/>
            </div>
            <div>{innerContent}</div>
            <div>ggggg</div>
            <div>sdjfhaslhf</div>
          </Grid>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>This is the footer</p>
        </footer>
      </div>
    )
  }
}

export default Layout;
