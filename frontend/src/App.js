import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Landing from "./components/LandingPage/Landing";
import Login from "./components/LoginPage/Login";

function App() {

  const [currentPage, setCurrentPage] = useState('landing');


  return <Landing />;

}

export default App;
