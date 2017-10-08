import React, { Component } from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';
import PropTypes from 'prop-types';
import '../App.css';

function NavBarItem(props) {
  return (
    <NavItem href={props.url}>{props.text}</NavItem>
  );
}

NavBarItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavBarItem;
