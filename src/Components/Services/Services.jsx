import React from "react";
import "./Services.css";
import { FaUniversity, FaUserTie, FaGlobe, FaFileAlt, FaPassport, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaUniversity />,
    title: "Finance Assistance",
    desc: "We guide students in securing education loans with trusted banks and financial institutions, ensuring a smooth and stress-free funding process for your international education journey.",
  },
  {
    icon: <FaUserTie />,
    title: "Study Visa Counselling",
    desc: "Our expert counselors help you choose the right course, country, and career path based on your profile, ensuring you make informed and confident decisions.",
  },
  {
    icon: <FaGlobe />,
    title: "University Selection",
    desc: "We shortlist top universities tailored to your academic background, budget, and career goals to maximize your chances of admission success.",
  },
  {
    icon: <FaFileAlt />,
    title: "Admission Guidance",
    desc: "From SOP writing to application submission, we handle the complete admission process with precision and attention to detail.",
  },
  {
    icon: <FaPassport />,
    title: "Visa Assistance",
    desc: "Our experienced team ensures error-free visa applications, proper documentation, and interview preparation for high approval chances.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "We provide continuous support throughout your journey — from application to post-arrival — ensuring you never feel stuck or confused.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        
        <h2 className="section-title">
          What We Offer
        </h2>
        <p className="section-subtitle">
          End-to-end guidance for your study abroad journey — from choosing the right course to landing in your dream country.
        </p>

        <div className="services-grid">
          {services.map((item, index) => (
            <div
              className={`service-card ${
                index % 2 === 0 ? "blue-card" : "orange-card"
              }`}
              key={index}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;