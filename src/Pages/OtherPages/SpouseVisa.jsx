import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FaUsers,
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaShieldAlt
} from "react-icons/fa";
import "./OtherPage.css";
import Header from "../../Components/Header/Header";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import Banner from "../../Components/Banner/Banner";

const SpouseVisa = () => {
  return (
    <>
      <Header bg={true} />
      <Banner title="Spouse Visa" />

      <div className="other-page">
        <Sidebar />

        <div className="other-content">

          {/* HERO */}
          <div className="spouse-hero">
            <div className="spouse-hero-text">
              <h1>Reunite With Your Loved Ones Abroad</h1>
              <p>
                A spouse visa allows you to live with your partner in a foreign 
                country legally. We simplify the process and guide you at every step 
                to ensure a smooth and successful visa approval.
              </p>
            </div>

            <div className="spouse-hero-img">
              <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200" />
            </div>
          </div>

          {/* INTRO TEXT */}
          <section className="text-section">
            <h2 className="section-title">
              <FaUsers /> What is a Spouse Visa?
            </h2>

            <p>
              A spouse visa allows married partners to join each other in a 
              foreign country where one partner is already residing as a citizen, 
              permanent resident, or student.
            </p>

            <p>
              The application process involves document verification, financial 
              proof, relationship authenticity, and immigration compliance. 
              Proper guidance significantly increases approval chances.
            </p>
          </section>

          {/* FEATURES CARDS (PREMIUM UI 💥) */}
          <section className="spouse-features">
            <div className="spouse-card">
              <FaFileAlt />
              <h4>Complete Documentation</h4>
              <p>We handle all paperwork with accuracy</p>
            </div>

            <div className="spouse-card">
              <FaCheckCircle />
              <h4>High Approval Rate</h4>
              <p>Strong case preparation & verification</p>
            </div>

            <div className="spouse-card">
              <FaClock />
              <h4>Fast Processing</h4>
              <p>Timely submission without delays</p>
            </div>

            <div className="spouse-card">
              <FaShieldAlt />
              <h4>Trusted Support</h4>
              <p>End-to-end expert guidance</p>
            </div>
          </section>

          {/* PROCESS */}
          <section className="text-section">
            <h2 className="section-title">Step-by-Step Process</h2>

            <div className="spouse-steps">
              {[
                "Profile Evaluation",
                "Document Collection",
                "Application Filing",
                "Visa Approval"
              ].map((step, i) => (
                <div className="step-box" key={i}>
                  <span>0{i + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="text-section">
            <h2 className="section-title">Basic Requirements</h2>

            <ul className="custom-list">
              <li>Valid marriage certificate</li>
              <li>Proof of relationship</li>
              <li>Financial support documents</li>
              <li>Visa status of sponsoring partner</li>
            </ul>
          </section>

          {/* CTA BLOCK (HIGH CONVERSION 💣) */}
          <section className="spouse-cta">
            <h2>Start Your Spouse Visa Process Today</h2>
            <p>
              Get expert consultation and increase your chances of visa approval 
              with proper guidance and documentation support.
            </p>

            <button>Book Free Consultation</button>
          </section>

        </div>
      </div>

      <div className="space"></div>

      <CtaFooter />
    </>
  );
};

export default SpouseVisa;