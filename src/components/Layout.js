import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div className="app-container">
        <header>This is the header</header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>This is the footer</p>
        </footer>
      </div>
    )
  }
}
