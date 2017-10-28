import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Content from './components/Content';

class App extends Component {
  render() {
    let innerContent;
    if (this.state.page === 'home') {
      innerContent = <Mission />;
    }
    else {

    }
    return (
      <div>
        <div className="app-header">
          Cogrammers ...
        </div>
        <Banner lines={lines}/>
        <Content>
          {innerContent}
        </Content>
      </div>
    );
  }
}

export default App;
