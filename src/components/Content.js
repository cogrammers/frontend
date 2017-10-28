import React, { Component } from 'react';
import Mission from './Mission';

class Content extends Component {
  render() {
    const title = this.props.message[0];
    const content1 = this.props.message[1];
    return (
      <div>
        <Mission/>
      </div>
    );
  }
}

export default Content;
