import React, { Component } from 'react';
import MenuItemLink from './MenuItemLink'

class MenuItem extends Component {
  generateLink = () => {
    console.log(this.props.keyItem);
    return <MenuItemLink url={this.props.url} text={this.props.text} onClick={this.props.onClick} />;
  }
  generateContent = () => {
    let content = this.generateLink();
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
