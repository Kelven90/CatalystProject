import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Landing from "./components/LandingPage/Landing";
import Login from "./components/LoginPage/Login";
import LearnMore from "./components/LearnMorePage/LearnMore";

function App() {

  const pages = ["LandingPage", "LoginPage", "LearnMorePage"];

  const [currentPage, setCurrentPage] = useState('LandingPage');

  if (currentPage === "LandingPage") {
    return <Landing setCurrentPage={ setCurrentPage } />;
  } else if (currentPage === "LoginPage") {
    return <Login setCurrentPage={ setCurrentPage } />
  } else if (currentPage === "LearnMorePage") {
    return <div>
             <h1>Learn More here...</h1>
             <button onClick={ () => setCurrentPage("LandingPage") }>
               Go Back
             </button>
           </div>
  } else {
    return <div>
             <h1>Error Page</h1>
             <button onClick={ () => setCurrentPage("LandingPage") }>
               Go Back
             </button>
           </div>
  }


}

export default App;
