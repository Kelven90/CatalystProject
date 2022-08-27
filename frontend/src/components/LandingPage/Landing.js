import "./Landing.css";
import GeneralInfo from "./GeneralInfo";
import HowItWork from "./HowItWork";
import FAQ from "./FAQ";

function Landing(props) {

  return (
    <div>
      { /* title */ }
      <div className="landing__title">
        study buddies
      </div>
      <GeneralInfo />
      <HowItWork />
      <FAQ />
    </div>
    );
}

export default Landing;