import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
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

// ✅ FALLBACK DATA
const fallbackHero = {
  heading: `Study Abroad Made Easy <br /> with <span>SK Classes</span>`,
  description:
    "Get expert guidance for Canada, UK, Australia, USA & more — from admission to visa approval.",

  buttons: [
    { text: "Book Free Consultation", url: "#" },
    { text: "Explore Countries", url: "#" }
  ],

  images: [
    "https://hrinternational.in/blog/wp-content/uploads/2024/06/Best-Visa-Consultancy-Near-Your-Home-for-Canada.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/069/033/140/small/top-down-view-of-the-word-visa-on-a-clean-light-grey-background-vibrant-and-glossy-american-flag-photo.jpeg",
    "https://kadamboverseas.com/wp-content/uploads/2024/11/Europe-student-visa-consultants-in-ahmedabad.jpg",
  ],

  stats: [
    { number: "1500+", label: "Students" },
    { number: "98%", label: "Success Rate" },
    { number: "7 Y+", label: "Experience" },
  ]
};

const Home = () => {

  const [heroData, setHeroData] = useState(fallbackHero);
  const [current, setCurrent] = useState(0);

  // ✅ FETCH HERO DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://sk-classes-backend.onrender.com/api/home");

        if (res.data?.data?.hero) {
          const data = res.data.data.hero;

          setHeroData({
            heading: data.heading || fallbackHero.heading,
            description: data.description || fallbackHero.description,
            buttons:
              data.buttons?.length >= 2
                ? data.buttons
                : fallbackHero.buttons,
            images:
              data.images?.length > 0
                ? data.images
                : fallbackHero.images,
            stats:
              data.stats?.length > 0
                ? data.stats
                : fallbackHero.stats,
          });
        }
      } catch (err) {
        console.log("Using fallback hero data");
      }
    };

    fetchData();
  }, []);

  // ✅ SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroData.images]);

  return (
    <div>
      <Header />

      <section className="home-hero">

        {/* BACKGROUND SLIDER */}
        <div className="home-hero-slider">
          {heroData.images.map((img, index) => (
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

          {/* ✅ DYNAMIC HEADING */}
          <h1 dangerouslySetInnerHTML={{ __html: heroData.heading }} />

          {/* DESCRIPTION */}
          <p>{heroData.description}</p>

          {/* BUTTONS */}
          <div className="home-hero-buttons">
            {heroData.buttons.map((btn, index) => (
              <button
                key={index}
                className={index === 0 ? "primary-btn" : "secondary-btn"}
                onClick={() => window.open(btn.url, "_blank")}
              >
                {btn.text} {index === 0 && <FaArrowRight />}
              </button>
            ))}
          </div>

          {/* STATS */}
          <div className="home-hero-stats">
            {heroData.stats.map((item, index) => (
              <div key={index}>
                <h3>{item.number}</h3>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <AboutSection />
      <StatsSection />
      <Services />
      <StudyVisa />
      <WhyChoose />
      <Testimonials />
      <OtherServices />
      <Enquiry />
      <CtaFooter />
    </div>
  );
};

export default Home;