import React, { useState, useEffect } from 'react'
import { Auth, Storage } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

const Afterlogin = () =>  {

    const [ att, updateAtt ] = useState([])
    const [key, updateKey] = useState('')
    
    //updateUsers(XX())

    async function XX() {
    let  user = await Auth.currentAuthenticatedUser();

    const { attributes } = user; 
    updateAtt(attributes) 
    const a = await Storage.get(`${user.attributes.given_name}.png`)
     updateKey(a)
     console.log(a)
    }

    useEffect(() => {
        console.log('Select Screen loaded.')
       XX()
      }, [])

    return (
        
         <div>
            <h1>Hello</h1>
            <h1>{att.given_name}</h1>
            <h1>{att.email}</h1>
            <img src={key} alt="Girl in a jacket" width="50" height="60"></img>
         </div>
    )

}
export default Afterlogin;

