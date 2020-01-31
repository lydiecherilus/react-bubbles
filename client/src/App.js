import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link className="login-link" to="/">Login</Link>
        <Link className="bubble-page-link" to="/protected">BubblePage</Link>
        <Switch>
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
          <PrivateRoute path="/protected" component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
