import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function ImageHolder(props) {
  return (
    <div>
      <img src={props.url}>
    </div>
  );
}

ImageHolder.propTypes = {
  url: PropTypes.string.isRequired,
}

export default ImageHolder;
