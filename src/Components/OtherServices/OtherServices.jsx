import React from "react";
import "./OtherServices.css";

const services = [
  {
    title: "IELTS Coaching",
    desc: "Achieve your desired band score with expert training and real exam strategies.",
    img: "https://www.oxfordinternationalenglish.com/wp-content/uploads/2025/06/Smiling-woman-working-in-a-laptop-1.jpg",
  },
  {
    title: "PTE Preparation",
    desc: "Fast-track your PTE success with AI-based practice and guided sessions.",
    img: "https://caribbean.britishcouncil.org/sites/default/files/ielts_listening.jpg",
  },
  {
    title: "Spoken English",
    desc: "Boost confidence with practical speaking sessions and personality development.",
    img: "https://cdn.prod.website-files.com/659bb0ec522de2d79f49ff55/65ca0af494615ead7239b6ec_virtual-classroom-study-space.jpg",
  },
];

const OtherServices = () => {
  return (
    <section className="other-services">
      <div className="container">

        <h2 className="section-title">Other Services</h2>

        <p className="section-subtitle">
          We also offer specialized training programs designed to enhance your
          language skills and prepare you for global opportunities.
        </p>

        <div className="other-grid">
          {services.map((item, index) => (
            <div className="other-card" key={index}>
                <div className="img-box">
                    <img src={item.img} alt={item.title} />
                </div>

                <div className="card-content">
                    <h3>{item.title}</h3>
                    {/* <p>{item.desc}</p> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae ratione distinctio minima doloremque, facilis accusamus nobis? Officiis delectus excepturi exercitationem</p>

                    <div className="card-actions">
                    <a href="tel:9999999999" className="btn call-btn">
                        Call Now
                    </a>

                    <a
                        href="https://wa.me/919999999999"
                        target="_blank"
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