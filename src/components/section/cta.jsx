import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import "./cta.css";

const features = ["Free demo", "Quick setup", "Live support"];

const Cta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" ref={sectionRef}>
      <div
        className={`cta-card ${isVisible ? "cta-card-visible" : ""}`}
      >
        <div className="cta-content">
          <span className="cta-badge">HOTELX MANAGEMENT PLATFORM</span>

          <h2 className="cta-heading">
            <span className="cta-heading-dark">Ready to replace</span>{" "}
            <span className="cta-heading-gradient">
              your fragmented hotel tools with a high-performance system?
            </span>
          </h2>

          <p className="cta-description">
            Manage reservations, rooms, guests, billing, housekeeping, and
            reports from one elegant hotel management system.
          </p>

          <div className="cta-features">
            {features.map((feature, index) => (
              <span className="cta-feature" key={index}>
                <CheckCircle2 size={15} className="cta-feature-icon" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="cta-actions">
          <button className="cta-btn cta-btn-filled">
            Schedule demo <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;