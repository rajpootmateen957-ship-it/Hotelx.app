import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left side */}
        <div className="hero-content">
          <span className="hero-badge">Built For Modern Hotels</span>

          <h1 className="hero-heading">
            The Enterprise Hotel OS: Connect Reception,{" "}
            <span className="hero-heading-gradient">
              Inventory, and Multi-Branch Hospitality Networks
            </span>
          </h1>

          <p className="hero-description">
            Stop losing margins to disconnected hotel software. A single,
            unified cloud platform built to seamlessly synchronize automated
            check-ins, staff workflows, food inventory, cafe POS, and car
            rentals across all your hotel branches. From a solo boutique
            property to a nationwide chain, every front-desk action, every
            stock update, and every guest interaction stays perfectly in
            sync — in real time, on one dashboard.
          </p>

          <div className="hero-actions">
            <a href="#demo" className="btn btn-filled hero-btn">
              Schedule a Live Hotel Demo
              <span className="hero-btn-arrow">&rarr;</span>
            </a>
            <a href="#architecture" className="btn btn-outline hero-btn">
              View System 
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="hero-visual">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1774192621035-20d11389f781?auto=format&fit=crop&w=1200&q=80"
              alt="Modern hotel lobby and reception"
              className="hero-image"
            />

            <div className="hero-panel">
              <span className="hero-panel-badge">Improve Now!</span>

              <div className="hero-panel-contact">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16v16H4z" opacity="0" />
                  <path d="M22 6l-10 7L2 6" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <span>suadi@hotelx.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;