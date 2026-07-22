import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import { pricingData } from "../data/data";
import "./pricing.css";

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <h2 className="pricing-title">
          {pricingData.title} <span className="pricing-title-accent">{pricingData.titleAccent}</span> {pricingData.titleEnd}
        </h2>
        <p className="pricing-subtitle">{pricingData.subtitle}</p>
      </div>

      <div className="pricing-grid">
        {pricingData.plans.map((plan) => {
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

              <Button href="#contact" variant="filled" className="pricing-cta">
                {plan.cta}
                <ArrowRight size={16} className="pricing-cta-arrow" />
              </Button>

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