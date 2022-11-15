/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components:pages/LandingPage';
import LoginPage from './components:pages/LoginPage';
import ForgetPasswordPage from './components:pages/ForgetPasswordPage';
import HomePage from './components:pages/HomePage';
import R from './components:pages/R';
import Afterlogin from './components:pages/Afterlogin';
import Success from './components:pages/Success';
import Adminlogin from './components:pages/Adminlogin';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/register" component={R} />
          <Route path="/Afterlogin" component={Afterlogin} />
          <Route path="/Success" component={Success} />
          <Route path="/admin" component={Adminlogin} />
        </Switch>
      </div>
    </Router>
  );
}
