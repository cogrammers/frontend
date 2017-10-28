import React, { Component } from 'react';

class Content extends Component {
  render() {
    const title = this.props.message[0];
    const content1 = this.props.message[1];
    return (
      <div>
        <h1>{ title } </h1>
        <p><strong> { content1 } </strong></p>
      </div>
    );
  }
}

export default Content;
