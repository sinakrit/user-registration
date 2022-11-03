import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router"
import Form1 from './Form1'
import BackgroundImage from '../assets:images/bg.png'
import { Auth } from 'aws-amplify';

const Form = () =>  {
     const [name, setName] = useState('')
     const [username, setEmail] = useState('')
     const [date, setDate] = useState('')
     const [phone, setPhone] = useState('')
     const [password, setPassword] = useState('')
     const [confirmpassword, setConfirmpassword] = useState('') 
     //const [errors, setErrors] = useState({})

    //  const handleChange = (e) => {
    //   setUsername(
    //     e.target.value
    //   )
    // }

// const [validation, setValidation] = useState({
//         name: "",
//         username: "",
//         date: "",
//         phone: "",
//         password: "",
//         confirmpassword: "",
//       });
    
  const history = useHistory();
  async function signUp() {
      try {
          const { user } = await Auth.signUp({
              username, //email
              password,
              attributes: {
                  //email,
                    // optional - E.164 number convention
                  // other custom attributes 
              },
              autoSignIn: { // optional - enables auto sign in after user is confirmed
                  enabled: true,
              }
          });
          console.log(user);
          history.push('/home')
      } catch (error) {
          console.log('error signing up:', error);
      }
  }
  
    
  const  handleSubmit = (e) => {
         e.preventDefault()
         //if (validateForm()) {
           //console.log(e)
          
       //}
       signUp()
    }
    //Form validation Checking
//   

      // validateForm = () => {
      //   let errors = {}
      //   let formIsValid = true
    
      //   if (!this.state.username) {
      //     formIsValid = false
      //     errors['username'] = '*Please enter your username'
      //   }
    
      //   if (this.state.username) {
      //     if (!this.state.username.match(/^\w+$/)) {
      //       formIsValid = false
      //       errors['username'] = '*Please use alphanumeric characters only'
      //     }
      //   }
    
      //   if (!this.state.email) {
      //     formIsValid = false
      //     errors['email'] = '*Please enter your email'
      //   }
    
      //   if (this.state.email) {
      //     //regular expression for email validation
      //     let pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      //     if (!pattern.test(this.state.email)) {
      //       formIsValid = false
      //       errors['email'] = '*Please enter valid email'
      //     }
      //   }
      //   if (!this.state.date) {
      //       formIsValid = false
      //       errors['date'] = '*Please select a date'
      //     }
      //   if (!this.state.phone) {
      //       formIsValid = false
      //       errors['phone'] = '*Please enter a phone number'
      //     }
      //   if (this.state.phone) {
      //       if (!this.state.phone.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)) {
      //       formIsValid = false
      //       errors['phone'] = '*Please enter a valid phone number'
      //     }
      //   }
    
      //   if (!this.state.password) {
      //     formIsValid = false
      //     errors['password'] = '*Please enter your password'
      //   }
    
      //   if (this.state.password) {
      //     if (!this.state.password.match(/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/)) {
      //       formIsValid = false
      //       errors['password'] = '*Please enter secure and strong password'
      //     }
      //   }
        
      //   if (!this.state.confirmpassword) {
      //         formIsValid = false
      //         errors['confirmpassword'] = '*Please confirm the password'
      //     }
        
      //   if (this.state.confirmpassword) {
      //       if (this.state.password !== this.state.confirmpassword) {
      //         formIsValid = false
      //         errors['confirmpassword'] = '*Password does not match'
      //       }
      //     }
    
      //   this.setState({ errors })
    
      //   return formIsValid
      // }
    
        return (
        <div style={abc}>
        <h2 className="main-para text-center">Sign Up</h2>
        <h5 className="main-para text-center">Create your account</h5>
        <form style={av} onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label> Username </label><br/>
                <input type="text" className="input" placeholder="Name" name='username' value={name} onChange={(e) => setName(e.target.value)}/>
                
            </div><br/>
            <div>
                <label>Email Address</label><br/>
                <input type="email" name="email" placeholder="user@gmail.com" className="input" value={username} onChange={(e) => setEmail(e.target.value)}/>
                
            </div><br/>
            <div>
                <label>DOB</label><br/>
                <Form1 name = "date" value={date} placeholder="DD/MM/YYYY" onChange={(e) => setDate(e.target.value)}/>
                
            </div><br/>
            <div>
                <label> Phone </label><br/>
                <input type="phone" name="phone" placeholder="(xxx)xxx-xxxx" value = {phone} className="input" onChange={(e) => setPhone(e.target.value)} />
                
            </div><br/>
            <div>
                <label> Password </label><br/>
                <input type="password" name="password" className="input" value={password} autocomplete="on" onChange={(e) => setPassword(e.target.value)} />
                
            </div><br/>
            
            <div>
                <label> Confirm Password </label><br/>
                <input type="password" name="confirmpassword" className="input" value={confirmpassword} autocomplete="on" onChange={(e) => setConfirmpassword(e.target.value)} />
                
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

