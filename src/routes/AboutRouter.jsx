import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Sidebar from '../components/Sidebar';
import AboutCX from '../containers/AboutCX';


export default class AboutRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <div className="legal-layout">
        <Sidebar />
        <Switch>
          <Route path={`${match.url}/cx`} component={AboutCX} />
        </Switch>
      </div>
    );
  }
}

AboutRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
