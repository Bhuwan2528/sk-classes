import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FaUserTie, FaMapMarkedAlt, FaFileAlt, FaHandshake
} from "react-icons/fa";
import "./StudyVisa.css";
import Header from "../../Components/Header/Header";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import Banner from "../../Components/Banner/Banner";

const Europe = () => {
  return (
    <>
    <Header bg={true}/>
    <Banner title="Study In Europe"/>

    <div className="study-page">
    <Sidebar />

    <div className="study-content">

        <div className="study-header">
        <h1 className="study-header-title">The Europe</h1>
        <p className="study-header-tagline">Score 8+ Bands with Certified and experienced SK Classes Coach
</p>
        <p className="study-header-desc">When it comes to world-class education, Europe stands as a beacon of excellence, offering a welcoming environment, top-tier institutions, and a diverse cultural tapestry. Studying in Europe isn’t just about gaining a degree.</p>
         <p className="study-header-desc">When it comes to world-class education, Europe stands as a beacon of excellence, offering a welcoming environment, top-tier institutions, and a diverse cultural tapestry. Studying in Europe isn’t just about gaining a degree.</p>
        </div>

        <div className="study-hero">
        <img src="https://plus.unsplash.com/premium_photo-1661878122586-2d75a86f3400?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXVyb3BlYW4lMjBjaXRpZXN8ZW58MHx8MHx8fDA%3D" />
        </div>

        <section className="study-why">
        <h2 className="study-section-title">Why choose us?</h2>

        <div className="study-why-grid">

            <div className="study-why-card red">
            <div className="study-why-icon"><FaUserTie /></div>
            <p>Expert Guidance & Personalized Counseling</p>
            </div>

            <div className="study-why-card blue">
            <div className="study-why-icon"><FaMapMarkedAlt /></div>
            <p>Strong Knowledge of Canadian Education System</p>
            </div>

            <div className="study-why-card yellow">
            <div className="study-why-icon"><FaFileAlt /></div>
            <p>End-to-End Visa Assistance</p>
            </div>

            <div className="study-why-card green">
            <div className="study-why-icon"><FaHandshake /></div>
            <p>Trusted & Student-Centric Approach</p>
            </div>

        </div>
        </section>

        <section className="study-process">
        <h2 className="study-section-title">Our Process</h2>

        <div className="study-process-grid">
            <div className="study-process-card">
            <span className="study-process-number">01</span>
            <p>Consultation & Profile Evaluation</p>
            </div>

            <div className="study-process-card">
            <span className="study-process-number">02</span>
            <p>Course & College Selection</p>
            </div>

            <div className="study-process-card">
            <span className="study-process-number">03</span>
            <p>Application & Visa Processing</p>
            </div>

            <div className="study-process-card">
            <span className="study-process-number">04</span>
            <p>Pre-Departure Support</p>
            </div>
        </div>
        </section>

        <section className="study-universities">
        <h2 className="study-section-title">Top institutes</h2>

        <p className="study-universities-desc">
          Europe’s educational landscape shines with a constellation of top-tier universities that have garnered global recognition for their academic prowess, research contributions, and commitment to innovation.
        </p>

        <div className="study-uni-grid">
          {[
            {
              name: "University of Oxford",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNHp-OvRbAyrhUNOCfmcpvnMQ-yCR_kJo0Q&s",
            },
            {
              name: "University of Cambridge",
              logo: "https://www.cam.ac.uk/sites/default/files/secondary-logo-stacked.png",
            },
            {
              name: "ETH Zurich",
              logo: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/eth-zurich-logo.jpg",
            },
            {
              name: "Imperial College London",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1Bt6Fehu_WGvds_6pddLrH5tibY2JJ-wPQ&s",
            },
            {
              name: "UCL",
              logo: "https://www.ucl.ac.uk/brand-and-experience/sites/brand_and_experience/files/styles/all_size_mobile_16_9/public/2026-01/brand-VI-logo-horizontal-fullcolour-fullname.png.jpg?itok=pEXaYjw6",
            },
            {
              name: "Technical University of Munich",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqru4dfZYRYmaP18BNdxZINamhsX6GnkOBMA&s",
            },
            {
              name: "LMU Munich",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXL4QEWJ__M0UJN517UntEiBLbsI648PFCmA&s",
            },
            {
              name: "KU Leuven",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUvA9VKEUsVAD38XQvup9fdRG0EosGzERNA&s",
            },
            {
              name: "University of Amsterdam",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3Equ73fX-Il7wButgjd_WMnJhnMtE9e-sw&s",
            },
            {
              name: "Sorbonne University",
              logo: "https://images.seeklogo.com/logo-png/33/2/sorbonne-university-logo-png_seeklogo-339745.png",
            },
          ].map((uni, i) => (
            <div className="study-uni-card" key={i}>
              <img src={uni.logo} alt={uni.name} />
            </div>
          ))}
        </div>
      </section>

    </div>
    </div>

    <div className="space"></div>

    <CtaFooter/>
    </>
  );
};

export default Europe;