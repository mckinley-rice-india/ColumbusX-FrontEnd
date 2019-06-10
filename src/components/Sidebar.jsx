import React, { Component } from 'react';
import '../styles/sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: new Array(5).fill('').map((_, index) => ({
        name: `Item ${index + 1}`,
        key: index,
      })),
    };
  }

  render() {
    const { menuItems } = this.state;
    return (
      <div className="sidebar">
        {menuItems.map(item => (<div className="sidebar__menuitem" key={item.key}>{item.name}</div>))}
      </div>
    );
  }
}

export default Sidebar;
