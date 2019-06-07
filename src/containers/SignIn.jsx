import React, { Component } from 'react';
import '../styles/signup.css';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="signin-layout">
        <div className="signin-layout__hero">
          <div className="signin-layout__hero__title">Title</div>
          <div className="signin-layout__hero__desc">Description</div>
        </div>
        <div className="signin-layout__form">
          <div className="signin-layout__form__input signin-layout__form__input--email">Email</div>
          <div className="signin-layout__form__input signin-layout__form__input--password">Password</div>
          <div className="signin-layout__form__forgot-password">Forgot Password</div>
          <div className="signin-layout__form__btn-signin">Sign In Button</div>
          <div className="signin-layout__form__link-signup">Sign Up Link</div>
        </div>
      </div>
    );
  }
}
