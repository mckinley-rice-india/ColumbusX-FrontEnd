import React, { Component } from 'react';

import '../styles/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: new Array(4).fill('').map((_, index) => ({
        name: `Item${index + 1}`,
        key: index,
      })),
    };
  }

  render() {
    const { menuItems } = this.state;
    return (
      <div className="navbar">
        <div className="navbar__topbar">
          <div className="navbar__topbar__logo">Logo</div>
          <div className="navbar__topbar__search">Search</div>
          <div className="navbar__topbar__icon navbar__topbar__icon-1">Icon 1</div>
          <div className="navbar__topbar__icon navbar__topbar__icon-2">Icon 2</div>
          <div className="navbar__topbar__icon navbar__topbar__icon-3">Icon 3</div>
          <div className="navbar__topbar__icon navbar__topbar__icon-4">Icon 4</div>
          <div className="navbar__topbar__icon navbar__topbar__icon-5">Icon 5</div>
        </div>
        <div className="navbar__bottombar">
          {menuItems.map(item => (<div className="navbar__bottombar__menuitem" key={item.key}>{item.name}</div>))}
        </div>
      </div>
    );
  }
}

export default Navbar;
