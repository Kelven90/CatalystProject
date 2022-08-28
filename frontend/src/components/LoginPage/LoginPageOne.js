import "./Login.css";
import "./LoginPageOne.css";
import HomePageLink from "./HomePageLink";
import React, { useState } from "react";

function LoginPageOne(props) {

  const welcomeMsg = "Welcome! Please login with your UoM student email and password below. ";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const onUserPasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const continueHandler = () => {
    // TODO:
    // verify user input
    // save user input
    props.setLoginObj((prev) => {
      return {
        ...prev,
        "username": username,
        "password": password
      }
    });
    props.setLoginPage("LoginPageTwo");
  }

  return (<div>
            <div className="login__title">
              study buddies
            </div>
            <div className="login__progress">
              <div className="login__progress-bar-left login__progress-bar-1-left">
              </div>
              <div className="login__progress-bar-right login__progress-bar-1-right">
              </div>
            </div>
            <div className="login-page-one__form">
              <div className="login-page-one__form-title">
                { welcomeMsg }
              </div>
              <form className="login-page-one__form">
                <input
                       id="username"
                       className="login-page-one__form-input"
                       type="text"
                       placeholder="Username/email"
                       onChange={ onUserNameChange } />
                <input
                       id="password"
                       className="login-page-one__form-input"
                       type="password"
                       placeholder="Password"
                       onChange={ onUserPasswordChange } />
                <button
                        className="login-button__continue"
                        onClick={ continueHandler }>
                  Continue
                </button>
              </form>
            </div>
            <HomePageLink callback={ () => {
                                       props.clearLoginObj();
                                       props.setCurrentPage("LandingPage");
                                     } } />
          </div>);
}

export default LoginPageOne;