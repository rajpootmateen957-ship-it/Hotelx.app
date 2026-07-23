import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, navbarData } from "../../data/data";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          {navbarData.logo}<span>{navbarData.logoAccent}</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="#contact" className="btn btn-outline" onClick={closeMenu}>
            {navbarData.loginText}
          </a>
          <a href="#contact" className="btn btn-filled" onClick={closeMenu}>
            {navbarData.demoText}
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
          <a href="#contact" className="btn btn-outline" onClick={closeMenu}>
            {navbarData.loginText}
          </a>
          <a href="#contact" className="btn btn-filled" onClick={closeMenu}>
            {navbarData.demoText}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;