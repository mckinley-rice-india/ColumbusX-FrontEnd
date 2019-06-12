import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Sidebar from '../components/Sidebar';
import Policies from '../containers/Policies';


export default class Legal extends Component {
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
          <Route path={`${match.url}/policies`} component={Policies} />
        </Switch>
      </div>
    );
  }
}

Legal.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
