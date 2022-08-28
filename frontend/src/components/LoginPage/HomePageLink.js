import "./Login.css";

function HomePageLink(props) {
  return <div className="login__container">
           <button
                   className="login__homepage"
                   onClick={ () => props.setCurrentPage("LandingPage") }>
             Home Page
           </button>
         </div>
}

export default HomePageLink;