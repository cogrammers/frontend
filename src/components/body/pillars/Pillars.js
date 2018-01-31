import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import '../../../App.css';

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
    } else if (this.state.activePillar === 'learn-button') {
      return <Learn key="learn"/>;
    }
  }


  //button shift animation
  handleSelection = (e) => {
    const allButtons = document.querySelectorAll('.page-button');
    const buttonArray = [].slice.call(allButtons);
    let button1Location = buttonArray[1].getBoundingClientRect().left;
    let button2Location = buttonArray[2].getBoundingClientRect().left;
    let button3Location = buttonArray[3].getBoundingClientRect().left;

    let clickedButton = e.currentTarget;
    let movingButton = document.getElementById('selected-button');

    let moveFromPosition = movingButton.getBoundingClientRect().left;

    if ((clickedButton === buttonArray[1] && moveFromPosition === button1Location)
          || (clickedButton === buttonArray[1] && moveFromPosition === button2Location)
            || (clickedButton === buttonArray[1] && moveFromPosition === button3Location)) {
              movingButton.style.transform = `translateX(0px)`;
              this.setState({activePillar: 'pair-button'});
    } else if ((clickedButton === buttonArray[2] && moveFromPosition === button1Location)
              || (clickedButton === buttonArray[2] && moveFromPosition === button3Location)) {
              movingButton.style.transform = `translateX(${button2Location - button1Location}px)`;
              this.setState({activePillar: 'learn-button'});
    } else if ((clickedButton === buttonArray[3] && moveFromPosition === button1Location)
              || (clickedButton === buttonArray[3] && moveFromPosition === button2Location)) {
              movingButton.style.transform = `translateX(${button3Location - button1Location}px)`;
              this.setState({activePillar: 'grow-button'});
    }
  }  // end buttonshift animation



  render() {

    return (
      <div style={{height: 400}}>

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
