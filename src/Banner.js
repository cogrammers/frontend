import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Line from './Line';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.timeoutID = null;
    this.onLineRendered = this.onLineRendered.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ index: 0 });
  }

  componentWillUnmount() {
    this.destroyTimeout();
  }

  onLineRendered() {
    this.timeoutID = setTimeout(() => {
      this.setState((prevState, props) => {
        let index = prevState.index + 1;
        if (index >= props.lines.length) {
          index = 0;
        }
        return { index };
      });
    }, this.props.delay);
  }

  destroyTimeout() {
    clearTimeout(this.timeoutID);
    this.timeoutID = null;
  }

  render() {
    if (!this.props.lines.length) {
      return (<div></div>);
    }

    const text = this.props.lines[this.state.index];
    return (
      <div>
        <Line text={text}
          delay={this.props.typingSpeed}
          onRendered={this.onLineRendered}/>
      </div>
    );
  }
}

Banner.propTypes = {
  delay: PropTypes.number,
  typingSpeed: PropTypes.number,
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Banner.defaultProps = {
  typingSpeed: 150,
  delay: 1000,
};

export default Banner;
