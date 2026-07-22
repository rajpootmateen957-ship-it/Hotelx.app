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

          <p className="hero-description">
            {heroData.description}
          </p>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;