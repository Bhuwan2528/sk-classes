import React, { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaPlane,
  FaChartLine,
} from "react-icons/fa";
import "./StatsSection.css";
import axios from "axios";

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

  // ✅ DATA STATE (fallback included)
  const [stats, setStats] = useState([
    {
      end: 1500,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      end: 7,
      suffix: "+",
      label: "Years Of Experience",
    },
    {
      end: 1100,
      suffix: "+",
      label: "Study Visa",
    },
    {
      end: 98,
      suffix: "%",
      label: "Success Rate",
    },
  ]);

  // ✅ ICON MAPPING (fixed)
  const icons = [
    <FaUserGraduate />,
    <FaCalendarAlt />,
    <FaPlane />,
    <FaChartLine />,
  ];

  // ✅ FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://sk-classes-backend.onrender.com/api/home");

        if (res.data?.data?.statsSection?.items) {
          const incoming = res.data.data.statsSection.items;

          setStats([
            incoming?.[0] || stats[0],
            incoming?.[1] || stats[1],
            incoming?.[2] || stats[2],
            incoming?.[3] || stats[3],
          ]);
        }
      } catch {
        console.log("Using fallback stats");
      }
    };

    fetchData();
  }, []);

  // ✅ SCROLL START
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

  return (
    <section className="stats-section" id="stats-section">
      <div className="stats-overlay"></div>

      <div className="container stats-wrapper">
        {stats.map((item, i) => {
          const value = useCounter(Number(item.end) || 0, 2000, start);

          return (
            <div className="stat-card" key={i}>
              
              <div className="stat-icon">{icons[i]}</div>

              <h2 className="stat-number">
                {Math.floor(value)}
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