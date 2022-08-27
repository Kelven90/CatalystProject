

function GeneralInfo(props) {
  const info = "Get matched with a study partner, based on shared subjects or preferences. Made by and for students of The University of Melbourne.";
  return <div className="generalInfo">
           <div>
             <div>
               CONNECTING STUDENTS
             </div>
             <div>
               Find a study buddy
             </div>
             <div>
               { info }
             </div>
           </div>
         </div>
}

export default GeneralInfo;