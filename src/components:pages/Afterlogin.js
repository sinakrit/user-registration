/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Auth, Storage } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useHistory } from 'react-router';
import BackgroundImage from '../assets:images/bg.png';

function Afterlogin() {
  const [att, updateAttributes] = useState([]);
  const [key, updateKey] = useState('');

  const history = useHistory();
  async function getDetails() {
    const user = await Auth.currentAuthenticatedUser();

    const { attributes } = user;
    updateAttributes(attributes);
    const a = await Storage.get(`${user.attributes.email}.png`);
    updateKey(a);
    console.log(a);
  }

  useEffect(() => {
    console.log('Select Screen loaded.');
    getDetails();
  }, []);

  async function signOut() {
    try {
      await Auth.signOut();
      history.push('/login');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signOut();
  };

  return (

    <div style={pagestyling}>
      <form onSubmit={handleSubmit}>
        <h1>User Details</h1>
        <p>
          Name:
          {att.given_name}
        </p>
        <p>
          Email Address:
          {att.email}
        </p>
        <img src={key} alt="Girl in a jacket" width="80" height="100" />
        <div>
          <br />
          <button id="sub_btn" type="submit">SignOut</button>
        </div>
      </form>
    </div>
  );
}
export default Afterlogin;

const pagestyling = {
  width: '100%',
  height: '200vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '50px',
};
