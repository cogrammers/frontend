import React, { Component } from 'react';

class MenuItemLink extends Component {
  render: function() {
    return (
      <a href={this.props.url}>{this.props.text}</a>
    )
  }
}
