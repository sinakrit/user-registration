import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../assets:images/bg.png'
import { Auth, Storage } from 'aws-amplify';

export default function HomePage() {

    //const [user, setUser] = useState('')

    async function uploadPhoto(e) {

        let  user = await Auth.currentAuthenticatedUser();
        
         const file = e.target.files[0];
         try {
           await Storage.put(`${user.attributes.given_name}.png`, file, {
             contentType: "image/png",
           });
           console.log("Photo uploaded")
           let result = await Auth.updateUserAttributes(user, {
            'custom:picture_key': `${user.attributes.given_name}.png`
        });
        console.log(result);
        } catch (error) {
          console.log("Error uploading file: ", error);
        }
        console.log(user)
    
      }
        
      const  handleSubmit = (e) => {
             e.preventDefault()
               
        }
    return (
        <div className="text-center" style= {aaa}>
            <form onSubmit={handleSubmit}></form>
            <h2 className="main-para text-center" style = {f}>Your Account has been created!</h2>
            <h2 className="main-para text-center">You may now Login</h2>
            <div>
            <label class="custom-file-label"> Upload a picture </label><br/>
            <input type="file" className="custom-file-input" name="file" inputProps={{ accept: "image/*" }} onChange={uploadPhoto}/>
            </div>
            <div><br/>
            <button id="sub_btn" type="submit" value='Sign Up'>Upload</button>
            </div>
            <form/>
            {/* /* <Link to="/login">
                <button className="primary-button">Login</button>
    </Link> */ }
        </div>
    )
}

const aaa = {
    width: "100%",
    height: "200vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center"
}
const f= {
    paddingTop: "auto"
     
}