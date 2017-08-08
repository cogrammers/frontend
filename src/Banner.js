import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.intervalID = null;
  }

  componentWillReceiveProps() {
    this.setState({ index: 0 });
  }

  componentDidMount() {
    this.ensureInterval();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    this.intervalID = null;
  }

  ensureInterval() {
    if (!this.intervalID) {
      const updateIndex = () => this.setState((prevState, props) => {
        let index = prevState.index + 1;
        if (index >= props.lines.length) {
          index = 0;
        }
        return { index };
      });

      this.intervalID = setInterval(updateIndex, this.props.interval);
    }
  }

  render() {
    if (!this.props.lines.length) {
      return (<div></div>);
    }

    const line = this.props.lines[this.state.index];
    return (<div>{line}</div>
    );
  }
}

Banner.propTypes = {
  interval: PropTypes.number,
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Banner.defaultProps = {
  interval: 1000,
};

export default Banner;
