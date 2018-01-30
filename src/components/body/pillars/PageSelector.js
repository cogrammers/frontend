import React, { Component } from 'react';


class PageSelector extends Component{

  render(){
    return(
      <div id="page-selector-container" class="width-80 div-center">
        <div class="page-button active"><h4>Pair</h4></div>
        <div class="page-button"><h4>Learn</h4></div>
        <div class="page-button"><h4>Grow</h4></div>
      </div>
    )
  }

}

export default PageSelector;
