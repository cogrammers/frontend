import React, { Component } from 'react';
import MenuItemLink from './MenuItemLink'

class MenuItem extends Component {
  var generateLink = () => {
    return <MenuItemLink url={this.props.url} text={this.props.text} />;
  },
  var generateContent = () => {
    let content = [this.generateLink()];
    return content;
  },
  render() {
    let content = this.generateContent();
    return (
      <li>
        {content}
      </li>
    )
  }
}
