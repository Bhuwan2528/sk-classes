import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FaCheckCircle,
  FaBolt,
  FaLaptop,
  FaBalanceScale
} from "react-icons/fa";
import "./OtherPage.css";
import Header from "../../Components/Header/Header";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import Banner from "../../Components/Banner/Banner";

const BenefitsPte = () => {
  return (
    <>
      <Header bg={true} />
      <Banner title="Benefits of PTE" />

      <div className="other-page">
        <Sidebar />

        <div className="other-content">

          {/* HEADER */}
          <div className="other-header">
            <h1 className="other-title">Why Choose PTE Over Other English Tests</h1>

            <p className="other-desc">
              The Pearson Test of English (PTE) has become one of the most preferred 
              English proficiency exams for students and professionals aiming to 
              study or migrate abroad.
            </p>

            <p className="other-desc">
              With its computer-based format, AI-driven scoring system, and faster 
              result processing, PTE offers a modern and efficient alternative to 
              traditional English tests like IELTS.
            </p>
          </div>

          {/* HERO */}
          <div className="other-hero">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200" />
          </div>

          {/* BENEFITS */}
          <section className="text-section">
            <h2 className="section-title">
              <FaCheckCircle /> Key Benefits of PTE
            </h2>

            <p>
              PTE offers several advantages that make it a strong choice for 
              candidates looking for speed, accuracy, and convenience.
            </p>

            <ul className="custom-list">
              <li>Fast results, usually within 24 to 48 hours</li>
              <li>Fully computer-based with no human bias</li>
              <li>Flexible test dates available throughout the year</li>
              <li>Accepted by major countries including Australia, UK, and Canada</li>
              <li>Accurate scoring using AI technology</li>
            </ul>
          </section>

          {/* WHY PTE STANDS OUT */}
          <section className="text-section">
            <h2 className="section-title">
              <FaBolt /> What Makes PTE Different
            </h2>

            <p>
              Unlike traditional exams, PTE is designed to evaluate real-life 
              English skills using automated systems. This ensures consistency 
              and fairness in scoring.
            </p>

            <p>
              The speaking section, for example, does not involve a face-to-face 
              interview. Instead, responses are recorded and assessed using AI, 
              which removes examiner bias and provides more objective results.
            </p>

            <div className="highlight-box">
              PTE focuses on speed, accuracy, and real-world communication skills
            </div>
          </section>

          {/* PTE VS IELTS */}
          <section className="text-section">
            <h2 className="section-title">
              <FaBalanceScale /> PTE vs IELTS
            </h2>

            <p>
              Both PTE and IELTS are widely accepted English proficiency tests, 
              but they differ in format, evaluation, and experience.
            </p>

            <ul className="custom-list">
              <li><strong>Test Format:</strong> PTE is fully computer-based, IELTS can be paper or computer-based</li>
              <li><strong>Speaking Test:</strong> PTE uses microphone recording, IELTS involves a face-to-face interview</li>
              <li><strong>Results Time:</strong> PTE delivers results faster (24–48 hours), IELTS takes several days</li>
              <li><strong>Scoring:</strong> PTE uses AI-based scoring, IELTS involves human examiners</li>
            </ul>
          </section>

          {/* WHO SHOULD CHOOSE PTE */}
          <section className="text-section">
            <h2 className="section-title">
              <FaLaptop /> Who Should Choose PTE
            </h2>

            <p>
              PTE is especially suitable for candidates who are comfortable with 
              computers and prefer a faster, technology-driven exam environment.
            </p>

            <ul className="custom-list">
              <li>Students who want quick results</li>
              <li>Candidates uncomfortable with face-to-face speaking tests</li>
              <li>Applicants targeting Australia and similar countries</li>
              <li>Individuals who prefer objective scoring systems</li>
            </ul>

            <div className="highlight-box">
              Choosing the right test depends on your comfort, strategy, and goals
            </div>
          </section>

        </div>
      </div>

      <div className="space"></div>

      <CtaFooter />
    </>
  );
};

export default BenefitsPte;