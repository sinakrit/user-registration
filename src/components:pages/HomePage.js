/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Auth, Storage } from 'aws-amplify';
import { useHistory } from 'react-router';
import BackgroundImage from '../assets:images/bg.png';

export default function HomePage() {
  const history = useHistory();

  async function uploadPhoto(e) {
    const user = await Auth.currentAuthenticatedUser();

    const file = e.target.files[0];
    try {
      await Storage.put(`${user.attributes.email}.png`, file, {
        contentType: 'image/png',
      });
      console.log('Photo uploaded');
      const result = await Auth.updateUserAttributes(user, {
        'custom:picture_key': `${user.attributes.email}.png`,
      });
      console.log(result);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
    console.log(user);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/Success');
  };
  return (
    <div className="text-center" style={csstyle}>
      <h2 className="main-para text-center">Your Account has been created!</h2>
      <h2 className="main-para text-center">Choose a picture to Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" className="custom-file-input" name="file" accept="image/png, image/jpeg" onChange={uploadPhoto} />
        </div>
        <div>
          <br />
          <button id="sub_btn" type="submit" value="Sign Up">Upload</button>
        </div>
      </form>
    </div>
  );
}

const csstyle = {
  width: '100%',
  height: '200vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  textAlign: 'center',
};
