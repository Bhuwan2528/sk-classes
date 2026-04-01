import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FaComments,
  FaUserFriends,
  FaGlobe,
  FaBolt,
  FaCheckCircle
} from "react-icons/fa";
import "./OtherPage.css";
import Header from "../../Components/Header/Header";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import Banner from "../../Components/Banner/Banner";

const SpokenEnglish = () => {
  return (
    <>
      <Header bg={true} />
      <Banner title="Spoken English Course" />

      <div className="other-page">
        <Sidebar />

        <div className="other-content">

          {/* HERO (TOTALLY DIFFERENT STYLE 🔥) */}
          <div className="other-header">
            <h1 className="other-title">Speak English Confidently</h1>
            <p className="other-tagline">
              Stop hesitating. Start speaking with confidence 🚀
            </p>

            <p className="other-desc">
              Spoken English is not just about grammar — it’s about confidence, 
              fluency, and expressing your thoughts clearly. Whether you're a 
              beginner or someone struggling with hesitation, this course is 
              designed to transform the way you communicate.
            </p>
          </div>

          <div className="other-hero">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" />
          </div>

          {/* DAILY LIFE BENEFITS (NEW SECTION 💥) */}
          <section className="other-features">
            <h2 className="section-title">Where Spoken English Helps You</h2>

            <div className="feature-grid">
              <div className="feature-card">
                <FaComments />
                <h4>Daily Conversations</h4>
                <p>Speak fluently in real-life situations</p>
              </div>

              <div className="feature-card">
                <FaUserFriends />
                <h4>Interviews</h4>
                <p>Confident answers & better impression</p>
              </div>

              <div className="feature-card">
                <FaGlobe />
                <h4>Abroad Life</h4>
                <p>Communicate easily anywhere in the world</p>
              </div>

              <div className="feature-card">
                <FaBolt />
                <h4>Confidence Boost</h4>
                <p>Remove hesitation & speak naturally</p>
              </div>
            </div>
          </section>

          {/* HOW WE TRAIN (UNIQUE STYLE 💥) */}
          <section className="other-modules">
            <h2 className="section-title">How We Train You</h2>

            <div className="modules-grid">
              {[
                {
                  title: "Live Speaking Practice",
                  desc: "Daily conversations & role plays"
                },
                {
                  title: "Grammar Simplified",
                  desc: "Learn only what you actually need"
                },
                {
                  title: "Confidence Building",
                  desc: "Remove fear & hesitation"
                },
                {
                  title: "Real-Life Scenarios",
                  desc: "Practice real world situations"
                }
              ].map((item, i) => (
                <div className="module-card" key={i}>
                  <span>0{i + 1}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TRANSFORMATION SECTION (NEW 💣) */}
          <section className="other-process">
            <h2 className="section-title">Your Transformation Journey</h2>

            <div className="process-line">
              {[
                "Basic Understanding",
                "Speaking Practice",
                "Fluency Development",
                "Confident Speaker"
              ].map((step, i) => (
                <div className="process-step" key={i}>
                  <div className="dot"></div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BEFORE AFTER (SUPER UNIQUE 🔥🔥) */}
          <section className="other-results">
            <h2 className="section-title">Before vs After</h2>

            <div className="results-grid">
              <div className="result-card">
                <h3>Before</h3>
                <p>Hesitation 😕</p>
                <span>Fear of speaking</span>
              </div>

              <div className="result-card">
                <h3>After</h3>
                <p>Confidence 😎</p>
                <span>Fluent communication</span>
              </div>

              <div className="result-card">
                <h3>Before</h3>
                <p>Broken English</p>
                <span>Grammar confusion</span>
              </div>

              <div className="result-card">
                <h3>After</h3>
                <p>Clear Speaking</p>
                <span>Natural flow</span>
              </div>
            </div>
          </section>

          {/* CHECKLIST CTA (NEW SECTION 💥) */}
          <section className="other-features">
            <h2 className="section-title">What You’ll Achieve</h2>

            <div className="feature-grid">
              {[
                "Fluent English speaking",
                "Confidence in interviews",
                "Better communication skills",
                "Stronger personality"
              ].map((item, i) => (
                <div className="feature-card" key={i}>
                  <FaCheckCircle />
                  <p>{item}</p>
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

export default SpokenEnglish;