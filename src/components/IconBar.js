import React, { Component } from 'react';
import './IconBar.css';

class IconBar extends Component {
  createIcons() {
    return this.props.icons.map(({icon, title}, i) => {
      const onClick = () => this.props.onClick(i);
      let className = 'icon-container';
      if (this.props.activeIcon === i) {
        className += ' active';
      }
      return (<div onClick={onClick} className={className} key={i}>
        <i className={`fa fa-4x ${icon}`} />
        <div>{title}</div>
      </div>);
    });
  }

  render() {
    return (
      <div className="icon-bar">
        {this.createIcons()}
      </div>
    );
  }
}

export default IconBar;
