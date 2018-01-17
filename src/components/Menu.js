import React, { Component } from 'react';

class Menu extends Component {
  generateLink({text, index}) {
    const onClick = () => this.props.onClick(index);
    return <li onClick={onClick}><a href={`#${text}`} key={index}>{text}</a></li>;
  }
  render() {
    const links = this.props.items.map(({text}, i) => this.generateLink({text, index: i}));
    return (
      <ul className="menu">
        {links}
      </ul>
    )
  }
}

export default Menu;
