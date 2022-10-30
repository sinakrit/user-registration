import React, { Component } from 'react'
import FormValidator from './FormValidator'
import { Link } from 'react-router-dom'
import Form1 from './Form1'
import BackgroundImage from '../assets:images/bg.png'

class Form extends React.Component {
  constructor() {
    super();

    this.validator = new FormValidator([
      { 
        field: 'email', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Email is required.' 
      },
      { 
        field: 'email',
        method: 'isEmail', 
        validWhen: true, 
        message: 'That is not a valid email.'
      },
      { 
        field: 'phone', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Pleave provide a phone number.'
      },
      {
        field: 'phone', 
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true, 
        message: 'That is not a valid phone number.'
      },
      { 
        field: 'password', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Password is required.'
      },
      { 
        field: 'password_confirmation', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Password confirmation is required.'
      },
      { 
        field: 'password_confirmation', 
        method: this.passwordMatch,   // notice that we are passing a custom function here
        validWhen: true, 
        message: 'Password and password confirmation do not match.'
      }
    ]);

    this.state = {
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
      validation: this.validator.valid(),
    }

    this.submitted = false;
  }

  passwordMatch = (confirmation, state) => (state.password === confirmation)

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  }
    
  handleFormSubmit = event => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      // handle actual form submission here
    }
  }

  render() {
    let validation = this.submitted ?                         // if the form has been submitted at least once
                      this.validator.validate(this.state) :   // then check validity every time we render
                      this.state.validation                   // otherwise just use what's in state

    return (
        <div style={abc}>
        <h2 className="main-para text-center">Sign Up</h2>
        <h5 className="main-para text-center">Create your account</h5>
        <form action="/home" style={av}>
            <div>
                <label> Name </label><br/>
                <input type="text" name="name" className="form-control" required />
            </div><br/>
            <div>
                <label>Email Address</label><br/>
                <input type="email" name="email" placeholder="user@gmail.com" className="form-control" onChange={this.handleInputChange} required />
                <span className="help-block">{validation.email.message}</span>
            </div><br/>
            <div>
                <label>DOB</label><br/>
                <Form1/>
            </div><br/>
            <div className={validation.phone.isInvalid && 'has-error'}>
                <label> Phone </label><br/>
                <input type="phone" name="phone" placeholder="(xxx)xxx-xxxx" className="form-control" onChange={this.handleInputChange} required />
                <span className="help-block">{validation.password.message}</span>
            </div><br/>
            <div className={validation.password.isInvalid && 'has-error'}>
                <label htmlFor="password"> Password </label><br/>
                <input type="password" name="password" className="form-control" onChange={this.handleInputChange} required />
                <span className="help-block">{validation.phone.message}</span>
            </div><br/>
            <div className={validation.password_confirmation.isInvalid && 'has-error'}>
                <label htmlFor="password_confirmation"> Confirm Password </label><br/>
                <input type="password" name="password_confirmation" className="form-control" onChange={this.handleInputChange} required />
                <span className="help-block">{validation.password_confirmation.message}</span>
            </div><br/>
            <div>
            <label class="custom-file-label" for="inputGroupFile01"> Upload a picture </label><br/>
            <input type="file" className="custom-file-input" name="file" inputProps={{ accept: "image/*" }} id="inputGroupFile01"/>
            </div><br/>
            <div>
                <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
            </div><br/>
            <div>
                <button id="sub_btn" type="submit">Register</button>
            </div>
        </form>
        <footer>
            <p style={ax}><Link to="/">Back to Homepage</Link></p>
        </footer>
    </div>

    )
  }
}
export default Form;

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

