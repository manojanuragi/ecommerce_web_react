import React from "react";
import "./css/login.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing I agree to the terms of use & privacy polycy </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
