import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { featureSections as SECTIONS } from "../../data/data";
import "./feature.css";

// ---- Preview mock renderers -------------------------------------------------

function DashboardMock({ section }) {
  return (
    <div className="uds-stat-grid">
      {section.stats.map((s, i) => (
        <div key={i} className="uds-stat-card">
          <div className={`uds-stat-icon ${s.tone}`}>
            <s.icon size={16} strokeWidth={2.25} />
          </div>
          <div className="uds-stat-value">{s.value}</div>
          <div className="uds-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function ListMock({ rows }) {
  return (
    <div className="uds-mock-list">
      {rows.map((r, i) => (
        <div key={i} className="uds-mock-row">
          <span className="uds-row-name">{r.name}</span>
          <span className={`uds-row-status ${r.tone}`}>{r.status}</span>
        </div>
      ))}
    </div>
  );
}

function TogglesMock({ rows }) {
  return (
    <div className="uds-mock-list">
      {rows.map((r, i) => (
        <div key={i} className="uds-mock-row">
          <span className="uds-row-name">{r.name}</span>
          <div className={`uds-toggle ${r.on ? "is-on" : ""}`}>
            <div className="uds-toggle-knob" />
          </div>
        </div>
      ))}
    </div>
  );
}

function RolesMock({ rows }) {
  return (
    <div className="uds-mock-list">
      {rows.map((r, i) => (
        <div key={i} className="uds-mock-row">
          <div className="uds-role-icon">
            <r.icon size={17} />
          </div>
          <div style={{ flex: 1 }}>
            <div className="uds-role-name">{r.name}</div>
            <div className="uds-role-perms">{r.perms}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BarsMock({ rows }) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <div className="uds-bars">
      {rows.map((r, i) => (
        <div key={i} className="uds-bar-col">
          <div className="uds-bar-track">
            <div className="uds-bar-fill" style={{ height: `${(r.value / max) * 100}%` }} />
          </div>
          <span className="uds-bar-label">{r.name}</span>
        </div>
      ))}
    </div>
  );
}

function PreviewMock({ section }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {section.image && (
        <img
          src={section.image}
          alt={section.label}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      )}
    </div>
  );
}

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
          <div className="uds-preview">
            <h3 className="uds-preview-title">{active.label.toUpperCase()}</h3>
            <div className="uds-preview-inner">
              <PreviewMock section={active} />
            </div>
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