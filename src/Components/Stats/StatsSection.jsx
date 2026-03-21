import React, { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaPlane,
  FaChartLine,
} from "react-icons/fa";
import "./StatsSection.css";

/* Counter Hook */
const useCounter = (end, duration = 2000, start) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const value = Math.min((progress / duration) * end, end);
      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

const StatsSection = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("stats-section");
      if (!el) return;

      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setStart(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      end: 1500,
      suffix: "+",
      label: "Happy Clients",
      icon: <FaUserGraduate />,
    },
    {
      end: 7,
      suffix: "+",
      label: "Years Of Experience",
      icon: <FaCalendarAlt />,
    },
    {
      end: 1100,
      suffix: "+",
      label: "Study Visa",
      icon: <FaPlane />,
    },
    {
      end: 98.76,
      suffix: "%",
      label: "Success Rate",
      icon: <FaChartLine />,
      decimals: 2,
    },
  ];

  return (
    <section className="stats-section" id="stats-section">
      <div className="stats-overlay"></div>

      <div className="container stats-wrapper">
        {stats.map((item, i) => {
          const value = useCounter(item.end, 2000, start);

          return (
            <div className="stat-card" key={i}>
              <div className="stat-icon">{item.icon}</div>

              <h2 className="stat-number">
                {item.decimals
                  ? value.toFixed(item.decimals)
                  : Math.floor(value)}
                {item.suffix}
              </h2>

              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;