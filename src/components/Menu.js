import React, { Component } from 'react';
import MenuItem from './MenuItem';
//import data from '../data/data';


class Menu extends Component {
  generateItem = (item, index) => {
    return <MenuItem text={item.text} url={item.url} keyItem={item.text + index} onClick={this.props.onClickHandler} />
  }
  render() {
    var items = this.props.items.map(this.generateItem);
    return (
      <ul className="menu">
        {items}
      </ul>
    )}
  }

export default Menu;
