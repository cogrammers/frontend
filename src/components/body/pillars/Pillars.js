import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import PageSelector from './PageSelector'
import Pair from './Pair';
import Grow from './Grow';
import Learn from './Learn';


class Pillars extends Component {
  constructor() {
    super();
    this.state = {
      activePillar: 'pair-button'
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  renderContent() {
    if(this.state.activePillar === 'pair-button') {
      return <Pair key="pair"/>;
    } else if (this.state.activePillar === 'grow-button') {
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
