import React, { Component } from 'react';
import '../styles/welcome.css';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="welcome-layout">
        <div className="welcome-layout__hero__title">Title</div>
        <div className="welcome-layout__hero__desc">Description</div>
        <div className="welcome-layout__btn-skip">Skip Button</div>
        <div className="welcome-layout__link-tutorial">Tutorial Link</div>
      </div>
    );
  }
}
