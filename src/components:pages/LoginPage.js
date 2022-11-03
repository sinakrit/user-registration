import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import BackgroundImage from '../assets:images/bg.png'

export default function SignInPage() {
    return (
        <div style= {ab}>
            <h2 className="main-para text-center" style= {abc}> Sign in to us</h2>
            <form action="/home">
                <div>
                    <label>Username or Email address</label><br/>
                    <input type="text" name="first_name" required />
                </div><br/>
                <div>
                    <label>Password</label><br/>
                    <input type="password" name="password" required autocomplete="on"/>
                </div><br/>
                <div>
                    <button id="sub_btn" type="submit">Login</button>
                </div>
                <div>
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                </div>
                
            </form>
            <footer>
                <div>Don't have account? <Link to="/register1">Create an account</Link></div>
                <div><Link to="/">Back to Homepage</Link></div>
            </footer>
        </div>
    )
}

const ab = {
    width: "100%",
    height: "200vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center"
}

const abc = {
    paddingTop: "200px",
}
