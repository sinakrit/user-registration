/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Auth } from 'aws-amplify';
import DatePicker from 'react-datepicker';
import BackgroundImage from '../assets:images/bg.png';
import 'react-datepicker/dist/react-datepicker.css';

function Form() {
  const [inputValues, setInputValue] = useState({
    name1: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: '',
  });
  const [startDate, setStartDate] = useState(new Date());
  const [validation, setValidation] = useState({
    name1: '',
    date: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: '',
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
    const { password } = inputValues;
    const given_name = inputValues.name1;
    const phone_number = inputValues.phone;

    // const picture = inputValues.picture;
    try {
      const { user } = await Auth.signUp({
        username, // email
        password,
        attributes: {
          given_name,
          phone_number,
          'custom:date_key': startDate,

        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);

      history.push('/home');
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      signUp();
    }
  };

  const checkValidation = () => {
    const errors = JSON.parse(JSON.stringify(validation));
    if (!inputValues.name1.trim()) {
      errors.name1 = '*Name is required';
      setValidation(errors);
      return false;
    }
    errors.name1 = '';

    // email validation
    const emailCond = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!inputValues.email.trim()) {
      // formIsValid = false
      errors.email = '*Email is required';
      setValidation(errors);
      return false;
    } if (!inputValues.email.match(emailCond)) {
      // formIsValid = false
      errors.email = '*Please input a valid email address';
      setValidation(errors);
      return false;
    }
    errors.email = '';

    //DOB validation
    if(!startDate) {
      // formIsValid = false
      errors.date = '*DOB is required';
      setValidation(errors);
      return false;
    }
    const year = startDate.getFullYear()
    if(year>2004 || year < 1952){
      errors.date = '*Age should be greater than 18 and less than 70 years';
      setValidation(errors);
      return false;
    }
    errors.date = '';

    // Phone
    const phoneCond = /^\+(?:[0-9] ?){6,14}[0-9]$/;  
    if (!inputValues.phone.trim()) {
      // formIsValid = false
      errors.phone = '*Phone Number is required';
      setValidation(errors);
      return false;
    } if (!inputValues.phone.match(phoneCond)) {
      // formIsValid = false
      errors.phone = '*Please input a valid phone number';
      setValidation(errors);
      return false;
    }
    errors.phone = '';

    // password validation
    const cond1 = /^(?=.*[a-z]).{6,20}$/;
    const cond2 = /^(?=.*[A-Z]).{6,20}$/;
    const cond3 = /^(?=.*[0-9]).{6,20}$/;
    const { password } = inputValues;
    if (!password) {
      errors.password = '*password is required';
      setValidation(errors);
      return false;
    } if (password.length < 6) {
      errors.password = '*Password must be longer than 6 characters';
      setValidation(errors);
      return false;
    } if (password.length >= 20) {
      errors.password = '*Password must shorter than 20 characters';
      setValidation(errors);
      return false;
    } if (!password.match(cond1)) {
      errors.password = '*Password must contain at least one lowercase';
      setValidation(errors);
      return false;
    } if (!password.match(cond2)) {
      errors.password = '*Password must contain at least one capital letter';
      setValidation(errors);
      return false;
    } if (!password.match(cond3)) {
      errors.password = '*Password must contain at least a number';
      setValidation(errors);
      return false;
    }
    errors.password = '';

    // matchPassword validation
    if (!inputValues.confirmpassword) {
      errors.confirmpassword = '*Password confirmation is required';
      setValidation(errors);
      return false;
    } if (inputValues.confirmpassword !== inputValues.password) {
      errors.confirmpassword = '*Password does not match confirmation password';
      setValidation(errors);
      return false;
    }
    errors.password = '';

    setValidation({ errors: '' });
    return true;
  };

  return (
    <div style={abc}>
      <h2 className="main-para text-center">Sign Up</h2>
      <h5 className="main-para text-center">Create your account</h5>
      <form style={av} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label> Name *</label>
          <br />
          <input type="text" className="input" placeholder="Name" name="name1" value={inputValues.name1} onChange={(e) => handleChange(e)} />
        </div>
        {validation.name1 && <p>{validation.name1}</p>}
        <div className="mb-3">
          <label>Email Address *</label>
          <br />
          <input type="email" name="email" placeholder="Email" value={inputValues.email} onChange={(e) => handleChange(e)} />
        </div>
        {validation.email && <p>{validation.email}</p>}
        <div className="mb-3">
          <label>DOB *</label>
          <br />
          <DatePicker dateFormat="dd/MM/yyyy" showYearDropdown yearDropdownItemNumber={115} scrollableYearDropdown={true} selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        {validation.date && <p>{validation.date}</p>}
        <div className="mb-3">
          <label> Phone *</label>
          <br />
          <input type="phone" name="phone" placeholder="(xxx)xxx-xxxx" value={inputValues.phone} className="input" onChange={(e) => handleChange(e)} />
        </div>
        {validation.phone && <p>{validation.phone}</p>}
        <div className="mb-3">
          <label> Password *</label>
          <br />
          <input type="password" name="password" className="input" value={inputValues.password} autoComplete="on" onChange={(e) => handleChange(e)} />

        </div>
        {validation.password && <p>{validation.password}</p>}
        <div className="mb-3">
          <label> Confirm Password *</label>
          <br />
          <input type="password" name="confirmpassword" className="input" value={inputValues.confirmpassword} autoComplete="on" onChange={(e) => handleChange(e)} />

        </div>
        {validation.confirmpassword && <p>{validation.confirmpassword}</p>}

        <div>
          <input type="checkbox" name="checkbox" id="checkbox" required />
          {' '}
          <span>
            I agree all statements in
            <a href="https://google.com" target="_blank" rel="noopener noreferrer"> terms of service</a>
          </span>
          .
        </div>
        <div>
          <br />
          <button id="sub_btn" type="submit" value="Sign Up">Register</button>
        </div>
      </form>
      <footer>
        <p style={footer}><Link to="/">Back to Homepage</Link></p>
      </footer>
    </div>

  );
}

export default Form;

const abc = {
  width: '100%',
  height: '200vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  textAlign: 'center',
  paddingTop: '50px',
};
const av = {
  textAlign: 'left',
  height: 'auto',
};
const footer = {
  height: '40vh',
  color: 'black',
};
