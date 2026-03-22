import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import { FaArrowRight } from "react-icons/fa";
import AboutSection from '../../Components/AboutSection/AboutSection';
import Services from '../../Components/Services/Services';
import StudyVisa from '../../Components/StudyVisa/StudyVisa';
import StatsSection from '../../Components/Stats/StatsSection';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import CtaFooter from '../../Components/CtaFooter/CtaFooter';
import Testimonials from '../../Components/Testimonails/Testimonials';
import OtherServices from '../../Components/OtherServices/OtherServices';
import Enquiry from '../../Components/Enquiry/Enquiry';

const images = [
  "https://t3.ftcdn.net/jpg/07/13/60/70/360_F_713607021_gmuzCAzWEAv1oETwSwrTBuIijly7Csq1.jpg",

  "https://cdn.shopify.com/s/files/1/0499/3630/2238/files/IELTS_In-Dept_Guide_for_Foreign_Educated_Nurses.png?v=1672727434",

  "https://images.ctfassets.net/unrdeg6se4ke/1XgCpIxTXPkwc2JQxG1Csf/45c1c8879e6906016a8199c332f14e3d/shutterstock_1420330667.jpg",

  "https://inphase.global/wp-content/uploads/2023/06/ielts-new.webp",
];

const Home = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <Header/>

        <section className="home-hero">
        {/* BACKGROUND SLIDER */}
        <div className="home-hero-slider">
            {images.map((img, index) => (
            <div
                key={index}
                className={`home-hero-slide ${index === current ? "active" : ""}`}
                style={{ backgroundImage: `url(${img})` }}
            ></div>
            ))}
        </div>

        <div className="home-hero-overlay"></div>

        {/* CONTENT */}
        <div className="home-hero-content">
            <h1>
            Study Abroad Made Easy <br />
            with <span>SK Classes</span>
            </h1>

            <p>
            Get expert guidance for Canada, UK, Australia, USA & more —
            from admission to visa approval.
            </p>

            <div className="home-hero-buttons">
            <button className="primary-btn">
                Book Free Consultation <FaArrowRight />
            </button>

            <button className="secondary-btn">
                Explore Countries
            </button>
            </div>

            <div className="home-hero-stats">
            <div>
                <h3>1500+</h3>
                <span>Students</span>
            </div>
            <div>
                <h3>98%</h3>
                <span>Success Rate</span>
            </div>
            <div>
                <h3>7 Y+</h3>
                <span>Experience</span>
            </div>
            </div>
        </div>
        </section>

        <AboutSection/>

        <StatsSection/>

        <Services/>

        <StudyVisa/>

        <WhyChoose/>

        <Testimonials/>

        <OtherServices/>

        <Enquiry/>

        <CtaFooter/>

        

            </div>
  )
}

export default Home