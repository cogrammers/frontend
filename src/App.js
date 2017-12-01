import React, { Component } from 'react';
import Grid from 'react-css-grid';
import './App.css';
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
    return (
      <Grid
        width={320}
        gap={24}>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
      </Grid>
    )

    // let innerContent;
    // if (this.state.currentPage === 'mission') {
    //   innerContent = <Mission />;
    // }
    // else {
    //
    // }
    // return (
    //   <div>
    //     <div className="app-header">
    //       Cogrammers ...
    //     </div>
    //     <Content>
    //       {innerContent}
    //     </Content>
    //   </div>
    // );
  }
}

export default App;
