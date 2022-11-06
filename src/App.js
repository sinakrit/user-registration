import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components:pages/LandingPage'
import LoginPage from './components:pages/LoginPage'
import ForgetPasswordPage from './components:pages/ForgetPasswordPage'
import HomePage from './components:pages/HomePage'
import Register1 from './components:pages/Register1'
import R from './components:pages/R'
import Afterlogin from './components:pages/Afterlogin'


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/r1" component = { R } />
                    <Route path="/register1" component = { Register1 } />
                    <Route path="/A" component = { Afterlogin } />
                </Switch>
            </div>
        </Router>
    )
}



