import HowItWorkCard from "./HowItWorkCard";
import "./HowItWork.css";
import img1 from "../../img/how_it_works_1.png";
import img2 from "../../img/how_it_works_2.png";
import img3 from "../../img/how_it_works_3.png";

function HowItWork() {

  const descriptions = [
    "Log in using your student email and create a profile to, enter your preferences and subjects you are taking.",
    "Our system will match you with other UoM students who share the same subjects and/or preferences.",
    "Message your matches and set a date for your study session. Happy studying!"
  ];

  return (
    <div className="how-it-work">
      <div className="how-it-work__title">
        How it works
      </div>
      <div className="how-it-work__cards">
        <HowItWorkCard
                       img_src={ img1 }
                       description={ descriptions[0] } />
        <HowItWorkCard
                       img_src={ img2 }
                       description={ descriptions[1] } />
        <HowItWorkCard
                       img_src={ img3 }
                       description={ descriptions[2] } />
      </div>
    </div>
    );
}

export default HowItWork;