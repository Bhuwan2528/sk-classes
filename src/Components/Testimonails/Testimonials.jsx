import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import axios from "axios";

// ✅ FALLBACK DATA (your current static data split into 3 rows)
const fallbackData = {
  sectionTitle: "What Our Students Say",
  rows: [
    {
      items: [
        {
          name: "Aman Sharma",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          review:
            "SK Classes made my visa process smooth and stress-free. Highly recommended!",
        },
        {
          name: "Priya Verma",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          review:
            "Very supportive team. They guided me at every step perfectly.",
        },
      ],
    },
    {
      items: [
        {
          name: "Rahul Singh",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
          review:
            "Got my visa approved without any hassle. Amazing experience!",
        },
        {
          name: "Neha Gupta",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          review:
            "Best consultancy! Transparent and very professional.",
        },
      ],
    },
    {
      items: [
        {
          name: "Karan Mehta",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          review:
            "From IELTS to visa, everything was handled perfectly.",
        },
      ],
    },
  ],
};

const Testimonials = () => {
  const [data, setData] = useState(fallbackData);

  // ✅ FETCH API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        if (res.data?.data?.testimonials) {
          const apiData = res.data.data.testimonials;

          setData({
            sectionTitle:
              apiData.sectionTitle || fallbackData.sectionTitle,
            rows:
              apiData.rows?.length === 3
                ? apiData.rows
                : fallbackData.rows,
          });
        }
      } catch {
        // silent fallback (NO UI BREAK)
        console.log("Using fallback testimonials");
      }
    };

    fetchData();
  }, []);

  const rows = data?.rows || fallbackData.rows;

  return (
    <section className="testimonials">
      <div className="overlay"></div>

      <div className="test-container">
        <h2 className="heading">
          {data?.sectionTitle || fallbackData.sectionTitle}
        </h2>

        {/* ✅ ROW 1 */}
        <div className="marquee">
          <div className="track left">
            {[...(rows[0]?.items || []), ...(rows[0]?.items || [])].map(
              (t, i) => (
                <div className="test-card" key={i}>
                  <img src={t.image} alt={t.name} />
                  <div className="test-content">
                    <h4>{t.name}</h4>
                    <p>{t.review}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* ✅ ROW 2 */}
        <div className="marquee">
          <div className="track right">
            {[...(rows[1]?.items || []), ...(rows[1]?.items || [])].map(
              (t, i) => (
                <div className="test-card" key={i}>
                  <img src={t.image} alt={t.name} />
                  <div className="test-content">
                    <h4>{t.name}</h4>
                    <p>{t.review}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* ✅ ROW 3 */}
        <div className="marquee">
          <div className="track left">
            {[...(rows[2]?.items || []), ...(rows[2]?.items || [])].map(
              (t, i) => (
                <div className="test-card" key={i}>
                  <img src={t.image} alt={t.name} />
                  <div className="test-content">
                    <h4>{t.name}</h4>
                    <p>{t.review}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;