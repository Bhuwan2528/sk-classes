import React from "react";
import "./Banner.css";
import { FaChevronRight } from "react-icons/fa";

const Banner = ({ title, bgImage }) => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(https://c1.wallpaperflare.com/preview/197/512/37/pass-passport-id-entry.jpg)` }}
    >
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h1>{title}</h1>

        <div className="breadcrumb">
          <span>Home</span>
          <FaChevronRight className="icon" />
          <span className="active">{title.toLowerCase()}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;