import React from "react";
import { FaBullseye, FaEye, FaRocket } from "react-icons/fa";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container about-wrapper">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img
            src="https://www.skclasses.com/wp-content/uploads/2022/08/about_4_1.jpg"
            alt="About SK Classes"
          />
          <div className="image-overlay"></div>

          {/* Floating Badge */}
          <div className="about-badge">
            <span>10+ Years</span>
            <p>Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h5 className="section-tag">About Us</h5>
          <h2>
            Your Trusted Partner for <span>Study Abroad Success</span>
          </h2>

          <p>
            At SK CLASSES provides information regarding higher education in various countries such as Canada, Australia and has a Professional command over the education system worldwide. We are well known in the immigration circle for our specialized services & are praised by our clients for enriching their experience in Visa facilitation
          </p>

          <p>
            We have precision knowledge in the fields of Immigration, Visa processing and other related services. To ensure prompt and hassle free services we have a team of handpicked executives who go through rigorous & in-depth training on country specific immigration and visa processing norms & rules to arm them with the requisite knowledge.
          </p>

          <button className="about primary-btn">
            Explore Services →
          </button>
        </div>
      </div>

      {/* VISION MISSION GOALS */}
      <div className="vmg-container">
        <div className="vmg-card">
          <FaEye className="icon" />
          <h3>Our Vision</h3>
          <p>
            To become a leading global education consultancy empowering students
            with the right opportunities worldwide.
          </p>
        </div>

        <div className="vmg-card">
          <FaBullseye className="icon" />
          <h3>Our Mission</h3>
          <p>
            To provide honest guidance, personalized counselling, and complete
            support for study visa success.
          </p>
        </div>

        <div className="vmg-card">
          <FaRocket className="icon" />
          <h3>Our Goal</h3>
          <p>
            To ensure every student achieves their dream university with a
            seamless and stress-free process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;