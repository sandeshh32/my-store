
import { useState } from "react";

function Help() {
  const [openQuestion, setOpenQuestion] = useState(null);

  function handleQuestion(index) {
    setOpenQuestion(
      openQuestion === index ? null : index
    );
  }

  const questions = [
    {
      question: "How can I find a product?",
      answer:
        "You can use the search box in the header to search for a product."
    },
    {
      question: "How can I browse products by category?",
      answer:
        "Use the category dropdown on the Products page to select a specific category."
    },
    {
      question: "How can I see product details?",
      answer:
        "Click on any product card to open its product details page."
    },
    {
      question: "How can I contact you?",
      answer:
        "Go to the Contact page in the footer and send us your query."
    }
  ];

  return (
    <main className="main-content">
      <h1>Help Center</h1>

      <div className="faq-container">
        {questions.map((item, index) => (
          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => handleQuestion(index)}
            >
              {item.question}
            </button>

            {openQuestion === index && (
              <p className="faq-answer">
                {item.answer}
              </p>
            )}

          </div>
        ))}
      </div>
    </main>
  );
}

export default Help;

