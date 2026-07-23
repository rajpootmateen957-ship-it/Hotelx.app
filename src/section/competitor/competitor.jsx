import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { competitorColumns as columns, competitorRows as rows, competitorHeaderData } from "../../data/data";
import "./competitor.css";

const Competitor = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="competitor-section" ref={sectionRef}>
      <div className="competitor-header">
        <h2 className="competitor-heading">
          <span className="competitor-heading-gradient">{competitorHeaderData.titleGradient}</span>{" "}
          <span className="competitor-heading-dark"> {competitorHeaderData.titleDark}</span>
        </h2>
        <p className="competitor-description">
          {competitorHeaderData.description}
        </p>
      </div>

      <div
        className={`competitor-table-wrapper ${
          isVisible ? "competitor-table-visible" : ""
        }`}
      >
        <div className="competitor-table">
          <div className="competitor-row competitor-row-head">
            <div className="competitor-cell competitor-cell-label">
              Capability
            </div>
            {columns.map((col, index) => (
              <div
                className={`competitor-cell ${
                  index === 0 ? "competitor-cell-highlight" : ""
                }`}
                key={col}
              >
                {index === 0 && (
                  <span className="competitor-best-tag">BEST CHOICE</span>
                )}
                <span className="competitor-col-name">{col}</span>
              </div>
            ))}
          </div>

          {rows.map((row, rowIndex) => (
            <div
              className="competitor-row"
              key={row.capability}
              style={{ transitionDelay: `${rowIndex * 90}ms` }}
            >
              <div className="competitor-cell competitor-cell-label">
                {row.capability}
              </div>
              {row.values.map((val, colIndex) => (
                <div
                  className={`competitor-cell competitor-cell-value ${
                    colIndex === 0 ? "competitor-cell-highlight" : ""
                  }`}
                  key={colIndex}
                >
                  {val ? (
                    <span className="competitor-icon competitor-icon-yes">
                      <Check size={14} strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="competitor-icon competitor-icon-no">
                      <X size={14} strokeWidth={3} />
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitor;