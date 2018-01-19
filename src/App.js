import React, { Component } from 'react';
import './App.css';
import AboutPage from './components/AboutPage';
import Pillars from './components/Pillars';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';

class App extends Component {
  constructor() {
    super();
    this.state = {
      splash: true,
      layout: false,
    };
    this.onDismissLoadingScreen = this.onDismissLoadingScreen.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  onDismissLoadingScreen() {
    this.setState({splash: false });
  }

  onTransitionEnd(e) {
    if (!this.state.splash && e.nativeEvent.propertyName === 'visibility') {
      this.setState({layout: true });
    }
  }

  render() {
    const splashStyle = 'app-splash-container ' + (this.state.splash ? 'fade-in' : 'fade-out');
    const layoutStyle = 'app-layout-container ' + (this.state.layout ? 'fade-in' : 'hide');
    return (
      <div className="app full-container">
        <div className={splashStyle} onTransitionEnd={this.onTransitionEnd}>
          <SplashScreen onDismiss={this.onDismissLoadingScreen} />
        </div>
        <div className={layoutStyle}>
          <Layout>
            <AboutPage />
            <hr />
            <Pillars />
          </Layout>
        </div>
      </div>
    )
  }
}

export default App;
