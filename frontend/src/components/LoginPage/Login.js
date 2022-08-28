import React, { useState, useEffect } from "react";
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

  const clearLoginObj = () => {
    setLoginObj(loginObjDefaultValue);
  };

  useEffect(() => {
    const fetchLogin = async() => {
      console.log("post");
      await fetch("/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(loginObjDefaultValue),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    fetchLogin();
  }, []);


  if (loginPage === "LoginPageOne") {
    console.log("loginPageOne");
    return <LoginPageOne
                         setCurrentPage={ props.setCurrentPage }
                         setLoginPage={ setLoginPage }
                         setLoginObj={ setLoginObj }
                         clearLoginObj={ clearLoginObj } />
  } else if (loginPage === "LoginPageTwo") {
    return <LoginPageTwo
                         setCurrentPage={ props.setCurrentPage }
                         setLoginPage={ setLoginPage }
                         setLoginObj={ setLoginObj }
                         clearLoginObj={ clearLoginObj } />
  } else if (loginPage === "LoginPageThree") {
    return <LoginPageThree
                           setCurrentPage={ props.setCurrentPage }
                           setLoginPage={ setLoginPage }
                           setLoginObj={ setLoginObj }
                           clearLoginObj={ clearLoginObj } />
  } else {
    return <p>
             Error Page
           </p>;
  }
}

export default Login;