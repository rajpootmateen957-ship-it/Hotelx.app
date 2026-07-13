import { useEffect, useRef, useState } from "react";
import "./official.css";

const logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmF0mUsuOdwiB6ylsa5NkwUk6VEzDlvxerLgjMKD9kw&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQtwOfnMtQaFFadcvYj1SRJbvP6By9_ATYw25KvYKSQ&s=10",
  "https://hotel-x-tau.vercel.app/static/media/owasp.ea51fb06f4cf1c8b0f4f.png",
  "https://hotel-x-tau.vercel.app/static/media/iso.6b28618eba1af6140c56.png",
];

const Official = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // duplicate logos multiple times for a seamless infinite loop
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="official" ref={sectionRef}>
      <div
        className={`official-container ${
          isVisible ? "official-container-visible" : ""
        }`}
      >
        <h2 className="official-heading">
          Enterprise-Grade <br />
          <span className="official-heading-dark">Hospitality</span>{" "}
          <span className="official-heading-gradient">Compliance</span>
          <br />
          <span className="official-heading-gradient">and Security</span>
        </h2>

        <p className="official-description">
          Our platform integrates perfectly with global travel networks, local
          tourism boards, and strict data security protocols to protect guest
          profiles and transaction integrity across every hotel branch.
        </p>
      </div>

      <div
        className={`official-logos-wrapper ${
          isVisible ? "official-logos-visible" : ""
        }`}
      >
        <div className="official-logos-fade official-logos-fade-left" />
        <div className="official-logos-fade official-logos-fade-right" />

        <div className="official-logos-track">
          {marqueeLogos.map((logo, index) => (
            <div className="official-logo" key={index}>
              <img src={logo} alt={`Certification logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Official;