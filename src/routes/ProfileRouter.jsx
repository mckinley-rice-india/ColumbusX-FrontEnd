import React, { Component } from 'react';

class ProfileRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="profile-layout">
        <div className="sidebar">Sidebar</div>
        <div className="content">Content</div>
      </div>
    );
  }
}

export default ProfileRouter;
