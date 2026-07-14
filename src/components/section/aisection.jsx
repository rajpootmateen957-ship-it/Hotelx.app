import { useEffect, useRef, useState } from "react";
import {
  FileText,
  TrendingUp,
  Users,
  CalendarCheck,
} from "lucide-react";
import "./aisection.css";

const cards = [
  {
    icon: FileText,
    title: "Instant RevPAR Optimization",
    description:
      "Maximize room occupancy and RevPAR instantly. Our intelligent engine adjusts room rates in real time based on local market demand, seasonal shifts, and competitor data across every hotel location.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Stock Forecasting:",
    description:
      "Let AI analyze active room occupancy levels and past dining habits to forecast exactly how much stock your cafe and restaurant kitchens need to order, cutting food waste up to 20%.",
  },
  {
    icon: Users,
    title: "AI Insights to lower climate control and lighting costs.",
    description:
      "The platform interfaces with smart utility grids. The moment a guest checks out via their mobile portal, the system automatically triggers Eco-Mode to lower climate control and lighting costs.",
  },
  {
    icon: CalendarCheck,
    title: "AI Booking Analysis",
    description:
      "Handle up to 75% of routine guest requests — like room service orders, Wi-Fi passwords, and late checkout inquiries — instantly in multiple languages without bothering your front desk.",
  },
];

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
    <section className="ai-section">
      <div className="ai-section-header">
        <h2 className="ai-section-heading">
          <span className="ai-heading-dark">
            A Smart Hospitality: AI-Driven
          </span>
          <br />
          <span className="ai-heading-gradient">Hotel Operations</span>
        </h2>
        <p className="ai-section-description">
          HotelX AI helps managers understand bookings, guests, revenue,
          commissions, and daily operations through simple commands.
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