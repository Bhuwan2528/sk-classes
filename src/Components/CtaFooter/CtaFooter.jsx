import React from "react";
import "./CtaFooter.css";
import girlImg from "../../assets/girl.png"; // tumhari image
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from '../../assets/logo.png'

const CtaFooter = () => {
  return (
    <div className="cta-footer-wrapper">

      {/* CTA SECTION */}
      <div className="cta-section">
        <div className="cta-content">

          <div className="cta-left">
            <h2>
              Ready To Start Your <br /> Study Abroad Journey?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea enim impedit, consequatur eum autem ex eaque reprehenderit? Numquam incidunt nulla explicabo dolorem. Quidem error porro nam animi aliquam nihil.
            </p>

            <div className="cta-dual">
              <button
                className="cta-btn call-btn"
                onClick={() => window.location.href = "tel:+919999999999"}
              >
                <FaPhoneAlt /> Call Now
              </button>

              <button
                className="cta-btn whatsapp-btn"
                onClick={() =>
                  window.open(
                    "https://wa.me/919999999999?text=Hello SK Classes, I want to enquire about your services",
                    "_blank"
                  )
                }
              >
                <FaWhatsapp/> Enquire on WhatsApp
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
            Helping students achieve global education goals with expert guidance.
        </p>

        <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
        </div>
        </div>

        {/* COL 2 */}
        <div className="footer-col col2">
        <h4>Quick Links</h4>
        <ul>
            <li>About Us</li>
            <li>IELTS</li>
            <li>PTE</li>
            <li>Spoken English</li>
            <li>Spouse Visa</li>
            <li>Contact</li>
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

        {/* COL 4 */}
        <div className="footer-col">
        <h4>Office</h4>
        <p>
            Near Old Over Bridge Kathmandi, <br />
            Opposite Red Square Market Hisar.
        </p>
        <p>+91- 99928-88874</p>
        <p>nagpal.kuldeep@gmail.com</p>
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