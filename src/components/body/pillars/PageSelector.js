import React, { Component } from 'react';
import './PageSelector.css';


class PageSelector extends Component {

  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
    this.containerRef = this.containerRef.bind(this);
    this.selectedButtonRef = this.selectedButtonRef.bind(this);
    this.pairRef = this.buttonRef.bind(this, 'pair');
    this.learnRef = this.buttonRef.bind(this, 'learn');
    this.growRef = this.buttonRef.bind(this, 'grow');
    this.onClick = this.onClick.bind(this);
  }

  getButtons() {
    return [this.pair, this.learn, this.grow];
  }

  onClick(e) {
    const buttons = this.getButtons();
    const lefts = buttons.map(b => b.getBoundingClientRect().left);
    const clickedButton = e.currentTarget;
    let target;
    if (clickedButton === buttons[0]) {
      target = 'pair';
      this.selectedButton.style.transform = `translateX(0px)`;
    } else if (clickedButton === buttons[1]) {
      target = 'learn';
      this.selectedButton.style.transform = `translateX(${lefts[1] - lefts[0]}px)`;
    } else {
      target = 'grow';
      this.selectedButton.style.transform = `translateX(${lefts[2] - lefts[0]}px)`;
    }
    this.props.pageShift(target);
  }

  handleResize() {
    const buttons = this.getButtons();
    const lefts = buttons.map(b => b.getBoundingClientRect().left);

    if (this.props.activePillar === "learn") {
      this.selectedButton.style.transform = `translateX(${lefts[1] - lefts[0]}px)`;
    } else if (this.props.activePillar === "grow") {
      this.selectedButton.style.transform = `translateX(${lefts[2] - lefts[0]}px)`;
    }
  }

  containerRef(ref) {
    if (ref) {
      window.addEventListener('resize',  this.handleResize);
      this.handleResize();
    }
    else {
      window.removeEventListener('resize',  this.handleResize);
    }
  }

  selectedButtonRef(ref) {
    this.selectedButton = ref;
  }

  buttonRef(name, ref) {
    this[name] = ref;
  }

  render() {
    return (
      <div ref={this.containerRef} className="div-center page-selector-container">
        <div ref={this.selectedButtonRef} className="page-button selected-button"></div>
        <div ref={this.pairRef} className="page-button" onClick={this.onClick}><h4>Pair</h4></div>
        <div ref={this.learnRef} className="page-button" onClick={this.onClick}><h4>Learn</h4></div>
        <div ref={this.growRef} className="page-button" onClick={this.onClick}><h4>Grow</h4></div>
      </div>
    )
  }
}

export default PageSelector;
