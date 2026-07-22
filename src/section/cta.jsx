import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "../components/ui/Button";
import { ctaSectionData, ctaFeatures as features } from "../data/data";
import "./cta.css";

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
          <span className="cta-badge">{ctaSectionData.badge}</span>

          <h2 className="cta-heading">
            <span className="cta-heading-dark">{ctaSectionData.titleDark}</span>{" "}
            <span className="cta-heading-gradient">
              {ctaSectionData.titleGradient}
            </span>
          </h2>

          <p className="cta-description">
            {ctaSectionData.description}
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
          <Button href="#contact" variant="filled" className="cta-btn">
            {ctaSectionData.buttonText} <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;