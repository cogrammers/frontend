import React, { Component } from 'react';


class PageSelector extends Component{

  componentDidMount() {
      this.handleResize();
      window.addEventListener('resize',  this.handleResize.bind(this));
  }
  // if issues come up with window resize, it may need to be unbinded when unmounting

  handleResize() {
      let movingButton = document.getElementById('selected-button');
      const allButtons = document.querySelectorAll('.page-button');
      const buttonArray = [].slice.call(allButtons);
      let button1Location = buttonArray[1].getBoundingClientRect().left;
      let button2Location = buttonArray[2].getBoundingClientRect().left;
      let button3Location = buttonArray[3].getBoundingClientRect().left;

      console.log("current page: " + this.props.activePillar);
      if (this.props.activePillar === "learn-button") {
        movingButton.style.transform = `translateX(${button2Location - button1Location}px)`;
      } else if (this.props.activePillar === "grow-button") {
        movingButton.style.transform = `translateX(${button3Location - button1Location}px)`;
      }
  }

  render(){
    return(
      <div id="page-selector-container" className="width-80 div-center">
        <div id="selected-button" className="page-button"></div>
        <div className="page-button pair-button" onClick={this.props.pageShift}><h4>Pair</h4></div>
        <div className="page-button learn-button" onClick={this.props.pageShift}><h4>Learn</h4></div>
        <div className="page-button grow-button" onClick={this.props.pageShift}><h4>Grow</h4></div>
      </div>
    )
  }

}

export default PageSelector;
