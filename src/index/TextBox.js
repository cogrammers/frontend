import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function TextBox(props) {
  return (
    <div className="text-box">
      <p>{props.text}</p>
    </div>
  );
}

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TextBox;
