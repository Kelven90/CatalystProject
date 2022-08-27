import "./FAQ.css";
import FAQEntry from "./FAQEntry";

function FAQ(props) {

  const faqs = [
    ["How can I contact my matches?", "Answers to How can I contact my matches"],
    ["What factors decide whether someone will be a match?", "Answers to What factors decide whether someone will be a match?"],
    ["Can I be matched with someone studying another course?", "Answers to Can I be matched with someone studying another course?"],
    ["Can I set my preferred study spots, times of the day, etc?", "Answers to Can I set my preferred study spots, times of the day, etc?"],
    ["Is it only available for University of Melbourne current students?", "Answers to Is it only available for University of Melbourne current students?"]
  ];

  return <div className="faq">
           <div className="faq__title">
             Frequently asked questions
           </div>
           <div faq__faqs>
             { faqs.map((item, i) => (<FAQEntry
                                                key={ i }
                                                summary={ item[0] }
                                                details={ item[1] } />)
               ) }
           </div>
         </div>
}

export default FAQ;