import "./Login.css";

function HomePageLink(props) {
  return <div className="login__container">
           <button
                   className="login__homepage"
                   onClick={ props.callback }>
             Home Page
           </button>
         </div>
}

export default HomePageLink;