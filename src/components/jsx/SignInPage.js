import React from "react";
import "../css/SignInPage.css"
import {  useNavigate } from "react-router-dom";
import modelImage from '../css/shanky1_h&m.png';


const SignInPage = () => {
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate("/")

    }
  return (
    <div className="signinpage-container">
      <div className="signinpage-left-image">
        <img
            className="sign_in_image"
          src={modelImage}
          alt="model_image"
        />
      </div>

      <div className="signinpage-right-rect">
        <div className="signinbox-container">
          <form className="signin-form">
            <h1 className="signin-text">Welcome </h1>
            <div className="signin-email signinbox">
              <label htmlFor="e-mail">E-mail</label>
              <input
                className="input"
                type="email"
                id="e-mail"
                placeholder="Email address"
              />
            </div>
            <div className="signin-pass signinbox">
              <label htmlFor="pass">Password</label>
              <input
                className="input"
                type="password"
                id="pass"
                placeholder="Password"
              />
            </div>

            <div className="signinbox form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>

            <button onClick={goToHome} className="signinbox signin-submit" type="submit">
              Sign-in
            </button>
          </form>
          <p style={{ textAlign: "center" }}>
            Create an account? <a href="./siginup.html">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
