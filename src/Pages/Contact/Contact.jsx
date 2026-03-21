import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";

const Contact = () => {
  return (
    <>

    <Header bg={true}/>
    <Banner title={"Contact"}/>
    <section className="contact">

      <div className="container">

        {/* TOP CARDS */}
        <div className="contact-cards">

          <div className="contact-card">
            <div className="icon"><FaPhoneAlt /></div>
            <h3>Call Us</h3>
            <p>+91 99928-88874</p>
          </div>

          <div className="contact-card">
            <div className="icon"><FaMapMarkerAlt /></div>
            <h3>Our Location</h3>
            <p>Near Old Over Bridge Kathmandi, Hisar</p>
          </div>

          <div className="contact-card">
            <div className="icon"><FaClock /></div>
            <h3>Working Hours</h3>
            <p>Mon - Sat : 9 AM - 6 PM</p>
          </div>

        </div>

        {/* FORM + MAP */}
        <div className="contact-main">

          {/* FORM */}
          <div className="contact-form">
            <h2>Get In Touch</h2>

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />
              <textarea placeholder="Your Message"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* MAP */}
          <div className="contact-map">
            <iframe
              src="https://maps.google.com/maps?q=hisar&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>

    </section>
    <CtaFooter/>
    </>
  );
};

export default Contact;