import { useEffect, useRef, useState } from "react";
import { officialData, officialLogos as logos } from "../../data/data";
import "./official.css";

const Official = () => {
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

  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="official" ref={sectionRef}>
      <div
        className={`official-container ${
          isVisible ? "official-container-visible" : ""
        }`}
      >
        <h2 className="official-heading">
          {officialData.title}{" "}
          <span className="official-heading-dark">{officialData.titleAccentDark}</span>{" "}
          <span className="official-heading-gradient">
            {officialData.titleAccentGradient}
          </span>
        </h2>

        <p className="official-description">
          {officialData.description}
        </p>
      </div>

      <div
        className={`official-logos-wrapper ${
          isVisible ? "official-logos-visible" : ""
        }`}
      >
        <div className="official-logos-track">
          {marqueeLogos.map((logo, index) => (
            <div className="official-logo" key={index}>
              <img src={logo} alt={`Certification logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Official;