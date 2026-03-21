import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aman Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "SK Classes made my visa process smooth and stress-free. Highly recommended!",
  },
  {
    name: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Very supportive team. They guided me at every step perfectly.",
  },
  {
    name: "Rahul Singh",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    review: "Got my visa approved without any hassle. Amazing experience!",
  },
  {
    name: "Neha Gupta",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review: "Best consultancy! Transparent and very professional.",
  },
  {
    name: "Karan Mehta",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review: "From IELTS to visa, everything was handled perfectly.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="overlay"></div>

      <div className="test-container">
        <h2 className="heading">What Our Students Say</h2>

        {/* ROW 1 */}
        <div className="marquee">
          <div className="track left">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="test-card" key={i}>
                <img src={t.image} alt={t.name} />
                <div className="test-content">
                  <h4>{t.name}</h4>
                  <p>{t.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="marquee">
          <div className="track right">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="test-card" key={i}>
                <img src={t.image} alt={t.name} />
                <div className="test-content">
                  <h4>{t.name}</h4>
                  <p>{t.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3 */}
        <div className="marquee">
          <div className="track left">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="test-card" key={i}>
                <img src={t.image} alt={t.name} />
                <div className="test-content">
                  <h4>{t.name}</h4>
                  <p>{t.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;