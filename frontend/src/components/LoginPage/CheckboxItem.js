import "./CheckboxItem.css";

function CheckboxItem(props) {

  return <div className="checkbox-item__container">
           <input
                  className="checkbox-item__box"
                  type="checkbox"
                  id={ props.id }
                  name={ props.name } />
           <label
                  className="checkbox-item__label"
                  for={ props.id }>
             { props.label }
           </label>
         </div>
}

export default CheckboxItem;