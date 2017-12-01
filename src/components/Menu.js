import React, { Component } from 'react';
import MenuItem from './MenuItem';
import data from '../data/data';


class Menu extends Component {
  render() {
    generateItem = (item) => {
      return <MenuItem text={item.text} url={item.url} />
    }
    var items = this.props.items.map(this.generateItem);
    return (
      <ul className="menu">
        {items}
      </ul>
    )}
  }
