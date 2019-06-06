import React, { Component } from 'react';
import '../styles/signup.css';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="signup-layout">
        <div className="signup-layout__hero">
          <div className="signup-layout__hero__title">Title</div>
          <div className="signup-layout__hero__desc">Description</div>
        </div>
        <div className="signup-layout__form">
          <div className="signup-layout__form__input signup-layout__form__input--email">Email</div>
          <div className="signup-layout__form__input signup-layout__form__input--password">Password</div>
          <div className="signup-layout__form__input signup-layout__form__input--password-repeat">Repeat Password</div>
          <div className="signup-layout__form__btn-signup">Sign Up Button</div>
          <div className="signup-layout__form__link-login">Login Link</div>
        </div>
      </div>
    );
  }
}
