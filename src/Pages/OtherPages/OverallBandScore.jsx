import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FaCalculator,
  FaChartLine,
  FaExclamationTriangle,
  FaLightbulb
} from "react-icons/fa";
import "./OtherPage.css";
import Header from "../../Components/Header/Header";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import Banner from "../../Components/Banner/Banner";

const OverallBandScore = () => {
  return (
    <>
      <Header bg={true} />
      <Banner title="Overall Band Score Guide" />

      <div className="other-page">
        <Sidebar />

        <div className="other-content">

          {/* HEADER */}
          <div className="other-header">
            <h1 className="other-title">Understanding IELTS Overall Band Score</h1>

            <p className="other-desc">
              The IELTS overall band score is a crucial factor that determines your eligibility 
              for study, work, or migration abroad. It is calculated as an average of four modules: 
              Listening, Reading, Writing, and Speaking.
            </p>

            <p className="other-desc">
              Many students prepare hard but fail to improve their scores because they do not 
              fully understand how the scoring system works. This guide will help you understand 
              the logic behind band calculation and how to strategically increase your score.
            </p>
          </div>

          {/* HERO */}
          <div className="other-hero">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200" />
          </div>

          {/* CALCULATION (TEXT HEAVY + VISUAL TOUCH) */}
          <section className="text-section">
            <h2 className="section-title">
              <FaCalculator /> How Band Score is Calculated
            </h2>

            <p>
              Each module in IELTS is scored on a band scale from 0 to 9. Your overall band 
              score is calculated by taking the average of all four modules.
            </p>

            <p>
              For example, if your scores are:
            </p>

            <ul className="custom-list">
              <li>Listening: 7.5</li>
              <li>Reading: 7.0</li>
              <li>Writing: 6.5</li>
              <li>Speaking: 7.0</li>
            </ul>

            <p>
              The average of these scores becomes your overall band, which is rounded to the 
              nearest 0.5 or whole band.
            </p>

            <div className="highlight-box">
              Overall Band = 7.0
            </div>
          </section>

          {/* BAND MEANING */}
          <section className="text-section">
            <h2 className="section-title">
              <FaChartLine /> Band Score Interpretation
            </h2>

            <p>
              Each band score represents a level of English proficiency. Universities and visa 
              authorities evaluate your application based on this score.
            </p>

            <ul className="custom-list">
              <li><strong>Band 9:</strong> Expert user</li>
              <li><strong>Band 7-8:</strong> Good user</li>
              <li><strong>Band 5-6:</strong> Competent user</li>
              <li><strong>Below 5:</strong> Limited proficiency</li>
            </ul>
          </section>

          {/* COMMON MISTAKES */}
          <section className="text-section">
            <h2 className="section-title">
              <FaExclamationTriangle /> Common Mistakes That Lower Your Band
            </h2>

            <p>
              Many students lose marks not because of lack of knowledge, but due to avoidable mistakes.
            </p>

            <ul className="custom-list">
              <li>Neglecting writing practice</li>
              <li>Poor time management during exam</li>
              <li>Lack of vocabulary and sentence variation</li>
              <li>Not analyzing mock test performance</li>
            </ul>
          </section>

          {/* STRATEGY */}
          <section className="text-section">
            <h2 className="section-title">
              <FaLightbulb /> Smart Strategy to Improve Band Score
            </h2>

            <p>
              Improving your IELTS band score requires a strategic approach rather than random practice.
            </p>

            <ul className="custom-list">
              <li>Identify your weakest module and focus more on it</li>
              <li>Practice with real exam-level questions</li>
              <li>Analyze mistakes after every mock test</li>
              <li>Improve vocabulary and grammar consistently</li>
            </ul>

            <div className="highlight-box">
              Consistency + Smart Practice = Higher Band Score
            </div>
          </section>

        </div>
      </div>

      <div className="space"></div>

      <CtaFooter />
    </>
  );
};

export default OverallBandScore;