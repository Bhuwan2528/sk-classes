import React, { useState } from "react";
import "./Sidebar.css";
import logo from '../../assets/logo.png'

const countries = [
  {
    name: "Canada",
    flag: "https://flagcdn.com/w40/ca.png",
  },
  {
    name: "Belgium",
    flag: "https://flagcdn.com/w40/be.png",
  },
  {
    name: "Denmark",
    flag: "https://flagcdn.com/w40/dk.png",
  },
  {
    name: "Australia",
    flag: "https://flagcdn.com/w40/au.png",
  },
  {
    name: "France",
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    name: "Germany",
    flag: "https://flagcdn.com/w40/de.png",
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Canada");

  const handleWhatsApp = () => {
    window.open("https://wa.me/919992888874", "_blank");
  };

  return (
    <aside className="sidebar">

      {/* COUNTRIES */}
      <div className="sidebar-section">
        {countries.map((item, i) => (
          <div
            key={i}
            className={`country-item ${
              active === item.name ? "active" : ""
            }`}
            onClick={() => setActive(item.name)}
          >
            <span>{item.name}</span>
            <img src={item.flag} alt={item.name} />
          </div>
        ))}

        <div className="country-item more">
          <span>More Country</span>
          <span className="plus">+</span>
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="sidebar-section downloads">
        <h3>Downloads</h3>

        <div className="download-grid">
          <div className="download-card">
            <div className="icon">PDF</div>
            <p>TOEFL Application Form</p>
            <span>3.9 KB</span>
          </div>

          <div className="download-card">
            <div className="icon">PDF</div>
            <p>Terms & Conditions</p>
            <span>3.9 KB</span>
          </div>
        </div>
      </div>

      {/* CTA BOX */}
    <div className="sidebar-cta">
    <div className="cta-inner">

        <div className="cta-logo">
            <img src={logo} alt="" />
        </div>

        <h3>Get Visa Assistance Fast</h3>

        <p>
        Talk to our experts and get assured guidance for your application.
        </p>

        <button
        onClick={() =>
            window.open("https://wa.me/919992888874", "_blank")
        }
        >
        Chat on WhatsApp →
        </button>

    </div>
    </div>

    </aside>
  );
};

export default Sidebar;