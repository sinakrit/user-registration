import React, { useState } from 'react'
import { useHistory } from "react-router"
import { Auth, Storage } from 'aws-amplify';

const Test = () =>  {
    const [user, setUser] = useState('')
    const [username, setEmail] = useState('')
    const [password, setP] = useState('')

    
  const history = useHistory();
  async function signUp() {
      try {
          const { user } = await Auth.signUp({
            username,    //email
            password,
              attributes: {
                'custom:picture_key':  `${user.username}.png`
                 
              },
              autoSignIn: { 
                  enabled: true,
              }
          });
          console.log(user);
          history.push('/home')
      } catch (error) {
          console.log('error signing up:', error);
      }
  }
  async function uploadPhoto(e) {
    { setUser(user) }
    const file = e.target.files[0];
    try {
      await Storage.put(`${user.username}.png`, file, {
        contentType: "image/png",
      });
      console.log("Photo uploaded")
      let result = await Auth.updateUserAttributes(user, {
        'custom:picture_key': `${user.username}.png`
    });
    console.log(result);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }

  }
    
  const  handleSubmit = (e) => {
         e.preventDefault()
           signUp()  
    }

   
     
    
        return (
        <div>
        <h2 className="main-para text-center">Sign Up</h2>
    
        <form onSubmit={handleSubmit}>
      
            <div className='mb-3'>
                <label>Email Address</label><br/>
                <input type="email" placeholder="Email"  value={username} onChange={(e) => setEmail(e.target.value)}/>
            </div>
               
            <div className='mb-3'>
                <label> Password </label><br/>
                <input type="password" className="input" value={password} autocomplete="on" onChange={(e) => setP(e.target.value)} />
                
            </div>
           
            <div>
            <label class="custom-file-label"> Upload a picture </label><br/>
            <input type="file" className="custom-file-input" name="file" inputProps={{ accept: "image/*" }} onChange={uploadPhoto}/>
            </div>
            
            <div><br/>
            <button id="sub_btn" type="submit" value='Sign Up'>Register</button>
            </div>
        </form>
    </div>

    )
        }
 
export default Test;

