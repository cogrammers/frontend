import React, { Component } from 'react';


class AboutPage extends Component{
  constructor(){
    super()
    this.state = {
      currentPage: 'aboutPage'
    }
  }
  render(){
    return(
      <div id="about" class="width-80 text-center div-center">
        <h2>Welcome!</h2>
        <p><strong>Our mission is based around the simple idea that a programming education is best achieved together, enthusiastically and for everyone.</strong></p>
        <p>Using pair-programming and workshops, we aim to get free programming education into the hands of every Seattleite who wants to learn it. We focus on pair-programming because it speeds up the learning process and creates a community to rely on. Cogrammers is as diverse a community as Seattle, and inclusiveness is in our DNA (Seattle-freeze? What's that?). Come join us as a student, instructor, or supporter as we empower Seattle with code.</p>
      </div>
    )
  }

}

export default AboutPage;
