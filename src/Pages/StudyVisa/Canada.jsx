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

    <div className="study-page">
    <Sidebar />

    <div className="study-content">

        <div className="study-header">
        <h1 className="study-header-title">The Canada</h1>
        <p className="study-header-tagline">Score 8+ Bands...</p>
        <p className="study-header-desc">Canada offers world-class...</p>
        </div>

        <div className="study-hero">
        <img src="..." />
        </div>

        <section className="study-why">
        <h2 className="study-section-title">Why choose us?</h2>

        <div className="study-why-grid">

            <div className="study-why-card red">
            <div className="study-why-icon"><FaGlobe /></div>
            <p>Supportive Environment</p>
            </div>

        </div>
        </section>

        <section className="study-process">
        <h2 className="study-section-title">Our Process</h2>

        <div className="study-process-grid">
            <div className="study-process-card">
            <span className="study-process-number">01</span>
            <p>Counselling</p>
            </div>
        </div>
        </section>

        <section className="study-universities">
        <h2 className="study-section-title">Top institutes</h2>
        <p className="study-universities-desc">Canada’s educational...</p>
        </section>

    </div>
    </div>

    <CtaFooter/>
    </>
  );
};

export default Canada;