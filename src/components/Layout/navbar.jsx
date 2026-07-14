import "./navbar.css";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <a href="#home" className="navbar-logo">
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
      </nav>
    </header>
  );
};

export default Navbar;