import React, { Component } from 'react';

class MenuItemLink extends Component {
  render() {
    return (
      <a onClick={this.props.onClick}
      id={this.props.text} href={this.props.url}>{this.props.text}</a>
    )
  }
}

export default MenuItemLink;
