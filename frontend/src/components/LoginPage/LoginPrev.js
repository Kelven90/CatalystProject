import "./Login.css";

function LoginPrev(props) {
  return <div className="login__container">
           <div className="login__prev">
             <button
                     className="login__prev-button"
                     onClick={ props.callback }>
               <div className="login__prev-arrow-head">
               </div>
             </button>
           </div>
         </div>
}

export default LoginPrev;