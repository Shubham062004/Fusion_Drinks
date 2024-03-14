import React from "react"
import { Link } from "react-router-dom"
import "../App.css"
 
function Login() {
    return (
      <>
        {/* <div className="LoginContainer">
            <h1>Login Page</h1> 
            <div className="container">
                <div className="heading">
                    <h2>Get Started</h2>
                </div>
                <div className="hedtext">
                    <h6>Already have an Account? Log In</h6>
                </div>
                <div className="inpname">
                    <input type="text" />
                </div>
            </div>
        </div> */}

<div className="sign-up-page">
      <div className="sign-up-form">
        <h2>Get Started</h2>
        <p>Already have an Account? Log In</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="sign-up-btn">Sign Up</button>
        <p>or Sign Up with</p>
        <div className="auth-providers">
          <button className="google-btn">
            <i className="fa fa-google"></i>
          </button>
          <button className="apple-btn">
            <i className="fa fa-apple"></i>
          </button>
        </div>
      </div>
      <div className="background-image">
        <img src="cocktail-image.jpg" alt="Cocktail" />
      </div>
    </div>
      </>
    )
  }
  
  export default Login