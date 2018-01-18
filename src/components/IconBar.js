import React, { Component } from 'react';

class IconBar extends Component {
  createIcons() {
    return this.props.icons.map((icon, i) => {
      const onClick = () => this.props.onClick(i);
      return React.cloneElement(icon, { onClick, key: i })
    });
  }

  render() {
    return (
      <div>
        {this.createIcons()}
      </div>
    );
  }
}

export default IconBar;
