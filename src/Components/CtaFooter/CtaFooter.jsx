import React, { useEffect, useState } from "react";
import "./CtaFooter.css";
import girlImg from "../../assets/girl.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";
import axios from "axios";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const defaultData = {
  cta: {
    heading: "Ready To Start Your Study Abroad Journey?",
    description:
      "Get personalized counselling, visa support, and complete guidance from our experts. Whether you're planning your first step or ready to apply, we’re here to make your journey smooth and successful.",
    callNumber: "919992888874",
    whatsappNumber: "919992888874",
  },
  footer: {
    description:
      "Helping students achieve global education goals with expert guidance.",
    quickLinks: {},
    office: {
      address: " Near Old Over Bridge Kathmandi, Opposite Red Square Market Hisar.",
      phone: "+91- 99928-88874",
      email: " nagpal.kuldeep@gmail.com",
    },
  },
  header: {
    socialLinks: {},
  },
};

const navigate = useNavigate

const CtaFooter = () => {
  const [data, setData] = useState(defaultData);

  // 🔥 FETCH HERE
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://sk-classes-backend.onrender.com/api/header-footer");

        if (res.data?.data) {
          setData({
            ...defaultData,
            ...res.data.data,
          });
        }
      } catch (err) {
        console.log("CTA Footer fetch error", err);
      }
    };

    fetchData();
  }, []);

  const { cta, footer, header } = data;

  return (
    <div className="cta-footer-wrapper">

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-content">

          <div className="cta-left">
            <h2>{cta?.heading || defaultData.cta.heading}</h2>

            <p>{cta?.description || defaultData.cta.description}</p>

            <div className="cta-dual">
              <button
                className="cta-btn call-btn"
                onClick={() =>
                  (window.location.href = `tel:+${cta?.callNumber || defaultData.cta.callNumber}`)
                }
              >
                <FaPhoneAlt /> Call Now
              </button>

              <button
                className="cta-btn whatsapp-btn"
                onClick={() =>
                  window.open(
                    `https://wa.me/${cta?.whatsappNumber || defaultData.cta.whatsappNumber}?text=Hello SK Classes, I want to enquire about your services`,
                    "_blank"
                  )
                }
              >
                <FaWhatsapp /> Enquire on WhatsApp
              </button>
            </div>
          </div>

          <div className="cta-right">
            <img src={girlImg} alt="student" />
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          {/* COL 1 */}
          <div className="footer-col col1">
            <h3 className="logo"><img src={logo} alt="" /></h3>

            <p className="about">
              {footer?.description || defaultData.footer.description}
            </p>

            <div className="socials">
              <a href={header?.socialLinks?.facebook || "#"}><FaFacebookF /></a>
              <a href={header?.socialLinks?.instagram || "#"}><FaInstagram /></a>
              <a href={header?.socialLinks?.twitter || "#"}><FaTwitter /></a>
              <a href={header?.socialLinks?.linkedin || "#"}><FaLinkedinIn /></a>
            </div>
          </div>

          {/* COL 2 */}
          <div className="footer-col col2">
            <h4>Quick Links</h4>

            <ul>
              {[1, 2, 3, 4, 5, 6].map((num) => {
                const link = footer?.quickLinks?.[`link${num}`];

                const title = link?.title || `Link ${num}`;
                const url = link?.url || "#";

                return (
                  <li key={num}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COL 3 */}
          <div className="footer-col">
            <h4>Location</h4>
            <div className="map">
              <iframe
                src="https://maps.google.com/maps?q=hisar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* COL 4 (WITH ICONS) */}
          <div className="footer-col">
            <h4>Office</h4>

            <p>
              <FaMapMarkerAlt />{" "}
              {footer?.office?.address || defaultData.footer.office.address}
            </p>

            <p>
              <FaPhoneAlt />{" "}
              {footer?.office?.phone || defaultData.footer.office.phone}
            </p>

            <p>
              <FaEnvelope />{" "}
              {footer?.office?.email || defaultData.footer.office.email}
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 SK Classes. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CtaFooter;