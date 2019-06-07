import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import Welcome from '../containers/Welcome';

export default class HomeRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <Route path={`${match.url}/signin`} component={SignIn} />
        <Route path={`${match.url}/signup`} component={SignUp} />
        <Route path={`${match.url}/welcome`} component={Welcome} />
      </>
    );
  }
}

HomeRouter.propTypes = {
  match: PropTypes.string.isRequired,
};
