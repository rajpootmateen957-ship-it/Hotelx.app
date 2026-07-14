import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
  { label: "AI Section", href: "#ai-section" },
  { label: "Testimonial", href: "#testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Hotel<span>X</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="#login" className="btn btn-outline">
            Login
          </a>
          <a href="#demo" className="btn btn-filled">
            Start a Demo
          </a>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`navbar-mobile-panel${isOpen ? " is-open" : ""}`}>
        <ul className="navbar-mobile-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-mobile-actions">
          <a href="#login" className="btn btn-outline" onClick={closeMenu}>
            Login
          </a>
          <a href="#demo" className="btn btn-filled" onClick={closeMenu}>
            Start a Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;