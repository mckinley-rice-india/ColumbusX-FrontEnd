import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Sidebar from '../components/Sidebar';
import ProfileSettings from '../pages/ProfileSettings';

export default class ProfileRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { match } = this.props;
    return (
      <div className="profile-layout">
        <Sidebar />
        <Switch>
          <Route path={`${match.url}/profile`} component={ProfileSettings} />
        </Switch>
      </div>
    );
  }
}

ProfileRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
