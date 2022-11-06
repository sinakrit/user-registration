import React, { useState, useEffect } from 'react'
import { Auth, Storage } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useHistory } from "react-router"

const Afterlogin = () =>  {

    const [ att, updateAtt ] = useState([])
    const [key, updateKey] = useState('')
    
    const history = useHistory();
    async function XX() {
    let  user = await Auth.currentAuthenticatedUser();

    const { attributes } = user; 
    updateAtt(attributes) 
    const a = await Storage.get(`${user.attributes.email}.png`)
     updateKey(a)
     console.log(a)
    }

    useEffect(() => {
        console.log('Select Screen loaded.')
       XX()
      }, [])

      async function signOut() {
        try {
            await Auth.signOut();
            history.push('/login')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
       signOut()
      
   }


    return (
        
         <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <form onSubmit={handleSubmit}>
            <h1>User Details</h1>
            <p>Name: {att.given_name}</p>
            <p>Email Address: {att.email}</p>
            <img src={key} alt="Girl in a jacket" width="70" height="80"></img>
            <div><br/>
            <button id="sub_btn" type="submit">SignOut</button>
            </div>
            </form>
         </div>
    )

}
export default Afterlogin;

