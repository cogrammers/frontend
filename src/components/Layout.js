import React, { Component } from 'react';
import Header from './header/Header';
import AboutPage from './about/AboutPage';
import Pillars from './body/pillars/Pillars';
import Footer from './footer/Footer';

class Layout extends Component {


  render() {
    return (
        <div>

          <Header />

          <div className="container div-center">
            <AboutPage />
            <hr className="linebreak"/>
            <Pillars />
            {this.props.children}
          </div>

          <Footer/>

        </div>

    )
  }
}

export default Layout;
