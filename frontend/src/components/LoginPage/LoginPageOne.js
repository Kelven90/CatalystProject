import "./Login.css";
import "./LoginPageOne.css";
import HomePageLink from "./HomePageLink";

function LoginPageOne(props) {

  const welcomeMsg = "Welcome! Please login with your UoM student email and password below. ";

  const onUserNameChange = (event) => {
    // props.setLoginObj()
  };

  const continueHandler = () => {
    // TODO:
    // verify user input
    // save user input
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
                       placeholder="Username/email" />
                <input
                       id="password"
                       className="login-page-one__form-input"
                       type="password"
                       placeholder="Password" />
                <button
                        className="login-button__continue"
                        onClick={ continueHandler }>
                  Continue
                </button>
              </form>
            </div>
            <HomePageLink setCurrentPage={ props.setCurrentPage } />
          </div>);
}

export default LoginPageOne;