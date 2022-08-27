import "./FAQEntry.css";

function FAQEntry(props) {

  return (
    <div className="faq-entry">
      <details className="faq-entry__details">
        <summary className="faq-entry__summary">
          { props.summary }
        </summary>
        <div className="faq-entry__answer">
          { props.details }
        </div>
      </details>
    </div>
    );
}

export default FAQEntry;