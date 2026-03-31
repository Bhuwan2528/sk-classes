import React, { useState, useEffect } from "react";
import "./Enquiry.css";
import axios from "axios";

const fallbackData = {
  heading: "Start Your <span>Study Abroad Journey</span> Today",
  description:
    "Choosing the right consultancy can make all the difference. At SK Classes, we provide expert guidance, transparent processes, and complete support from IELTS preparation to visa approval.",

  whatsappNumber: "919992888874",

  points: [
    { text: "7+ Years of Experience" },
    { text: "High Visa Success Rate" },
    { text: "Personalized Guidance" },
    { text: "Trusted by 1000+ Students" },
  ],
};

const Enquiry = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    visa: "",
    message: "",
  });

  const [data, setData] = useState(fallbackData);

  // ✅ FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        if (res.data?.data?.formSection) {
          const incoming = res.data.data.formSection;

          setData({
            heading: incoming.heading || fallbackData.heading,
            description:
              incoming.description || fallbackData.description,

            whatsappNumber:
              incoming.whatsappNumber ||
              fallbackData.whatsappNumber,

            points:
              incoming.points?.length > 0
                ? incoming.points
                : fallbackData.points,
          });
        }
      } catch {
        console.log("Using fallback enquiry data");
      }
    };

    fetchData();
  }, []);

  // FORM CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ WHATSAPP SUBMIT (SMART HANDLING)
  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanNumber = data.whatsappNumber?.replace("+", "");

    const text = `Hello SK Classes,%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Address: ${form.address}%0A
Interested In: ${form.visa}%0A
Message: ${form.message}`;

    window.open(`https://wa.me/${cleanNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="enquiry">
      <div className="enquiry-container">

        {/* LEFT FORM */}
        <div className="form-box">
          <h3>Book Free Consultation</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Your City / Address"
              onChange={handleChange}
            />

            <input
              type="text"
              name="visa"
              placeholder="Interested In (Study Visa / IELTS / PTE)"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Write your query..."
              rows="4"
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send on WhatsApp →</button>
          </form>
        </div>

        {/* RIGHT CONTENT */}
        <div className="content-box">
          
          {/* ✅ HTML RENDER */}
          <h2
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />

          <p>{data.description}</p>

          <ul>
            {data.points.map((point, index) => (
              <li key={index}>{point.text}</li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
};

export default Enquiry;