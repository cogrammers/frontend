import React, { Component } from 'react';
import InclusivePhoto from '../../../assets/photos/inclusive.jpg';

class Pair extends Component {
  render() {
    return (
      <div className="pillar-container">
        <div className="pillar-content-container">
          <div className="pillar-content text-left margin-right-15">
            <h3 className="text-left">Inclusive By Design</h3>
            <p className="remove-top-space">If our mission is to be accessible, we must also be inclusive. Structural barriers and power hierarchies are abundant in society. These inequalities are not only present in the tech industry, but in many ways are exacerbated by it. Cogrammers aims to better our communities by being aware of these power imbalances, and to counter them where possible. We hold all of our members and our partnerships to these same standards. We pledge to listen to and uplift marginalized voices in our community. These voices are our foundation.</p>
          </div>

          <div className="pillar-photo-container">
            <img className="pillar-photo" alt="People walking across a street with a city in the background" src={InclusivePhoto}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Pair;
