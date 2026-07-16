import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./testimonial.css";

const testimonials = [
  {
    quote: "The room booking flow is simple, clear, and professional. Our front desk team now handles guest check-ins with ",
    highlight: "much less confusion",
    quoteEnd: ".",
    name: "Sarah Ahmed",
    role: "Operations Manager",
    company: "Four Seasons Hotel",
    initials: "SA",
  },
  {
    quote: "HotelX helped us reduce manual reporting work and gave management ",
    highlight: "better visibility",
    quoteEnd: " into revenue, occupancy, and room status.",
    name: "Bilal Sheikh",
    role: "Resort Manager",
    company: "Marriott",
    initials: "BS",
  },
  {
    quote:
      "Before HotelX, our front desk, cafe, and housekeeping teams were on completely separate applications. Unifying everything into one dashboard completely eliminated walk-in room assignment errors. ",
    highlight: "Daily operations became faster",
    quoteEnd: "",
    name: "Ammar Khan",
    role: "Hotel Owner",
    company: "Sirgis Hotel",
    initials: "AK",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const touchStartX = useRef(null);

  const goToNext = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection("prev");
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) goToNext();
    else if (diff < -50) goToPrev();
    touchStartX.current = null;
  };

  const current = testimonials[activeIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-wrapper">
        <button
          className="testimonial-arrow testimonial-arrow-left"
          onClick={goToPrev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          className="testimonial-card-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={activeIndex}
            className={`testimonial-card testimonial-card-${direction}`}
          >
            <p className="testimonial-quote">
              &ldquo;{current.quote}
              <span className="testimonial-highlight">
                {current.highlight}
              </span>
              {current.quoteEnd}&rdquo;
            </p>

            <div className="testimonial-author">
              <div className="testimonial-avatar">{current.initials}</div>
              <div className="testimonial-author-info">
                <h4 className="testimonial-name">{current.name}</h4>
                <p className="testimonial-role">{current.role}</p>
                <p className="testimonial-company">{current.company}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="testimonial-arrow testimonial-arrow-right"
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${
              index === activeIndex ? "testimonial-dot-active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;