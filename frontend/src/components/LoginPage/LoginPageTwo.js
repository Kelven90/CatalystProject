import "./Login.css";
import "./LoginPageTwo.css";
import LoginPrev from "./LoginPrev";
import HomePageLink from "./HomePageLink";

function LoginPageTwo(props) {
  const courses = ["Bachelor of Arts", "Bachelor of Commerce", "Bachelor of Science"];
  const continueHandler = () => {
    // TODO:
    // verify user input
    // save user input
    props.setLoginPage("LoginPageThree");
  }
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
           <LoginPrev callback={ () => props.setLoginPage("LoginPageOne") } />
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
           <HomePageLink setCurrentPage={ props.setCurrentPage } />
         </div>
}

export default LoginPageTwo;