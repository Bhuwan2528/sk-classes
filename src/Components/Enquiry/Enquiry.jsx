import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    visa: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello SK Classes,%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Address: ${form.address}%0A
Interested In: ${form.visa}%0A
Message: ${form.message}`;

    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
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
          <h2>
            Start Your <span>Study Abroad Journey</span> Today
          </h2>

          <p>
            Choosing the right consultancy can make all the difference. At SK
            Classes, we provide expert guidance, transparent processes, and
            complete support from IELTS preparation to visa approval.
          </p>

          <ul>
            <li>✔ 7+ Years of Experience</li>
            <li>✔ High Visa Success Rate</li>
            <li>✔ Personalized Guidance</li>
            <li>✔ Trusted by 1000+ Students</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Enquiry;