import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';

class App extends Component {
  constructor() {
    super();
    this.state = {
      splash: true,
    };
    this.onDismissLoadingScreen = this.onDismissLoadingScreen.bind(this);
  }

  onDismissLoadingScreen() {
    this.setState({splash: false });
  }

  componentDidMount() {
  }
  render() {
    const content = this.state.splash ? < SplashScreen onDismiss={this.onDismissLoadingScreen} /> : <Layout />;
    return (
      <div className="full-container">
        {content}
      </div>
    )
  }
}

export default App;
