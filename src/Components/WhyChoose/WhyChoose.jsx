import React from "react";
import "./WhyChoose.css";
import {
  FaUserTie,
  FaHeadset,
  FaMoneyBillWave,
  FaUserCheck,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHeadset />,
    title: "Great Support",
    desc: "We guide you at every step with clear instructions and dedicated assistance throughout your journey.",
  },
  {
    icon: <FaUserTie />,
    title: "Personalized Guidance",
    desc: "Every student gets a tailored roadmap based on profile, goals, and budget.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Transparent Process",
    desc: "No hidden charges. Clear process, clear communication, complete trust.",
  },
  {
    icon: <FaUserCheck />,
    title: "Expert Team",
    desc: "Work with experienced professionals who understand the visa process deeply.",
  },
];

const WhyChoose = () => {
  return (
    <section className="why">
      <div className="why-container">

        {/* LEFT SIDE */}
        <div className="why-left">
          <span className="tag">SK CLASSES</span>
          <h2>
            Why Students Trust <br /> <span>SK Classes</span>
          </h2>
          <p>
            We are not just a consultancy — we are your partner in building a
            successful future abroad. From selecting the right course to visa
            approval, we stay with you at every step.
          </p>

          <button className="primary-btn">
            Get Free Consultation →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="why-right">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
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

export default WhyChoose;