import React, { useEffect, useState } from 'react'
import { Auth, API } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useHistory } from "react-router"
import BackgroundImage from '../assets:images/bg.png'


const Adminlogin = () =>  {

     const [users, setUsers] = useState([])
    
    const history = useHistory();
    
    

    async function listUsers(){
        let apiName = 'AdminQueries';
        let path = '/listUsers';
        let myInit = { 
            queryStringParameters: {
              
            },
            headers: {
              'Content-Type' : 'application/json',
              Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        const rest = await API.get(apiName, path, myInit);
        
        console.log(rest)
        setUsers(rest.Users);
        console.log("This is a statement: ", users)
        for (let i=0; i<users.length; i++){
            console.log("Loop printing: ", users[i].Attributes[6].Value)
        }
        //console.log(rest)
        return rest;
      }      

    useEffect(() => {
        console.log('Select Screen loaded.')
        listUsers()
      }, [])

      async function signOut() {
        try {
            await Auth.signOut();
            history.push('/')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
       signOut()
      
   }


    return (
        
         <div style={pagestyling}>
             <h1>List of Registered Users</h1>
            <table style ={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'marginLeft': 'auto','marginRight': 'auto'}}>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
           {users.map((val, key) => {
           return (
            <tr key={key}>
              <td>{val.Attributes[6].Value}</td>
              <td>{val.Attributes[7].Value}</td>
            </tr>
          )
          })}
            </table>
            <form  onSubmit={handleSubmit}>
            <button id="sub_btn" type="submit">SignOut</button>
            </form>
         </div>
    )

}
export default Adminlogin;

const pagestyling = {
  width: "100%",
  height: "200vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  textAlign: "center",
  alignItems: 'center',
  justifyContent: 'center'
}

