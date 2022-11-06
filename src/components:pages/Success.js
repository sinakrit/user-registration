import React from 'react'
import BackgroundImage from '../assets:images/bg.png'
import { useHistory } from "react-router"

export default function Success() {

  
    const history = useHistory();
        
      const  handleSubmit = (e) => {
             e.preventDefault()
             history.push('/login')
        }
    return (
        <div className="text-center" style= {aaa}>
                <h2 className="main-para text-center">Picture is uploaded Succesfully!</h2>
                
                <form onSubmit={handleSubmit}>
                <div style={{ width: "120%"}}>
                    <button id="sub_btn" type="submit" value='Sign Up'>Login</button>
                </div>
                </form>
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
    textAlign: "center",
}
