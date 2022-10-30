import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components:pages/LandingPage'
import LoginPage from './components:pages/LoginPage'
import RegisterPage from './components:pages/RegisterPage'
import ForgetPasswordPage from './components:pages/ForgetPasswordPage'
import HomePage from './components:pages/HomePage'
import Form1 from './components:pages/Form1'
import Register1 from './components:pages/Register1'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/form1" component = { Form1 } />
                    <Route path="/register1" component = { Register1 } />
                </Switch>
            </div>
        </Router>
    )
}



