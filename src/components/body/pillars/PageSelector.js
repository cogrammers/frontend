import React, { Component } from 'react';


class PageSelector extends Component{

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
        <div className="page-button pair-button" onClick={this.props.pageShift}><h4>Pair</h4></div>
        <div className="page-button learn-button" onClick={this.props.pageShift}><h4>Learn</h4></div>
        <div className="page-button grow-button" onClick={this.props.pageShift}><h4>Grow</h4></div>
      </div>
    )
  }

}

export default PageSelector;
