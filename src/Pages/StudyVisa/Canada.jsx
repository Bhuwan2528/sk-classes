import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FaGlobe,
  FaUserGraduate,
  FaUniversity,
  FaChartLine,
} from "react-icons/fa";
import "./StudyVisa.css";
import Header from "../../Components/Header/Header";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import Banner from "../../Components/Banner/Banner";

const Canada = () => {
  return (
    <>
    <Header bg={true}/>
    <Banner title="Study In Canada"/>
    <div className="page">
      <Sidebar />

      <div className="content">

        {/* HEADER */}
        <div className="top-header">
          <h1>The Canada</h1>
          <p className="tagline">
            Score 8+ Bands with Certified & Experienced Visa Coach
          </p>

          <p className="desc">
            Canada offers world-class education, top universities, and global
            career opportunities. Study in a multicultural environment and
            build your future with confidence.
          </p>
        </div>

        {/* HERO */}
        <div className="hero-img">
          <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" />
        </div>

        {/* WHY CHOOSE US */}
        <section className="study-why">
          <h2>Why choose us?</h2>

          <div className="study-why-grid">

            <div className="study-why-card red">
              <div className="icon"><FaGlobe /></div>
              <p>Supportive Environment</p>
            </div>

            <div className="study-why-card blue">
              <div className="icon"><FaUserGraduate /></div>
              <p>Student-Friendly Policies</p>
            </div>

            <div className="study-why-card green">
              <div className="icon"><FaUniversity /></div>
              <p>Quality Higher Educations</p>
            </div>

            <div className="study-why-card yellow">
              <div className="icon"><FaChartLine /></div>
              <p>Opportunities for Growth</p>
            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section className="process">
          <h2>Our Process</h2>

          <div className="process-grid">
            {["Counselling", "University Selection", "Application", "Visa"].map(
              (step, i) => (
                <div className="process-card" key={i}>
                  <span>0{i + 1}</span>
                  <p>{step}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* UNIVERSITIES */}
        <section className="universities">
          <h2>Top institutes</h2>

          <p>
            Canada’s educational landscape shines with top-tier universities
            that have garnered global recognition for academic excellence,
            research contributions, and innovation.
          </p>

          <div className="uni-grid">
            {[
              "utoronto.ca",
              "ubc.ca",
              "mcgill.ca",
              "ualberta.ca",
              "uwaterloo.ca",
              "ucalgary.ca",
              "dal.ca",
              "queensu.ca",
              "yorku.ca",
              "concordia.ca",
            ].map((uni, i) => (
              <div className="uni-card" key={i}>
                <img
                  src={`https://logo.clearbit.com/${uni}`}
                  alt="university"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>

    <CtaFooter/>
    </>
  );
};

export default Canada;