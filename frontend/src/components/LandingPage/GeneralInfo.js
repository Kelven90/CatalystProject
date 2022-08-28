import GeneralInfoButtons from "./GeneralInfoButtons";
import "./GeneralInfo.css";
import heroImg from "../../img/hero.jpg";

function GeneralInfo(props) {
  const info = "Get matched with a study partner, based on shared subjects or preferences. Made by and for students of The University of Melbourne.";

  return <div className="generalInfo">
           <div className="general-info-description__title">
             CONNECTING STUDENTS
           </div>
           <div className="general-info-description__title2">
             Find a study buddy
           </div>
           <div className="general-info-description__info">
             { info }
           </div>
           <div className="general-info-description__buttons">
             <GeneralInfoButtons setCurrentPage={ props.setCurrentPage } />
           </div>
           <img
                src={ heroImg }
                className="general-info-description__img"
                alt="image" />
         </div>
}

export default GeneralInfo;