import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify';
import '../App.css'
import BackgroundImage from '../assets:images/bg.png'

const SignInPage = () =>  {

    const [inputValues, setInputValue] = useState({
        email: '',
        password: '',
      });

    function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
    }
    async function signIn() {
        const username = inputValues.email;
        const password = inputValues.password;
        try {
            const user = await Auth.signIn(username, password);
            console.log(user)
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       signIn()
      
   }

 
    return (
        <div style= {ab}>
            <h2 className="main-para text-center" style= {abc}> Sign in to us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email Address</label><br/>
                    <input type="email" name="email" required value={inputValues.email} onChange={(e) => handleChange(e)}/>
                </div><br/>
                <div>
                    <label>Password</label><br/>
                    <input type="password" name="password" required autocomplete="on" value={inputValues.password} onChange={(e) => handleChange(e)}/>
                </div><br/>
                <div>
                    <button id="sub_btn" type="submit">Login</button>
                </div><br/>
                <div>
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                </div>
                
            </form>
            <footer>
                <div>Don't have account? <Link to="/r1">Create an account</Link></div>
                <div><Link to="/">Back to Homepage</Link></div>
            </footer>
        </div>
    )
}
export default SignInPage;

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
    paddingTop: "auto",
}
