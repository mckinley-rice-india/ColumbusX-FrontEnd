import React, { Component } from 'react';

export default class Legal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="legal-layout">
        <div className="sidebar">Sidebar</div>
        <div className="content">Content</div>
      </div>
    );
  }
}
