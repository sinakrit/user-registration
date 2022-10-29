import React from 'react'
import { Link } from 'react-router-dom'
import Form1 from './Form1'
import '../App.css'
import BackgroundImage from '../assets:images/bg.png'

export default function SignUpPage() {

    return (
            <div style={abc}>
                <h2 className="main-para text-center">Sign Up</h2>
                <h5 className="main-para text-center">Create your account</h5>
                <form action="/home" style={av}>
                    <p>
                        <label> Name </label><br/>
                        <input type="text" name="name" required />
                    </p>
                    <p><br/>
                        <label> Username</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <p><br/>
                        <label>Email Address</label><br/>
                        <input type="email" name="email" required />
                    </p>
                    <p><br/>
                        <label>Age</label><br/>
                        <input type="number" name="age" required />
                    </p>
                    <p><br/>
                        <label>DOB</label><br/>
                        <Form1/>
                    </p>
                    <p><br/>
                        <label> Password </label><br/>
                        <input type="password" name="password" requiredc />
                    </p>
                    <p><br/>
                    <label class="custom-file-label" for="inputGroupFile01"> Upload a picture </label><br/>
                    <input type="file" className="custom-file-input" name="file" inputProps={{ accept: "image/*" }} id="inputGroupFile01"/>
                    </p>
                    <p><br/>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p><br/>
                        <button id="sub_btn" type="submit">Register</button>
                    </p>
                </form>
                <footer>
                    <p style={ax}><Link to="/">Back to Homepage</Link></p>
                </footer>
            </div>
       
    )

}
const abc = {
    width: "100%",
    height: "200vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
    paddingTop: "50px",
}
const av = {
    textAlign: "left",
    height: "80vh"
}
const ax = {
    height: "40vh",
    color: "black"
}


