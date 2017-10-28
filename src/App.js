import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Content from './components/Content';
import Mission from './components/Mission';

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 'mission'
    }
  }
  render() {
    let innerContent;
    if (this.state.currentPage === 'mission') {
      innerContent = <Mission />;
    }
    else {

    }
    return (
      <div>
        <div className="app-header">
          Cogrammers ...
        </div>
        <Content>
          {innerContent}
        </Content>
      </div>
    );
  }
}

export default App;
