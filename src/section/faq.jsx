import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqData } from "../data/data";
import "./faq.css";

// ---- Component ---------------------------------------------------------

export default function FAQ() {
  const [openId, setOpenId] = useState(faqData.items[0].id);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <h2 className="faq-title">
          {faqData.title}
          <br />
          <span className="faq-title-accent">{faqData.titleAccent}</span>
        </h2>
        <p className="faq-subtitle">{faqData.subtitle}</p>
      </div>

      <div className="faq-list">
        {faqData.items.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`faq-item ${isOpen ? "is-open" : ""}`}
              onClick={() => toggle(faq.id)}
            >
              <div className="faq-question">
                <h3 className="faq-question-text">{faq.question}</h3>
                <span className="faq-toggle">
                  {isOpen ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                </span>
              </div>

              <div className="faq-answer-wrap">
                <div className="faq-answer-inner">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}