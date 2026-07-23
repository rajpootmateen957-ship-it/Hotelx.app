import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { featureSections as SECTIONS } from "../../data/data";
import "./feature.css";

// ---- Main component ----------------------------------------------------

export default function UnifiedDashboardSection() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const active = SECTIONS.find((s) => s.id === activeId);

  return (
    <div className="uds-page" id="features">
      <div className="uds-card">
        {/* Sidebar */}
        <nav className="uds-nav">
          <ul className="uds-nav-list">
            {SECTIONS.map((s) => {
              const isActive = s.id === activeId;
              return (
                <li key={s.id} className="uds-nav-item">
                  <button
                    onClick={() => setActiveId(s.id)}
                    className={`uds-nav-button ${isActive ? "is-active" : ""}`}
                  >
                    <span className="uds-nav-icon-wrap">
                      <s.icon size={15} strokeWidth={2.25} />
                    </span>
                    <span className="uds-nav-label">{s.label}</span>
                    <ArrowRight size={14} className="uds-nav-arrow" />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Content */}
        <div className="uds-content">
          {/* Preview panel */}
          <div className="uds-preview-image-wrap">
            {active.image && (
              <img
                src={active.image}
                alt={active.label}
                className="uds-feature-image"
              />
            )}
          </div>

          {/* Copy */}
          <div>
            <h2 className="uds-heading">{active.heading}</h2>
            <div className="uds-divider" />
            <p className="uds-copy">{active.copy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}