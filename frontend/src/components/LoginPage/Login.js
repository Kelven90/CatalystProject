import React, { useState } from "react";
import "./Login.css";
import LoginPageOne from "./LoginPageOne";
import LoginPageTwo from "./LoginPageTwo";
import LoginPageThree from "./LoginPageThree";

function Login(props) {

  const pages = ["LoginPageOne", "LoginPageTwo", "LoginPageThree"];
  const [loginPage, setLoginPage] = useState('LoginPageOne');
  const [loginObj, setLoginObj] = useState({});
  const loginObjDefaultValue = {
    "username": "",
    "password": "",
    "course": "",
    "start_date": "",
    "subjects": [],
    "study_spots": [],
    "profile_description": ""
  };




  if (loginPage === "LoginPageOne") {
    console.log("loginPageOne");
    return <LoginPageOne
                         setCurrentPage={ props.setCurrentPage }
                         setLoginPage={ setLoginPage }
                         setLoginObj={ setLoginObj } />
  } else if (loginPage === "LoginPageTwo") {
    return <LoginPageTwo
                         setCurrentPage={ props.setCurrentPage }
                         setLoginPage={ setLoginPage }
                         setLoginObj={ setLoginObj } />
  } else if (loginPage === "LoginPageThree") {
    return <LoginPageThree
                           setCurrentPage={ props.setCurrentPage }
                           setLoginPage={ setLoginPage }
                           setLoginObj={ setLoginObj } />
  } else {
    return <p>
             Error Page
           </p>;
  }
}

export default Login;