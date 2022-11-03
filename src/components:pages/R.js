import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router"
import Form1 from './Form1'
import BackgroundImage from '../assets:images/bg.png'
import { Auth } from 'aws-amplify';

const Form = () =>  {
    const [inputValues, setInputValue] = useState({
        name1: '',
        email: '',
        date: "",
        phone: "",
        password: '',
        confirmpassword: '',
      });

    const [validation, setValidation] = useState({
        name1: "",
        email: "",
        date: "",
        phone: "",
        password: "",
        confirmpassword: "",
      });

    function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
      }

    //  const handleChange = (e) => {
    //   setUsername(
    //     e.target.value
    //   )
    // }

 
    
  const history = useHistory();
  async function signUp() {
    const username = inputValues.email;
    const password = inputValues.password;
      try {
          const { user } = await Auth.signUp({
            username,    //email
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
         if (checkValidation()) {
           //console.log(e)
           signUp()
          
       }
       
    }
   const checkValidation = () => {
        let errors = JSON.parse(JSON.stringify(validation));
        //let formIsValid = true
        //first Name validation
        if (!inputValues.name1.trim()) {
          errors.name1 = "*First name is required";
          setValidation(errors);
          return false
        } else {
          errors.name1 = "";
        }
        // email validation
        const emailCond = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!inputValues.email.trim()) {
            //formIsValid = false
            errors.email = "*Email is required";
            setValidation(errors);
           return false
        } else if (!inputValues.email.match(emailCond)) {
            //formIsValid = false
            errors.email = "*Please ingress a valid email address";
            setValidation(errors);
            return false
        } else {
          errors.email = "";
        }
        //Date
        const phoneCond = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (!inputValues.phone.trim()) {
            //formIsValid = false
            errors.phone = "*Phone Number is required";
            setValidation(errors);
           return false
        } else if (!inputValues.phone.match(phoneCond)) {
            //formIsValid = false
            errors.phone = "*Please ingress a valid phone number";
            setValidation(errors);
            return false
        } else {
          errors.phone = "";
        }



        //password validation
        const cond1 = /^(?=.*[a-z]).{6,20}$/;
        const cond2 = /^(?=.*[A-Z]).{6,20}$/;
        const cond3 = /^(?=.*[0-9]).{6,20}$/;
        const password = inputValues.password;
        if (!password) {
          errors.password = "*password is required";
          setValidation(errors);
          return false
        } else if (password.length < 6) {
          errors.password = "*Password must be longer than 6 characters";
          setValidation(errors);
          return false
        } else if (password.length >= 20) {
          errors.password = "*Password must shorter than 20 characters";
          setValidation(errors);
          return false
        } else if (!password.match(cond1)) {
          errors.password = "*Password must contain at least one lowercase";
          setValidation(errors);
          return false;
        } else if (!password.match(cond2)) {
          errors.password = "*Password must contain at least one capital letter";
          setValidation(errors);
          return false;
        } else if (!password.match(cond3)) {
          errors.password = "*Password must contain at least a number";
          setValidation(errors);
          return false;
        } else {
          errors.password = "";
        }
    
        //matchPassword validation
        if (!inputValues.confirmpassword) {
          errors.confirmpassword = "*Password confirmation is required";
          setValidation(errors);
          return false
        } else if (inputValues.confirmpassword !== inputValues.password) {
          errors.confirmpassword = "*Password does not match confirmation password";
          setValidation(errors);
          return false
        } else {
          errors.password = "";
        }
        setValidation({errors: ""});
        return true;
      };
    
        return (
        <div style={abc}>
        <h2 className="main-para text-center">Sign Up</h2>
        <h5 className="main-para text-center">Create your account</h5>
        <form style={av} onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label> Username </label><br/>
                <input type="text" className="input" placeholder="Name" name='name1' value={inputValues.name1} onChange={(e) => handleChange(e)}/>
                </div>
                {validation.name1 && <p>{validation.name1}</p>}
            <div className='mb-3'>
                <label>Email Address</label><br/>
                <input type="email" name="email" placeholder="Email"  value={inputValues.email} onChange={(e) => handleChange(e)}/>
            </div>
                {validation.email && <p>{validation.email}</p>}
            <div className='mb-3'>
                <label>DOB</label><br/>
                <Form1 name = "date" value={inputValues.date} placeholder="DD/MM/YYYY" onChange={(e) => handleChange(e)}/>
                </div>
                
            <div className='mb-3'>
                <label> Phone </label><br/>
                <input type="phone" name="phone" placeholder="(xxx)xxx-xxxx" value = {inputValues.phone} className="input" onChange={(e) => handleChange(e)} />
                
            </div>
            {validation.phone && <p>{validation.phone}</p>}
            <div className='mb-3'>
                <label> Password </label><br/>
                <input type="password" name="password" className="input" value={inputValues.password} autocomplete="on" onChange={(e) => handleChange(e)} />
                
            </div>
            {validation.password && <p>{validation.password}</p>}
            <div className='mb-3'>
                <label> Confirm Password </label><br/>
                <input type="password" name="confirmpassword" className="input" value={inputValues.confirmpassword} autocomplete="on" onChange={(e) => handleChange(e)} />
                
            </div>
            {validation.confirmpassword && <p>{validation.confirmpassword}</p>}
            <div>
            <label class="custom-file-label" for="inputGroupFile01"> Upload a picture </label><br/>
            <input type="file" className="custom-file-input" name="file" inputProps={{ accept: "image/*" }} id="inputGroupFile01"/>
            </div>
            <div>
                <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
            </div>
            <div><br/>
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

