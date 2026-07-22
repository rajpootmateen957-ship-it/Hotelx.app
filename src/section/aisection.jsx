import { useEffect, useRef, useState } from "react";
import { aiSectionData, aiCards as cards } from "../data/data";
import "./aisection.css";

const AiCard = ({ icon: Icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`ai-card ${isVisible ? "ai-card-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={cardRef}
    >
      <div className="ai-card-icon">
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <span className="ai-card-tag">AI AGENT</span>
      <h3 className="ai-card-title">{title}</h3>
      <p className="ai-card-description">{description}</p>
    </div>
  );
};

const AiSection = () => {
  return (
    <section className="ai-section" id="ai-section">
      <div className="ai-section-header">
        <h2 className="ai-section-heading">
          <span className="ai-heading-dark">
            {aiSectionData.titleDark}
          </span>
          <br />
          <span className="ai-heading-gradient">{aiSectionData.titleGradient}</span>
        </h2>
        <p className="ai-section-description">
          {aiSectionData.description}
        </p>
      </div>

      <div className="ai-cards-grid">
        {cards.map((card, index) => (
          <AiCard key={index} {...card} delay={index * 120} />
        ))}
      </div>
    </section>
  );
};

export default AiSection;