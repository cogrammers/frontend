import React, { Component } from 'react';
import IconBar from './IconBar';

const data = [
  {
    title: 'Inclusive by design',
    icon: 'fa-users',
    content: (
      <p>If our mission is to be accessible, we must also be inclusive. Structural barriers and power hierarchies are abundant in society. These inequalities are not only present in the tech industry, but in many ways are exacerbated by it. Cogrammers aims to better our communities by being aware of these power imbalances, and to counter them where possible. We hold all of our members and our partnerships to these same standards. We pledge to listen to and uplift marginalized voices in our community. These voices are our foundation.</p>
    ),
  },
  {
    title: 'Community building',
    icon: 'fa-home',
    content: (
      <div>
        <p>A core hypothesis of Cogrammers is that the program should directly benefit all those involved, as well as the larger community. Students get an education, alumni grow their network, companies hire better employees, the community gets apps made for them, and more.</p>
        <p>The community aspect is incredibly important. Cogrammers is more than just a technical handbook. Everything we do is designed to help all of us grow as individuals. By learning empathy, communication, and teamworking skills, we become better people. We become better cohort mates, and better community members.</p>
      </div>
    ),
  },
  {
    title: 'Open source',
    icon: 'fa-code-fork',
    content: (
      <div>
        <p>Information is power, and information should be free. Cogrammers is radically transparent. Everything from the curriculum, the discussions, exams, company direction, and business plans should be transparent by default. Current students should feel just as encouraged to change the curriculum as staff or anyone else.</p>
        <p>Closely tied is the idea that Cogrammers is hackable. To fulfill our mission of being ongoing, we will cherish the idea of trying new ideas, quantifying their impact, and incorporating those concepts. Whether they're by us or a fork. From this iteration, Cogrammers will be world-class.</p>
      </div>
    ),
  },
];

class Pillars extends Component {
  constructor() {
    super();
    this.onIconClick = this.onIconClick.bind(this);
    this.state = {
      activePillar: 0
    };
  }

  onIconClick(i) {
    this.setState({activePillar: i});
  }

  render() {
    const {title, content} = data[this.state.activePillar];
    const icons = data.map(({icon}) => icon);
    return (<div>
      <h2>Pillars</h2>
      <IconBar icons={icons} activeIcon={this.state.activePillar} onClick={this.onIconClick} />
      <h3>{title}</h3>
      {content}
    </div>)
  }
}

export default Pillars;
