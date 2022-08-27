import "./GeneralInfoButtons.css";

function GeneralInfoButtons(props) {

  const loginHandler = (event) => {
    console.log("login button clicked");
  };

  const learnMoreHandler = (event) => {
    console.log("Learn More button clicked");
  };

  return (
    <div className="general-info-buttons">
      <button
              className="general-info-buttons__login"
              onClick={ loginHandler }>
        Log in with student account
      </button>
      <button
              className="genearl-info-buttons__learnMore"
              onClick={ learnMoreHandler }>
        Learn more
      </button>
    </div>
    );
}

export default GeneralInfoButtons;