import React, { Component } from 'react';
import Tooth from './gearComponents/tooth';

class Gear extends Component {
  render(){
    return(
      <div className='gear'>
        <img src={require('../images/gear.jpg')}/>
        <Tooth text='About us'/>
        <Tooth text='Get Started'/>
        <Tooth text='Contact us'/>
        <Tooth text='Mission'/>
      </div>
    )
  }
}

export default Gear;
