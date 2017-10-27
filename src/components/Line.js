import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../Line.css';

class Line extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.intervalID = null;
  }

  componentDidMount() {
    this.ensureInterval(this.props);
  }

  componentWillUnmount() {
    this.destroyInterval();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({index: 0});
    this.ensureInterval(nextProps);
  }

  destroyInterval() {
    clearInterval(this.intervalID);
    this.intervalID = null;
  }

  ensureInterval(props) {
    if (!this.intervalID) {
      const intervalCallback = () => this.setState((prevState, props) => {
        let index = prevState.index + 1;
        if (index >= props.text.length) {
          this.destroyInterval();
          props.onRendered();
        }
        return { index };
      });
      this.intervalID = setInterval(intervalCallback, props.delay);
    }
  }

  render() {
    const text = this.props.text.slice(0, this.state.index);
    return (<div className="line-text">{text}</div>);
  }
}

Line.propTypes = {
  delay: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onRendered: PropTypes.func.isRequired,
};

export default Line;
