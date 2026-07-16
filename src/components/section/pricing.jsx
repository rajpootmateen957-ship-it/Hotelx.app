import { Zap, Sparkles, Crown, CheckCircle2, ArrowRight } from "lucide-react";
import "./pricing.css";

const plans = [
  {
    icon: Zap,
    badge: "For Small Hotels",
    price: "$49",
    period: "/month",
    name: "Essential Hotel",
    description:
      "Focus: Perfect for independent bed & breakfasts, smaller guesthouses, and boutique hotels looking to digitize their main desk.",
    cta: "Start Essentials",
    features: [
      "Core Room Reservation Matrix",
      "Fast Check-In/Out",
      "Basic Guest Profiles",
      "Housekeeping Tasks",
      "Single Location",
    ],
    popular: false,
  },
  {
    icon: Sparkles,
    badge: "Most Popular",
    price: "$99",
    period: "/month",
    name: "Enterprise Premium",
    description:
      "Engineered for high-occupancy hotels, luxury resorts, and growing multi-branch hospitality groups.",
    cta: "Choose Premium",
    features: [
      "Everything in Essential + Multi-Branch Management (Up to 3 Locations)",
      "Integrated Cafe POS",
      "Car Rental Fleet Module",
      "AI Dynamic Pricing",
      "Native Guest Self-Service Portal",
      "Priority support",
    ],
    popular: true,
  },
  {
    icon: Crown,
    badge: "For Hotel Groups",
    price: "Custom",
    period: "",
    name: "Global Chain Ecosystem",
    description:
      "Tailored for large hotel groups, franchises, and multi-branch networks requiring deep administrative oversight.",
    cta: "Contact Sales",
    features: [
      "Unlimited Hotel Branches",
      "Consolidated Corporate Dashboard",
      "Master Inventory & Shared Procurement",
      "Custom Local Bank API Integrations",
      "Full AI Automation Suite",
      "24/7 Priority SLA Support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <h2 className="pricing-title">
          Simple <span className="pricing-title-accent">Pricing</span> For
          Every Hotel
        </h2>
        <p className="pricing-subtitle">
          Choose the plan that fits your property, from a single boutique
          hotel to a global chain.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div key={plan.name} className="pricing-card">
              <div className="pricing-top">
                <div className="pricing-icon">
                  <Icon size={22} />
                </div>
                <span className="pricing-badge">{plan.badge}</span>
              </div>

              <div className="pricing-price-row">
                <span
                  className={`pricing-price${
                    plan.price === "Custom" ? " is-custom" : ""
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="pricing-period">{plan.period}</span>
                )}
              </div>

              <h3 className="pricing-plan-name">{plan.name}</h3>
              <p className="pricing-desc">{plan.description}</p>

              <a href="#contact" className="pricing-cta">
                {plan.cta}
                <ArrowRight size={16} className="pricing-cta-arrow" />
              </a>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li
                    className="pricing-feature"
                    key={feature}
                    style={{ animationDelay: `${0.05 + i * 0.07}s` }}
                  >
                    <span className="pricing-feature-check">
                      <CheckCircle2 size={16} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}