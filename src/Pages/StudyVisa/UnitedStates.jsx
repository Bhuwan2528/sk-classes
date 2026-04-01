import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  FaUserTie, FaMapMarkedAlt, FaFileAlt, FaHandshake
} from "react-icons/fa";
import "./StudyVisa.css";
import Header from "../../Components/Header/Header";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import Banner from "../../Components/Banner/Banner";

const UnitedStates = () => {
  return (
    <>
    <Header bg={true}/>
    <Banner title="Study In USA"/>

    <div className="study-page">
    <Sidebar />

    <div className="study-content">

        <div className="study-header">
        <h1 className="study-header-title">The USA</h1>
        <p className="study-header-tagline">Score 8+ Bands with Certified and experienced SK Classes Coach
</p>
        <p className="study-header-desc">When it comes to world-class education, USA stands as a beacon of excellence, offering a welcoming environment, top-tier institutions, and a diverse cultural tapestry. Studying in USA isn’t just about gaining a degree.</p>
         <p className="study-header-desc">When it comes to world-class education, USA stands as a beacon of excellence, offering a welcoming environment, top-tier institutions, and a diverse cultural tapestry. Studying in USA isn’t just about gaining a degree.</p>
        </div>

        <div className="study-hero">
        <img src="https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg" />
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
          USA’s educational landscape shines with a constellation of top-tier universities that have garnered global recognition for their academic prowess, research contributions, and commitment to innovation.
        </p>

        <div className="study-uni-grid">
          {[
            {
              name: "Toronto",
              logo: "https://download.logo.wine/logo/University_of_Toronto/University_of_Toronto-Logo.wine.png",
            },
            {
              name: "UBC",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEPPnsFDWfJjIx9UsD6RywN-6nvRiI-_5rw&s",
            },
            {
              name: "McGill",
              logo: "https://761723.selcdn.ru/studyqa-medialibrary/2682320/uni_profile_8811.jpg",
            },
            {
              name: "Alberta",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCoslp-YDra3NNNfO4QWcOYiGudpgEI541g&s",
            },
            {
              name: "Waterloo",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qblT7-n1aFsCuER_RQUJQd3QhexiwxYUMw&s",
            },
            {
              name: "Western",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-0asvCaOKUbW1APX2_6cIJ4sZbLSy_CTgw&s",
            },
            {
              name: "Calgary",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmMJgRmNnXF0ttsicIQxfSbU58uYWzKC-jQ&s",
            },
            {
              name: "Ottawa",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2eOM3F-OHHXZfH2yMf_g3DFdIp1TMscRVw&s",
            },
            {
              name: "Queens",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3I0j4AFPXPaVF0AIveDEbNRYkCV0bCd8yWQ&s",
            },
            {
              name: "SFU",
              logo: "https://surreynowleader.com/wp-content/uploads/sites/8/2011/02/86375surreysfu.jpg",
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

export default UnitedStates;