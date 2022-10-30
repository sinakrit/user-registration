import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { createUser } from '../adapter/api'
import Form1 from './Form1'
import BackgroundImage from '../assets:images/bg.png'

class Form extends React.Component {
    state = {
        username: '',
        email: '',
        date: '',
        phone: '',
        password: '',
        confirmpassword: '',
        errors: {},
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
     handleSubmit = (e) => {
        e.preventDefault()
        if (this.validateForm()) {
          console.log(this.state)
          createUser(this.state)
          .then(res => {
            if(res.error) {
              let errors = {}
              console.log("Response", res)
              console.log("Res ERR:", res.error)
              if (res.error === "*Username already exists"){
                errors['username'] = res.error
              }else {
                errors['email'] = res.error
              }
              this.setState({ errors })
            }else {
              console.log("USER SUCCESSFULLY CREATED")
              console.log("Response", res)  // is a token
              this.props.handleLogin(res)
            }
          })
        }
      }
    
      validateForm = () => {
        let errors = {}
        let formIsValid = true
    
        if (!this.state.username) {
          formIsValid = false
          errors['username'] = '*Please enter your username'
        }
    
        if (this.state.username) {
          if (!this.state.username.match(/^\w+$/)) {
            formIsValid = false
            errors['username'] = '*Please use alphanumeric characters only'
          }
        }
    
        if (!this.state.email) {
          formIsValid = false
          errors['email'] = '*Please enter your email'
        }
    
        if (this.state.email) {
          //regular expression for email validation
          let pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(this.state.email)) {
            formIsValid = false
            errors['email'] = '*Please enter valid email'
          }
        }
        if (!this.state.date) {
            formIsValid = false
            errors['date'] = '*Please select a date'
          }
        if (!this.state.phone) {
            formIsValid = false
            errors['phone'] = '*Please enter a phone number'
          }
        if (this.state.phone) {
            if (!this.state.phone.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)) {
            formIsValid = false
            errors['phone'] = '*Please enter a valid phone number'
          }
        }
    
        if (!this.state.password) {
          formIsValid = false
          errors['password'] = '*Please enter your password'
        }
    
        if (this.state.password) {
          if (!this.state.password.match(/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/)) {
            formIsValid = false
            errors['password'] = '*Please enter secure and strong password'
          }
        }
        
        if (!this.state.confirmpassword) {
              formIsValid = false
              errors['confirmpassword'] = '*Please confirm the password'
          }
        
        if (this.state.confirmpassword) {
            if (this.state.password !== this.state.confirmpassword) {
              formIsValid = false
              errors['confirmpassword'] = '*Password does not match'
            }
          }
    
        this.setState({ errors })
    
        return formIsValid
      }
    
      render() {
    
        const { username, email, phone, password, confirmpassword } = this.state
    
        return (
        <div style={abc} onSubmit={this.handleSubmit}>
        <h2 className="main-para text-center">Sign Up</h2>
        <h5 className="main-para text-center">Create your account</h5>
        <form style={av}>
            <div >
                <label> Username </label><br/>
                <input type="text" className="input" name='username' value={username} onChange={this.handleChange}/>
                <div className='errorMsg'>{this.state.errors.username}</div>
            </div><br/>
            <div>
                <label>Email Address</label><br/>
                <input type="email" name="email" placeholder="user@gmail.com" className="input" value={email} onChange={this.handleChange} />
                <div className='errorMsg'>{this.state.errors.email}</div>
            </div><br/>
            <div>
                <label>DOB</label><br/>
                <Form1 name = "date" value={email} onChange={this.handleChange}/>
                <div className='errorMsg'>{this.state.errors.date}</div>
            </div><br/>
            <div>
                <label> Phone </label><br/>
                <input type="phone" name="phone" placeholder="(xxx)xxx-xxxx" value = {phone} className="input" onChange={this.handleChange} />
                <div className='errorMsg'>{this.state.errors.phone}</div>
            </div><br/>
            <div>
                <label> Password </label><br/>
                <input type="password" name="password" className="input" value={password} onChange={this.handleChange} />
                <div className='errorMsg'>{this.state.errors.password}</div>
            </div><br/>
            
            <div>
                <label> Confirm Password </label><br/>
                <input type="password" name="confirmpassword" className="input" value={confirmpassword} onChange={this.handleChange} />
                <div className='errorMsg'>{this.state.errors.confirmpassword}</div>
            </div><br/>
            
            <div>
            <label class="custom-file-label" for="inputGroupFile01"> Upload a picture </label><br/>
            <input type="file" className="custom-file-input" name="file" inputProps={{ accept: "image/*" }} id="inputGroupFile01"/>
            </div><br/>
            <div>
                <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
            </div><br/>
            <div>
            <button id="sub_btn" type="submit" value='Sign Up'>Register</button>
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
    height: "auto"
}
const ax = {
    height: "40vh",
    color: "black"
}

