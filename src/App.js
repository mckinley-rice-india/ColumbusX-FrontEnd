import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Welcome from './containers/Welcome';
import './styles/app.css';

const App = () => (
  <Router>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/welcome" component={Welcome} />
  </Router>
);

export default App;
