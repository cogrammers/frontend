import React, { Component } from 'react';
import PageSelector from './PageSelector'
import Pair from './Pair';
import Grow from './Grow';
import Learn from './Learn';


class Pillars extends Component {
  constructor() {
    super();
    this.state = {
      activePillar: 'learn-button'
    };
  }

  renderContent() {
    if(this.state.activePillar === 'pair-button') {
      return <Pair/>;
    } else if (this.state.activePillar === 'grow-button') {
      return <Grow/>;
    } else if (this.state.activePillar === 'learn-button') {
      return <Learn/>;
    }
  }





  

  render() {
    const {content} = this.state.activePillar;
    return (
      <div>
        <PageSelector />
        {this.renderContent(this.state.activePillar)}
      </div>
    )
  }
}

export default Pillars;
