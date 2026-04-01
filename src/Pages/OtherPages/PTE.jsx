import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FaLaptop,
  FaMicrophone,
  FaClock,
  FaChartBar
} from "react-icons/fa";
import "./OtherPage.css";
import Header from "../../Components/Header/Header";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import Banner from "../../Components/Banner/Banner";

const Pte = () => {
  return (
    <>
      <Header bg={true} />
      <Banner title="PTE Preparation" />

      <div className="other-page">
        <Sidebar />

        <div className="other-content">

          {/* HEADER */}
          <div className="other-header">
            <h1 className="other-title">Master PTE with Smart Strategies</h1>
            <p className="other-tagline">
              AI-based exam preparation for faster results ⚡
            </p>

            <p className="other-desc">
              PTE (Pearson Test of English) is a fully computer-based English test 
              widely accepted for study and immigration. Its AI scoring system 
              makes accuracy, speed, and strategy extremely important.
            </p>

            <p className="other-desc">
              Our PTE coaching focuses on real exam patterns, smart shortcuts, 
              and intensive practice sessions to help you achieve high scores 
              in less time.
            </p>
          </div>

          {/* HERO */}
          <div className="other-hero">
            <img src="https://images.ctfassets.net/unrdeg6se4ke/2hiIlYJaP24seOTx484ffM/5e462d89a6279d376a3d95069cb6fb8d/Official_prep.png" />
          </div>

          {/* HIGHLIGHTS (Different style use same classes) */}
          <section className="other-features">
            <h2 className="section-title">Why Choose PTE?</h2>

            <div className="feature-grid">
              <div className="feature-card">
                <FaLaptop />
                <h4>Computer-Based Test</h4>
                <p>No human bias — fully AI evaluated</p>
              </div>

              <div className="feature-card">
                <FaMicrophone />
                <h4>Speaking via Mic</h4>
                <p>No face-to-face interview pressure</p>
              </div>

              <div className="feature-card">
                <FaClock />
                <h4>Fast Results</h4>
                <p>Get your score within 24–48 hours</p>
              </div>

              <div className="feature-card">
                <FaChartBar />
                <h4>Accurate Scoring</h4>
                <p>AI-based marking system ensures fairness</p>
              </div>
            </div>
          </section>

          {/* SCORING SYSTEM (NEW UNIQUE SECTION 💥) */}
          <section className="other-modules">
            <h2 className="section-title">PTE Scoring Breakdown</h2>

            <div className="modules-grid">
              {[
                { title: "Speaking", desc: "Pronunciation & fluency" },
                { title: "Writing", desc: "Grammar & structure" },
                { title: "Reading", desc: "Comprehension skills" },
                { title: "Listening", desc: "Understanding audio" }
              ].map((item, i) => (
                <div className="module-card" key={i}>
                  <span>0{i + 1}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS (Different vibe text) */}
          <section className="other-process">
            <h2 className="section-title">Our Preparation Strategy</h2>

            <div className="process-line">
              {[
                "Level Analysis",
                "Skill-Based Training",
                "AI Mock Practice",
                "Score Optimization"
              ].map((step, i) => (
                <div className="process-step" key={i}>
                  <div className="dot"></div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* RESULTS (Different styling feel same classes) */}
          <section className="other-results">
            <h2 className="section-title">Recent PTE Scores</h2>

            <div className="results-grid">
              {[
                { name: "Rahul", score: "79" },
                { name: "Simran", score: "82" },
                { name: "Karan", score: "85" },
                { name: "Anjali", score: "76" }
              ].map((s, i) => (
                <div className="result-card" key={i}>
                  <h3>{s.score}</h3>
                  <p>Score</p>
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

export default Pte;