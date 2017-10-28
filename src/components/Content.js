import React, { Component } from 'react';
import Mission from './Mission';

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
