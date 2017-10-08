import React, { Component } from 'react';

class Tooth extends Component{
  render(){
    return(
      <div className='tooth'>
        <h1> {this.props.text}</h1>
      </div>
    )
  }
}

export default Tooth;
