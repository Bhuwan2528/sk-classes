import React, { useEffect, useState } from "react";
import { FaBullseye, FaEye, FaRocket } from "react-icons/fa";
import "./AboutSection.css";
import axios from "axios";

const defaultData = {
  image:
    "https://www.skclasses.com/wp-content/uploads/2022/08/about_4_1.jpg",
  experience: {
    years: "10+ Years",
    label: "Experience",
  },
  heading:
    "Your Trusted Partner for <span>Study Abroad Success</span>",
  description: `
    <p>At SK CLASSES provides information regarding higher education in various countries such as Canada, Australia and has a Professional command over the education system worldwide.</p>
    <p>We are well known in the immigration circle for our specialized services & are praised by our clients for enriching their experience in Visa facilitation.</p>
  `,
  button: {
    text: "Explore Services →",
    link: "#",
  },
  vmg: {
    vision: {
      title: "Our Vision",
      description:
        "To become a leading global education consultancy empowering students with the right opportunities worldwide.",
    },
    mission: {
      title: "Our Mission",
      description:
        "To provide honest guidance, personalized counselling, and complete support for study visa success.",
    },
    goal: {
      title: "Our Goal",
      description:
        "To ensure every student achieves their dream university with a seamless and stress-free process.",
    },
  },
};

const AboutSection = () => {
  const [about, setAbout] = useState(defaultData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        const data = res.data?.data?.about;

        if (data) {
          setAbout({
            ...defaultData,
            ...data,
            experience: {
              ...defaultData.experience,
              ...data.experience,
            },
            button: {
              ...defaultData.button,
              ...data.button,
            },
            vmg: {
              vision: {
                ...defaultData.vmg.vision,
                ...data.vmg?.vision,
              },
              mission: {
                ...defaultData.vmg.mission,
                ...data.vmg?.mission,
              },
              goal: {
                ...defaultData.vmg.goal,
                ...data.vmg?.goal,
              },
            },
          });
        }
      } catch (err) {
        console.log("About fetch error", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="about-section">
      <div className="container about-wrapper">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={about.image} alt="About" />
          <div className="image-overlay"></div>

          <div className="about-badge">
            <span>{about.experience?.years}</span>
            <p>{about.experience?.label}</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h5 className="section-tag">About Us</h5>

          {/* ✅ HTML HEADING */}
          <h2
            dangerouslySetInnerHTML={{ __html: about.heading }}
          />

          {/* ✅ HTML DESCRIPTION */}
          <p
            dangerouslySetInnerHTML={{ __html: about.description }}
          />

          <a href={about.button?.link}>
            <button className="about primary-btn">
              {about.button?.text}
            </button>
          </a>
        </div>
      </div>

      {/* VMG */}
      <div className="vmg-container">
        <div className="vmg-card">
          <FaEye className="icon" />
          <h3>{about.vmg?.vision?.title}</h3>
          <p>{about.vmg?.vision?.description}</p>
        </div>

        <div className="vmg-card">
          <FaBullseye className="icon" />
          <h3>{about.vmg?.mission?.title}</h3>
          <p>{about.vmg?.mission?.description}</p>
        </div>

        <div className="vmg-card">
          <FaRocket className="icon" />
          <h3>{about.vmg?.goal?.title}</h3>
          <p>{about.vmg?.goal?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;