import React, { useEffect, useState } from "react";
import "./WhyChoose.css";
import axios from "axios";
import {
  FaUserTie,
  FaHeadset,
  FaMoneyBillWave,
  FaUserCheck,
} from "react-icons/fa";

// ✅ ICONS STATIC (ORDER MATTERS)
const icons = [
  <FaHeadset />,
  <FaUserTie />,
  <FaMoneyBillWave />,
  <FaUserCheck />,
];

// ✅ FALLBACK DATA
const fallbackData = {
  tag: "SK CLASSES",
  sectionTitle:
    "Why Students Trust <br /> <span>SK Classes</span>",
  sectionDescription:
    "We are not just a consultancy — we are your partner in building a successful future abroad. From selecting the right course to visa approval, we stay with you at every step.",
  button: {
    text: "Get Free Consultation →",
    url: "#",
  },
  features: [
    {
      title: "Great Support",
      description:
        "We guide you at every step with clear instructions and dedicated assistance throughout your journey.",
    },
    {
      title: "Personalized Guidance",
      description:
        "Every student gets a tailored roadmap based on profile, goals, and budget.",
    },
    {
      title: "Transparent Process",
      description:
        "No hidden charges. Clear process, clear communication, complete trust.",
    },
    {
      title: "Expert Team",
      description:
        "Work with experienced professionals who understand the visa process deeply.",
    },
  ],
};

const WhyChoose = () => {
  const [data, setData] = useState(null);

  // ✅ FETCH API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        if (res.data?.data?.whyChoose) {
          setData(res.data.data.whyChoose);
        }
      } catch (error) {
        console.log("WhyChoose API Error:", error);
      }
    };

    fetchData();
  }, []);

  // ✅ FINAL SAFE DATA
  const finalData = data || fallbackData;

  return (
    <section className="why">
      <div className="why-container">

        {/* LEFT SIDE */}
        <div className="why-left">
          <span className="tag">
            {finalData.tag || fallbackData.tag}
          </span>

          <h2
            dangerouslySetInnerHTML={{
              __html:
                finalData.sectionTitle ||
                fallbackData.sectionTitle,
            }}
          />

          <p>
            {finalData.sectionDescription ||
              fallbackData.sectionDescription}
          </p>

          <a href={finalData.button?.url || "#"}>
            <button className="primary-btn">
              {finalData.button?.text ||
                fallbackData.button.text}
            </button>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="why-right">
          {(finalData.features || fallbackData.features).map(
            (item, index) => (
              <div className="why-card" key={index}>
                <div className="icon">
                  {icons[index]}
                </div>

                <h3>
                  {item.title ||
                    fallbackData.features[index].title}
                </h3>

                <p>
                  {item.description ||
                    fallbackData.features[index].description}
                </p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;