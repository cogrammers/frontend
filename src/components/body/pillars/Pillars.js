import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import PageSelector from './PageSelector'
import Pair from './Pair';
import Grow from './Grow';
import Learn from './Learn';
import './Pillars.css'


class Pillars extends Component {
  constructor() {
    super();
    this.state = {
      activePillar: 'pair'
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  renderContent() {
    if(this.state.activePillar === 'pair') {
      return <Pair key="pair"/>;
    } else if (this.state.activePillar === 'grow') {
      return <Grow key="grow"/>;
    } else {
      return <Learn key="learn"/>;
    }
  }

  handleSelection(activePillar) {
    this.setState({activePillar});
  }

  render() {
    return (
      <div className="pillar-page">

      <PageSelector pageShift={this.handleSelection} activePillar={this.state.activePillar}/>

      <ReactCSSTransitionReplace transitionName="carousel-swap"
                                  className="carousel-container div-center"
                                  overflowHidden={false}
                                  transitionEnterTimeout={850}
                                  transitionLeaveTimeout={850}>

         {this.renderContent(this.state.activePillar)}

      </ReactCSSTransitionReplace>


      </div>
    )
  }
}

export default Pillars;
