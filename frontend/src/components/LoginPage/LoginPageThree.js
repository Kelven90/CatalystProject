import "./Login.css";
import "./LoginPageThree.css";
import LoginPrev from "./LoginPrev";
import HomePageLink from "./HomePageLink";
import CheckboxItem from "./CheckboxItem";

function LoginPageThree(props) {

  const librarySelections = ["Baillieu Library", "Eastern Resource Centre", "Law Library"];

  const searchSpotsHandler = (event) => {
    console.log("searching " + event.target.value + "...");
  }

  const finishHandler = () => {
    // TODO:
    // verify user input
    // save user input
    console.log("sending form to backend...");
  }
  return <div>
           <div className="login__title">
             study buddies
           </div>
           <div className="login__progress">
             <div className="login__progress-bar-left login__progress-bar-3-left">
             </div>
             <div className="login__progress-bar-right login__progress-bar-3-right">
             </div>
           </div>
           <LoginPrev callback={ () => props.setLoginPage("LoginPageTwo") } />
           <div className="login-page-three">
             <div className="login-page-three__title">
               Almost done! Time to enter your preferences and description.
             </div>
             <div className="login-page-three__hint">
               Completion of this step is optional and you can always update your preferences later.
             </div>
             <div className="login-page-three__form">
               <div className="login-page-three__spots">
                 <div className="login-page-three__form-title">
                   Select your preferred study spots.
                 </div>
                 <input
                        type="search"
                        placeholder="Select libraries"
                        className="login-page-three__spots-search"
                        onChange={ searchSpotsHandler }>
                 </input>
                 <div className="login-page-three__spots-select">
                   <ul>
                     { librarySelections.map((item) => (<CheckboxItem
                                                                      key={ item }
                                                                      id={ item }
                                                                      name={ item }
                                                                      label={ item } />)) }
                   </ul>
                 </div>
               </div>
               <div className="login-page-three__description">
                 <div className="login-page-three__form-title">
                   Short description for your profile.
                 </div>
                 <textarea
                           className="login-page-three__description-body"
                           row="5"></textarea>
               </div>
             </div>
           </div>
           <div className="login__container">
             <button
                     className="login-button__continue"
                     onClick={ finishHandler }>
               Finish
             </button>
           </div>
           <HomePageLink setCurrentPage={ props.setCurrentPage } />
         </div>
}

export default LoginPageThree;