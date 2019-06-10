import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

export default class Legal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="legal-layout">
        <Sidebar />
        <div className="content">Content</div>
      </div>
    );
  }
}
