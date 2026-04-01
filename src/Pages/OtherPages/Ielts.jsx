import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FaChalkboardTeacher,
  FaClock,
  FaChartLine,
  FaHeadset
} from "react-icons/fa";
import "./OtherPage.css";
import Header from "../../Components/Header/Header";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import Banner from "../../Components/Banner/Banner";

const Ielts = () => {
  return (
    <>
      <Header bg={true} />
      <Banner title="IELTS Preparation" />

      <div className="other-page">
        <Sidebar />

        <div className="other-content">

          {/* HEADER */}
          <div className="other-header">
            <h1 className="other-title">Crack IELTS with Confidence</h1>
            <p className="other-tagline">
              Achieve Band 7+ with expert training & real exam strategies
            </p>
            <p className="other-desc">
              Dreaming of studying or settling abroad? IELTS is your first and most crucial step. A high band score can open doors to top universities and global opportunities.
            </p>

            <p className="other-desc">
              Our expert-led IELTS coaching is designed to give you an edge — from mastering each module to improving your English fluency, confidence, and exam strategy. We focus on real results, not just theory.
            </p>
            
          </div>

          {/* HERO */}
          <div className="other-hero">
            <img src="https://images.ctfassets.net/unrdeg6se4ke/2hiIlYJaP24seOTx484ffM/5e462d89a6279d376a3d95069cb6fb8d/Official_prep.png" />
          </div>

          {/* FEATURES */}
          <section className="other-features">
            <h2 className="section-title">Why Choose Our IELTS Coaching?</h2>

            <div className="feature-grid">
              <div className="feature-card">
                <FaChalkboardTeacher />
                <h4>Expert Trainers</h4>
                <p>Certified mentors with proven band 8+ strategies</p>
              </div>

              <div className="feature-card">
                <FaClock />
                <h4>Flexible Timings</h4>
                <p>Morning & evening batches available</p>
              </div>

              <div className="feature-card">
                <FaChartLine />
                <h4>Score Tracking</h4>
                <p>Weekly mock tests with performance analytics</p>
              </div>

              <div className="feature-card">
                <FaHeadset />
                <h4>1:1 Support</h4>
                <p>Doubt sessions & personalized feedback</p>
              </div>
            </div>
          </section>

          {/* MODULES */}
          <section className="other-modules">
            <h2 className="section-title">What You'll Learn</h2>

            <div className="modules-grid">
              {["Listening", "Reading", "Writing", "Speaking"].map((item, i) => (
                <div className="module-card" key={i}>
                  <span>0{i + 1}</span>
                  <h4>{item}</h4>
                  <p>Master this section with real exam-level practice</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section className="other-process">
            <h2 className="section-title">Our Training Process</h2>

            <div className="process-line">
              {[
                "Assessment Test",
                "Personalized Plan",
                "Practice + Mock Tests",
                "Final Band Boost"
              ].map((step, i) => (
                <div className="process-step" key={i}>
                  <div className="dot"></div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* RESULTS (REPLACED SECTION) */}
          <section className="other-results">
            <h2 className="section-title">Student Results</h2>

            <div className="results-grid">
              {[
                { name: "Aman", band: "8.0" },
                { name: "Priya", band: "7.5" },
                { name: "Rohit", band: "8.5" },
                { name: "Neha", band: "7.0" }
              ].map((s, i) => (
                <div className="result-card" key={i}>
                  <h3>{s.band}</h3>
                  <p>Band Score</p>
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <div className="space"></div>

      <CtaFooter />
    </>
  );
};

export default Ielts;