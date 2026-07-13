import React from "react";
import { Zap, Sparkles, Crown, Check, ArrowRight } from "lucide-react";
import "./pricing.css";

// ---- Plan content model ----------------------------------------------------

const PLANS = [
  {
    id: "essential",
    icon: Zap,
    badge: "For small hotels",
    price: "$49",
    period: "/month",
    name: "Essential Hotel",
    desc: "Perfect for independent bed & breakfasts, smaller guesthouses, and boutique hotels looking to digitize their main desk.",
    cta: "Start Essentials",
    ctaStyle: "dark",
    popular: false,
    features: [
      "Core Room Reservation Matrix",
      "Fast Check-In/Out",
      "Basic Guest Profiles",
      "Housekeeping Tasks",
      "Single Location",
    ],
  },
  {
    id: "enterprise",
    icon: Sparkles,
    badge: "Most Popular",
    price: "$99",
    period: "/month",
    name: "Enterprise Premium",
    desc: "Engineered for high-occupancy hotels, luxury resorts, and growing multi-branch hospitality groups.",
    cta: "Choose Premium",
    ctaStyle: "gradient",
    popular: true,
    features: [
      "Everything in Essential + Multi-Branch Management (Up to 3 Locations)",
      "Integrated Cafe POS",
      "Car Rental Fleet Module",
      "AI Dynamic Pricing",
      "Native Guest Self-Service Portal",
      "Priority support",
    ],
  },
  {
    id: "global",
    icon: Crown,
    badge: "For hotel groups",
    price: "Custom",
    period: "",
    name: "Global Chain Ecosystem",
    desc: "Tailored for large hotel groups, franchises, and multi-branch networks requiring deep administrative oversight.",
    cta: "Contact Sales",
    ctaStyle: "dark",
    popular: false,
    features: [
      "Unlimited Hotel Branches",
      "Consolidated Corporate Dashboard",
      "Master Inventory & Shared Procurement",
      "Custom Local Bank API Integrations",
      "Full AI Automation Suite",
      "24/7 Priority SLA Support",
    ],
  },
];

// ---- Component ---------------------------------------------------------

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-title">
          Flexible plans for
          <br />
          <span className="pricing-title-accent">modern hospitality.</span>
        </h2>
        <p className="pricing-subtitle">
          Pick the right plan for your hotel, your team, and the guest experience you want to
          deliver.
        </p>
      </div>

      <div className="pricing-grid">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.popular ? "is-popular" : ""}`}
          >
            <div className="pricing-top">
              <div className="pricing-icon">
                <plan.icon size={22} strokeWidth={2.25} />
              </div>
              <span className="pricing-badge">{plan.badge}</span>
            </div>

            <div className="pricing-price-row">
              <span className={`pricing-price ${plan.price === "Custom" ? "is-custom" : ""}`}>
                {plan.price}
              </span>
              {plan.period && <span className="pricing-period">{plan.period}</span>}
            </div>

            <h3 className="pricing-plan-name">{plan.name}</h3>
            <p className="pricing-desc">{plan.desc}</p>

            <button
              className={`pricing-cta ${plan.ctaStyle === "gradient" ? "is-gradient" : ""}`}
            >
              {plan.cta}
              <ArrowRight size={16} className="pricing-cta-arrow" />
            </button>

            <ul className="pricing-features">
              {plan.features.map((f, i) => (
                <li key={i} className="pricing-feature">
                  <span className="pricing-feature-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}