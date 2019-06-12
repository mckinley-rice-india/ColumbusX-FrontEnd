import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import Home from '../containers/Home';
import SettingsRouter from './SettingsRouter';
import VCHistory from '../containers/VCHistory';
import LegalRouter from './LegalRouter';
import AboutRouter from './AboutRouter';

import '../styles/main.css';

export default class HomeRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path={`${match.url}/`} component={Home} />
          <Route path={`${match.url}/settings`} component={SettingsRouter} />
          <Route path={`${match.url}/vc-history`} component={VCHistory} />
          <Route path={`${match.url}/legal`} component={LegalRouter} />
          <Route path={`${match.url}/about`} component={AboutRouter} />
        </Switch>
      </React.Fragment>
    );
  }
}

HomeRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
