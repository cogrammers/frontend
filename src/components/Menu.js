import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  generateItem: function(item) {
    return <MenuItem text={item.text} url={item.url} />
  },
  render: function() {
    var items = this.props.items.map(this.generateItem);
    return (
      <ul className="menu">
        {items}
      </ul>
    )}
  }
}
