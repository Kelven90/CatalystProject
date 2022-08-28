import "./HowItWorkCard.css";

function HowItWorkCard(props) {
  return (
    <div>
      { /*<img/>*/ }
      <img
           className="how-it-work-card__img"
           src={ props.img_src }
           alt="image" />
      <div className="how-it-work-card__description">
        { props.description }
      </div>
    </div>
    );
}

export default HowItWorkCard;