import React, { Component } from 'react';


class PageSelector extends Component{
  constructor() {
    super();
    this.handleSelection = this.handleSelection.bind(this);
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

    if (clickedButton === buttonArray[1]
          && moveFromPosition === button1Location) {
          console.log('the pair button')
          movingButton.style.transform = `translateX(0px)`
    } else if (clickedButton === buttonArray[1]
          && moveFromPosition === button2Location) {
          console.log('the pair button')
          movingButton.style.transform = `translateX(0px)`
    } else if (clickedButton === buttonArray[1]
                && moveFromPosition === button3Location) {
          console.log('the pair button')
          movingButton.style.transform = `translateX(0px)`
    } else if (clickedButton === buttonArray[2]
                && moveFromPosition === button1Location) {
          console.log('the learn button')
          movingButton.style.transform = `translateX(${button2Location - button1Location}px)`
    } else if (clickedButton === buttonArray[2]
                && moveFromPosition === button3Location) {
          console.log('the learn button')
          movingButton.style.transform = `translateX(${button2Location - button1Location}px)`
    } else if (clickedButton === buttonArray[3]
                && moveFromPosition === button1Location) {
          console.log('the grow button')
          movingButton.style.transform = `translateX(${button3Location - button1Location}px)`
    } else if (clickedButton === buttonArray[3]
                && moveFromPosition === button2Location) {
          console.log('the grow button')
          movingButton.style.transform = `translateX(${button3Location - button1Location}px)`
    }

  }  // end buttonshift animation

  componentDidMount() {
      this.handleResize();
      window.addEventListener('resize',  this.handleResize.bind(this));
  }
  ///remember to unbind during unmount


  handleResize() {
      console.log("I've been resized!");
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
