import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default Content;
