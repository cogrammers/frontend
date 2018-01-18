import React, { Component } from 'react';
import './IconBar.css';

class IconBar extends Component {
  createIcons() {
    return this.props.icons.map((icon, i) => {
      const onClick = () => this.props.onClick(i);
      let className = `fa fa-4x ${icon}`;
      if (this.props.activeIcon === i) {
        className += ' active';
      }
      return <i className={className} onClick={onClick} key={i} />;
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
