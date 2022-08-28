import "./Login.css";
import "./LoginPageThree.css";
import LoginPrev from "./LoginPrev";

function LoginPageThree(props) {
  const finishHandler = () => {
    // TODO:
    // verify user input
    // save user input

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
           <div className="login__container">
             <button
                     className="login-button__continue"
                     onClick={ finishHandler }>
               Finish
             </button>
           </div>
           <div className="login__container">
             <button
                     className="login__homepage"
                     onClick={ () => props.setCurrentPage("LandingPage") }>
               Home Page
             </button>
           </div>
         </div>
}

export default LoginPageThree;