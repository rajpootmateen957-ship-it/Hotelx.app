import React from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import "./footer.css";

/* lucide-react no longer ships brand/logo icons (Facebook, Instagram,
   LinkedIn, YouTube, X), so these social icons are plain inline SVGs. */
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4L15.82 12z" />
  </svg>
);

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
];

const productLinks = [
  { label: "Features", href: "#" },
  { label: "AI Assistant", href: "#" },
  { label: "Dashboard", href: "#" },
  { label: "Comparison", href: "#" },
  { label: "Pricing", href: "#" },
];

const companyLinks = [
  { label: "Clients", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const bottomLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
];

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
              Hotel<span className="footer-logo-accent">X</span>
            </div>
            <p className="footer-tagline">
              A premium hotel management platform built to simplify bookings,
              billing, housekeeping, reporting, AI automation, and guest
              care.
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
            <span className="footer-badge">Pakistan</span>
            <h4 className="footer-col-title footer-office-title">
              Pakistan Office
            </h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>Johar Town, Lahore, Pakistan</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <span>+92 300 1234567</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <span>pakistan@hotelx.com</span>
              </li>
            </ul>
          </div>

          {/* Saudi office column */}
          <div className="footer-col">
            <span className="footer-badge">Saudi Arabia</span>
            <h4 className="footer-col-title footer-office-title">
              Saudi Office
            </h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>Riyadh, Saudi Arabia</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <span>+966 50 1234567</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <span>saudi@hotelx.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} HotelX. All rights reserved.
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