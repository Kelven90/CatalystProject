import "./Login.css";
import "./LoginPageTwo.css";
import LoginPrev from "./LoginPrev";
import HomePageLink from "./HomePageLink";
import React, { useState } from "react";

function LoginPageTwo(props) {

  const courses = ["Bachelor of Arts", "Bachelor of Commerce", "Bachelor of Science"];
  const continueHandler = () => {
    // TODO:
    // verify user input
    // save user input
    props.setLoginPage("LoginPageThree");
  };

  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [subjects, setSubject] = useState([]);

  const onCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value.toISOString().slice(0, 10));
  }

// const OnSubjectAdd = (event) => {
//   setData((prev) => {
//     []
//   })
// }



  return <div>
           <div className="login__title">
             study buddies
           </div>
           <div className="login__progress">
             <div className="login__progress-bar-left login__progress-bar-2-left">
             </div>
             <div className="login__progress-bar-right login__progress-bar-2-right">
             </div>
           </div>
           <LoginPrev callback={ () => {
                                   props.setLoginObj((prev) => {
                                     return {
                                       ...prev,
                                 
                                     }
                                   });
                                   props.setLoginPage("LoginPageOne")
                                 } } />
           <div className="login-page-two__course">
             <div className="login-page-two__course-title">
               What’s your course and start date?
             </div>
             <select
                     id="course"
                     className="login-page-two__course-selection">
               <option value="">
                 Select a course
               </option>
               { courses.map(item => (
                   <option
                           key={ item }
                           value={ item }
                           className="login-page-two__course-option">
                     { item }
                   </option>
                 )) }
             </select>
             <input
                    className="login-page-two__course-selection"
                    type="date"
                    min="2001-01-01"
                    max="2025-01-01" />
           </div>
           <div>
           </div>
           <div className="login-page-two__subject">
             <div className="login-page-two__subject-title">
               What subjects are you currently taking?
             </div>
             <div className="login-page-two__subject-search">
               <input
                      placeholder="Enter subject name/code"
                      className="login-page-two__subject-search-bar"
                      type="search" />
               <div className="login-page-two__subject-search-result">
                 <ul>
                   <li>
                     A History of Nature
                   </li>
                   <li>
                     A Taste of Europe: Melbourne Intersive
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="login__container">
             <button
                     className="login-button__continue"
                     onClick={ continueHandler }>
               Continue
             </button>
           </div>
           <HomePageLink callback={ () => {
                                      props.clearLoginObj();
                                      props.setCurrentPage("LandingPage");
                                    } } />
         </div>
}

export default LoginPageTwo;