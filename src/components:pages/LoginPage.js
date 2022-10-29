import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import BackgroundImage from '../assets:images/bg.png'

export default function SignInPage() {
    return (
        <div style= {ab}>
            <h2 className="main-para text-center" style= {abc}> Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or Email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p><br/>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p><br/>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                <p><br/>
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                </p>
                
            </form>
            <footer>
                <p>Don't have account? <Link to="/register">Create an account</Link></p>
                <p><Link to="/">Back to Homepage</Link></p>
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
