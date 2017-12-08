import React, { Component } from 'react';
import MenuItemLink from './MenuItemLink'

class MenuItem extends Component {
  generateLink = () => {
    return <MenuItemLink url={this.props.url} text={this.props.text} />;
  }
  generateContent = () => {
    let content = [this.generateLink()];
    return content;
  }
  render() {
    let content = this.generateContent();
    return (
      <li key={this.props.keyItem} >
        {content}
      </li>
    )
  }
}

export default MenuItem;
