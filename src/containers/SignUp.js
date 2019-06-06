import React, { Component } from 'react';
import '../styles/signup.css';

export default class SignUp extends Component {
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
          <div className="signup-layout__form__forgot-password">Forgot Password</div>
          <div className="signup-layout__form__btn-signin">Sign In Button</div>
          <div className="signup-layout__form__link-signup">Sign Up Link</div>
        </div>
      </div>
    );
  }
}
