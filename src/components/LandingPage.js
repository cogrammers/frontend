import React, { Component } from 'react';

const missionStatement = "Our mission is to foster a community based around the simple idea that a tech education should be accessible, ongoing, and engaging. We are based around the following pillars: open source, community building, and inclusivity by design.";

class LandingPage extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 'landingPage'
    }
  }
  render(){
    return(
      <div id="mission">
        {missionStatement}
      </div>
    )
  }

}

export default LandingPage;
