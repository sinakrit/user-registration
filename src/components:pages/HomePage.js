import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../assets:images/bg.png'

export default function HomePage() {
    return (
        <div className="text-center" style= {aaa}>
            <h2 className="main-para text-center" style = {f}>Your Account has been created!</h2>
            <h2 className="main-para text-center">You may now Login</h2>
            <Link to="/login">
                <button className="primary-button">Login</button>
            </Link>
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
    paddingTop: "50px"
     
}