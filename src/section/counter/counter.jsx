import { useEffect, useRef, useState } from "react";
import { counterStats as stats } from "../../data/data";
import "./counter.css";

const useCountUp = (end, shouldStart, duration = 1500) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [shouldStart, end, duration]);

  return count;
};

const CounterItem = ({ icon: Icon, value, suffix, label, shouldStart }) => {
  const count = useCountUp(value, shouldStart);

  return (
    <div className="counter-item">
      <div className="counter-icon">
        <Icon size={22} strokeWidth={2.2} />
      </div>
      <div className="counter-text">
        <h3 className="counter-value">
          {count}
          {suffix}
        </h3>
        <p className="counter-label">{label}</p>
      </div>
    </div>
  );
};

const Counter = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="counter-wrapper" ref={sectionRef}>
      <div className="counter-card">
        {stats.map((stat, index) => (
          <div className="counter-col" key={index}>
            <CounterItem {...stat} shouldStart={isVisible} />
            {index !== stats.length - 1 && (
              <span className="counter-divider" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;