import React, { useEffect, useState } from "react";
import "./OtherServices.css";
import axios from "axios";

// ✅ FALLBACK DATA (existing)
const fallbackData = {
  sectionTitle: "Other Services",
  sectionSubtitle:
    "We also offer specialized training programs designed to enhance your language skills and prepare you for global opportunities.",

  contact: {
    callNumber: "919992888874",
    whatsappNumber: "919992888874",
  },

  items: [
    {
      title: "IELTS Coaching",
      description:
        "Achieve your desired band score with expert training and real exam strategies.",
      image:
        "https://www.oxfordinternationalenglish.com/wp-content/uploads/2025/06/Smiling-woman-working-in-a-laptop-1.jpg",
    },
    {
      title: "PTE Preparation",
      description:
        "Fast-track your PTE success with AI-based practice and guided sessions.",
      image:
        "https://caribbean.britishcouncil.org/sites/default/files/ielts_listening.jpg",
    },
    {
      title: "Spoken English",
      description:
        "Boost confidence with practical speaking sessions and personality development.",
      image:
        "https://cdn.prod.website-files.com/659bb0ec522de2d79f49ff55/65ca0af494615ead7239b6ec_virtual-classroom-study-space.jpg",
    },
  ],
};

const OtherServices = () => {
  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        if (res.data?.data?.otherServices) {
          const incoming = res.data.data.otherServices;

          setData({
            sectionTitle:
              incoming.sectionTitle || fallbackData.sectionTitle,

            sectionSubtitle:
              incoming.sectionSubtitle ||
              fallbackData.sectionSubtitle,

            contact: {
              callNumber:
                incoming.contact?.callNumber ||
                fallbackData.contact.callNumber,

              whatsappNumber:
                incoming.contact?.whatsappNumber ||
                fallbackData.contact.whatsappNumber,
            },

            items: [
              incoming.items?.[0] || fallbackData.items[0],
              incoming.items?.[1] || fallbackData.items[1],
              incoming.items?.[2] || fallbackData.items[2],
            ],
          });
        }
      } catch (err) {
        console.log("Fallback data used");
      }
    };

    fetchData();
  }, []);

  return (
    <section className="other-services">
      <div className="container">

        <h2 className="section-title">{data.sectionTitle}</h2>

        <p className="section-subtitle">{data.sectionSubtitle}</p>

        <div className="other-grid">
          {data.items.map((item, index) => (
            <div className="other-card" key={index}>
              
              <div className="img-box">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-content">
                <h3>{item.title}</h3>

                <p>
                  {item.description ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                </p>

                <div className="card-actions">
                  
                  {/* ✅ CALL */}
                  <a
                    href={`tel:${
                      data.contact.callNumber?.startsWith("+")
                        ? data.contact.callNumber
                        : "+" + data.contact.callNumber
                    }`}
                    className="btn call-btn"
                  >
                    Call Now
                  </a>

                  {/* ✅ WHATSAPP */}
                  <a
                    href={`https://wa.me/${data.contact.whatsappNumber?.replace(
                      "+",
                      ""
                    )}`}
                    target="Hello SK Classes, I want to enquire about your services"
                    rel="noopener noreferrer"
                    className="btn whatsapp-btn"
                  >
                    Enquire Now
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OtherServices;