

function GeneralInfoButtons(props) {

  const loginHandler = (event) => {

  };

  const learnMoreHandler = (event) => {

  };

  return (
    <div>
      <button onClick={ loginHandler }>
        Log in with student account
      </button>
      <button onClick={ learnMoreHandler }>
        Learn more
      </button>
    </div>
    );
}

export default GeneralInfoButtons;