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
  }

  handleResize() {
    const buttons = [this.pair, this.learn, this.grow];
    const lefts = buttons.map(b => b.getBoundingClientRect().left);

    if (this.props.activePillar === "learn-button") {
      this.selectedButton.style.transform = `translateX(${lefts[1] - lefts[0]}px)`;
    } else if (this.props.activePillar === "grow-button") {
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
        <div ref={this.pairRef} className="page-button pair-button" onClick={this.props.pageShift}><h4>Pair</h4></div>
        <div ref={this.learnRef} className="page-button learn-button" onClick={this.props.pageShift}><h4>Learn</h4></div>
        <div ref={this.growRef} className="page-button grow-button" onClick={this.props.pageShift}><h4>Grow</h4></div>
      </div>
    )
  }
}

export default PageSelector;
