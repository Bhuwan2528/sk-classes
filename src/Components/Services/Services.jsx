import React, { useEffect, useState } from "react";
import "./Services.css";
import axios from "axios";

import {
  FaUniversity,
  FaUserTie,
  FaGlobe,
  FaFileAlt,
  FaPassport,
  FaHeadset,
} from "react-icons/fa";

// ✅ ICONS FIXED
const icons = [
  <FaUniversity />,
  <FaUserTie />,
  <FaGlobe />,
  <FaFileAlt />,
  <FaPassport />,
  <FaHeadset />,
];

// ✅ FALLBACK DATA (tera old static data)
const fallbackServices = {
  sectionTitle: "What We Offer",
  sectionSubtitle:
    "End-to-end guidance for your study abroad journey — from choosing the right course to landing in your dream country.",
  items: [
    {
      title: "Finance Assistance",
      description:
        "We guide students in securing education loans with trusted banks and financial institutions, ensuring a smooth and stress-free funding process.",
    },
    {
      title: "Study Visa Counselling",
      description:
        "Our expert counselors help you choose the right course, country, and career path based on your profile.",
    },
    {
      title: "University Selection",
      description:
        "We shortlist top universities tailored to your academic background, budget, and career goals.",
    },
    {
      title: "Admission Guidance",
      description:
        "From SOP writing to application submission, we handle the complete admission process.",
    },
    {
      title: "Visa Assistance",
      description:
        "Our experienced team ensures error-free visa applications and documentation.",
    },
    {
      title: "24/7 Support",
      description:
        "We provide continuous support throughout your journey — from application to post-arrival.",
    },
  ],
};

const Services = () => {
  const [servicesData, setServicesData] = useState(null);

  // ✅ FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        if (res.data?.data?.services) {
          setServicesData(res.data.data.services);
        } else {
          setServicesData(fallbackServices);
        }
      } catch (error) {
        console.log("API failed → using fallback");
        setServicesData(fallbackServices);
      }
    };

    fetchData();
  }, []);

  // ✅ SAFE DATA
  const data = servicesData || fallbackServices;

  return (
    <section className="services">
      <div className="container">

        <h2 className="section-title">
          {data.sectionTitle}
        </h2>

        <p className="section-subtitle">
          {data.sectionSubtitle}
        </p>

        <div className="services-grid">
          {data.items.slice(0, 6).map((item, index) => (
            <div
              className={`service-card ${
                index % 2 === 0 ? "blue-card" : "orange-card"
              }`}
              key={index}
            >
              <div className="icon">{icons[index]}</div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;