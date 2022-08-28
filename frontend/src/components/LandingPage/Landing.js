import "./Landing.css";
import GeneralInfo from "./GeneralInfo";
import HowItWork from "./HowItWork";
import FAQ from "./FAQ";
import logo from "../../img/thumbnail.png";

function Landing(props) {

  return (
    <div>
      { /* title */ }
      <div className="landing__logo-container">
        <img
             className="landing__logo"
             src={ logo } />
      </div>
      <GeneralInfo setCurrentPage={ props.setCurrentPage } />
      <HowItWork />
      <FAQ />
    </div>
    );
}

export default Landing;