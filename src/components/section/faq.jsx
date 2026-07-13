import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import "./faq.css";

// ---- FAQ content model -----------------------------------------------------

const FAQS = [
  {
    id: "billing",
    question:
      "Can cafe purchases and car rental charges be added automatically to a guest's final hotel bill?",
    answer:
      "Yes. Our unified architecture automatically routes dining tabs, spa sessions, and car rental expenditures directly to the guest's active digital hotel folio, simplifying checkout down to a single card swipe.",
  },
  {
    id: "multibranch",
    question: "How does the system sync operations and profiles across multiple hotel branches?",
    answer:
      "The platform houses a centralized database matrix. This lets hotel groups share guest histories and loyalty data across branches while keeping individual branch inventories, accounting files, and tax reporting structures completely distinct.",
  },
  {
    id: "mobile",
    question: "Can my housekeeping and maintenance crews update room statuses from their mobile phones?",
    answer:
      "Absolutely. The platform features a responsive, mobile-optimized interface for floor staff. Cleaners can mark a room as \"Cleaned\" or report a maintenance issue, which triggers a live notification at the reception desk instantly.",
  },
  {
    id: "training",
    question: "How long does it take to train front office personnel on this hospitality software?",
    answer:
      "Because the user interface was designed with modern user experience principles, new staff members can master core front-desk workflows—such as reservation adjustments, guest search, and invoice splitting—in less than two hours.",
  },
  {
    id: "inventory",
    question: "Does the food inventory module alert our kitchen manager when stock runs low?",
    answer:
      "Yes. You can define custom minimum stock alert thresholds for critical kitchen and cafe ingredients. When stock dips below these parameters, the system triggers automated reorder notifications to prevent service delays.",
  },
];

// ---- Component ---------------------------------------------------------

export default function FAQ() {
  const [openId, setOpenId] = useState(FAQS[0].id);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">
          Everything you need to
          <br />
          <span className="faq-title-accent">know about HotelX.</span>
        </h2>
        <p className="faq-subtitle">
          Find answers to the most common questions about our hotel management software.
        </p>
      </div>

      <div className="faq-list">
        {FAQS.map((faq) => {
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