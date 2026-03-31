import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import CtaFooter from "../../Components/CtaFooter/CtaFooter";
import axios from "axios";

const defaultData = {
  footer: {
    office: {
      address: "Near Old Over Bridge Kathmandi, Hisar",
      phone: "+91-9992888874",
      email: "info@example.com",
    },
  },
  cta: {
    whatsappNumber: "919992888874",
  },
};

const Contact = () => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/header-footer");

        if (res.data?.data) {
          setData({
            ...defaultData,
            ...res.data.data,
          });
        }
      } catch (err) {
        console.log("Contact fetch error", err);
      }
    };

    fetchData();
  }, []);

  const { footer, cta } = data;

  // 🔥 fallback-safe values
  const phone =
    footer?.office?.phone || defaultData.footer.office.phone;

  const cleanPhone =
    phone?.replace(/\D/g, "") || defaultData.footer.office.phone;

  const whatsappNumber =
    cta?.whatsappNumber ||
    cleanPhone ||
    defaultData.cta.whatsappNumber;

  const address =
    footer?.office?.address || defaultData.footer.office.address;

  // ✅ WhatsApp form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const userPhone = form.phone.value;
    const message = form.message.value;

    const whatsappMessage = `*New Enquiry from Website*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${userPhone}
*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");

    form.reset();
  };

  return (
    <>
      <Header bg={true} />
      <Banner title={"Contact"} />

      <section className="contact">
        <div className="container">

          {/* TOP CARDS */}
          <div className="contact-cards">

            <div className="contact-card">
              <div className="icon"><FaPhoneAlt /></div>
              <h3>Call Us</h3>
              <p>{phone}</p>
            </div>

            <div className="contact-card">
              <div className="icon"><FaMapMarkerAlt /></div>
              <h3>Our Location</h3>
              <p>{address}</p>
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

              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required 
                />

                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  required 
                />

                <input 
                  type="text" 
                  name="phone"
                  placeholder="Phone Number" 
                  required 
                />

                <textarea 
                  name="message"
                  placeholder="Your Message"
                ></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>

            {/* MAP */}
            <div className="contact-map">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                title="map"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      <CtaFooter />
    </>
  );
};

export default Contact;