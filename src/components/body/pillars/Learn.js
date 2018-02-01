import React, { Component } from 'react';
import LearnPhoto from '../../../assets/photos/learn.jpg';

class Learn extends Component {


  render() {

    return (
      <div className="pillar-container">
        <div className="pillar-content-container">

        <div className="pillar-photo-container margin-right-15">
           <img id="learn-photo" className="pillar-photo lighten" alt="Students at desks during a lesson" src={LearnPhoto}/>
        </div>

        <div className="pillar-content margin-left-15 text-right">
          <h3 className="text-right">Open Source</h3>
          <p className="remove-top-space">Information is power, and information should be free. Cogrammers is radically transparent. Everything from the curriculum, the discussions, exams, company direction, and business plans should be transparent by default. Current students should feel just as encouraged to change the curriculum as staff or anyone else.</p>
          <p>Closely tied is the idea that Cogrammers is hackable. To fulfill our mission of being ongoing, we will cherish the idea of trying new ideas, quantifying their impact, and incorporating those concepts. Whether they're by us or a fork. From this iteration, Cogrammers will be world-class.</p>
        </div>

        </div>
      </div>
    )
  }
}

export default Learn;
