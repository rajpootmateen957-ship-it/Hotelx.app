import Button from "../components/ui/Button";
import { heroData } from "../data/data";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left side */}
        <div className="hero-content">
          <span className="hero-badge">{heroData.badge}</span>

          <h1 className="hero-heading">
            {heroData.title.line1}
            <br />
            {heroData.title.line2}
            <br />
            <span className="hero-heading-gradient">
              {heroData.title.line3}
            </span>
          </h1>

          <p className="hero-description">{heroData.description}</p>

          <div className="hero-actions">
            <Button href="#contact" variant="filled" className="hero-btn">
              {heroData.buttons.primary}
              <span className="hero-btn-arrow">&rarr;</span>
            </Button>
            <Button href="#features" variant="outline" className="hero-btn">
              {heroData.buttons.secondary}
            </Button>
          </div>
        </div>

        {/* Right side */}
        <div className="hero-visual">
          <div className="hero-image-card">
            <img
              src={heroData.image}
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
                <span>{heroData.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;