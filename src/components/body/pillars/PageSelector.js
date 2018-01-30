import React, { Component } from 'react';


class PageSelector extends Component{
  constructor() {
    super();
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection = (e) => {
    let clickedButton = e.currentTarget;
    let movingButton = document.getElementById('selected-button');

    let moveFromPosition = movingButton.getBoundingClientRect().left;
    let moveToPosition = clickedButton.getBoundingClientRect().left;

    let moveDistance = moveToPosition - moveFromPosition;

    if (clickedButton.classList.contains('pair-button')) {
          console.log('the pair button')
          movingButton.style.transform = `translateX(0px)`
    } else if (clickedButton.classList.contains('learn-button')) {
          console.log('the learn button')
          movingButton.style.transform = `translateX(${moveDistance}px)`
    } else if (clickedButton.classList.contains('grow-button')) {
          console.log('the grow button')
          movingButton.style.transform = `translateX(${moveDistance * 2}px)`
    }

  }


  render(){
    return(
      <div id="page-selector-container" className="width-80 div-center">
        <div id="selected-button" className="page-button"></div>
        <div className="page-button pair-button" onClick={this.handleSelection}><h4>Pair</h4></div>
        <div className="page-button learn-button" onClick={this.handleSelection}><h4>Learn</h4></div>
        <div className="page-button grow-button" onClick={this.handleSelection}><h4>Grow</h4></div>
      </div>
    )
  }

}

export default PageSelector;
