import React, { useState } from "react";
import "../Css/help.css";

function Help() {

  const [active, setActive] = useState(null);

  const questions = [
    {
      id: 1,
      question: "How do I create an account?",
      answer:
        "To create an account, click on the Sign Up button on the top right corner of the homepage. You will need to provide a valid email address and a password. You can also sign up using your Google or Facebook account.",
    },
    {
      id: 2,
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the Forgot Password link on the login page. You will need to enter your email address and we will send you a link to create a new password.",
    },
    {
      id: 3,
      question: "How do I contact customer support?",
      answer:
        "To contact customer support, you can use the chat widget on the bottom right corner of the website. You can also email us at support@bing.com or call us at 1-800-BING.",
    },
  ];

  const toggleActive = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="help-section">
      <h1 className="help-title">Frequently Asked Questions</h1>
      <div className="help-questions">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`help-question ${active === q.id ? "active" : ""}`}
            onClick={() => toggleActive(q.id)}
          >
            <div className="help-question-header">
              <h3 className="help-question-text">{q.question}</h3>
              <span className="help-question-icon">
                {active === q.id ? "-" : "+"}
              </span>
            </div>
            <div className="help-question-body">
              <p className="help-question-answer">{q.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
