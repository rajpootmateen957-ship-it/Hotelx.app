import React from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import {
  footerData,
  socialLinks,
  productLinks,
  companyLinks,
  bottomLinks,
} from "../data/data";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-glow site-footer-glow-a" />
      <div className="site-footer-glow site-footer-glow-b" />

      <div className="site-footer-inner">
        <div className="site-footer-grid">
          {/* Brand column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo">
              {footerData.logo}<span className="footer-logo-accent">{footerData.logoAccent}</span>
            </div>
            <p className="footer-tagline">
              {footerData.tagline}
            </p>
            <div className="footer-social">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer-social-btn"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-link-list">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-link-list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pakistan office column */}
          <div className="footer-col">
            <span className="footer-badge">{footerData.pakistanOffice.badge}</span>
            <h4 className="footer-col-title footer-office-title">
              {footerData.pakistanOffice.title}
            </h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>{footerData.pakistanOffice.address}</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <span>{footerData.pakistanOffice.phone}</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <span>{footerData.pakistanOffice.email}</span>
              </li>
            </ul>
          </div>

          {/* Saudi office column */}
          <div className="footer-col">
            <span className="footer-badge">{footerData.saudiOffice.badge}</span>
            <h4 className="footer-col-title footer-office-title">
              {footerData.saudiOffice.title}
            </h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>{footerData.saudiOffice.address}</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <span>{footerData.saudiOffice.phone}</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <span>{footerData.saudiOffice.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} {footerData.copyright}
          </p>

          <ul className="footer-bottom-links">
            {bottomLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-bottom-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}