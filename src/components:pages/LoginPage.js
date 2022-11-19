/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router';
import BackgroundImage from '../assets:images/bg.png';
// import { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger';
// import middy from '@middy/core';

function SignInPage() {
  const [inputValues, setInputValue] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  async function signIn() {
    const username = inputValues.email;
    const { password } = inputValues;
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      try {
        if (user.signInUserSession.idToken.payload['cognito:groups'][0] == 'Admin') {
          history.push('/admin');
        }
      } catch (error) {
        history.push('/Afterlogin');
      }
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn();
  };

  return (
    <div style={pagestyling}>
      <h2 className="main-para text-center" style={headerstyling}> Sign in to us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <br />
          <input type="email" name="email" required value={inputValues.email} onChange={(e) => handleChange(e)} />
        </div>
        <br />
        <div>
          <label>Password</label>
          <br />
          <input type="password" name="password" required autoComplete="on" value={inputValues.password} onChange={(e) => handleChange(e)} />
        </div>
        <br />
        <div>
          <button id="sub_btn" type="submit">Login</button>
        </div>
        <br />
        <div>
          <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
        </div>

      </form>
      <footer>
        <div>
          Don't have account?
          <Link to="/register">Create an account</Link>
        </div>
        <div><Link to="/">Back to Homepage</Link></div>
      </footer>
    </div>
  );
}
export default SignInPage;

const pagestyling = {
  width: '100%',
  height: '200vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  textAlign: 'center',
};

const headerstyling = {
  paddingTop: 'auto',
};
