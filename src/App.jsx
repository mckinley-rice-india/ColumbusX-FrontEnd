import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';

import HomeRouter from './routes/HomeRouter';
import AuthRouter from './routes/AuthRouter';
import './styles/app.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/auth" component={AuthRouter} />
      <Route path="/app" component={HomeRouter} />
      <Route
        path="/"
        render={() => (
          <div>
            <Link to="/app">Home</Link>
            <br />
            <Link to="/auth/signup">Signup</Link>
          </div>
        )}
      />
    </Switch>
  </Router>
);

export default App;
