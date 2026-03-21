import React from "react";
import "./DetailPage.css";

const DetailPage = ({ title, image }) => {
  return (
    <section className="detail">
      <div className="detail-container">

        {/* IMAGE */}
        <div className="detail-image">
          <img src="https://e0.pxfuel.com/wallpapers/401/742/desktop-wallpaper-ielts-student-college.jpg" alt={title} />
        </div>

        {/* CONTENT */}
        <div className="detail-content">
          <h1></h1>

          <p className="intro">
            IELTS is one of the most important steps for students planning to
            study abroad. A good score can open doors to top universities and
            global opportunities.
          </p>

          <h2>What is IELTS?</h2>
          <p>
            The International English Language Testing System (IELTS) evaluates
            your English proficiency across four key skills: Listening,
            Reading, Writing, and Speaking.
          </p>

          <h2>Why is IELTS Important?</h2>
          <ul className="checklist">
            <li>Required for study visa applications</li>
            <li>Accepted globally by universities</li>
            <li>Improves communication skills</li>
            <li>Boosts chances of visa approval</li>
          </ul>

          {/* Highlight Box */}
          <div className="highlight">
            <p>
              💡 Tip: Scoring above 6.5 significantly increases your chances of
              admission to top universities.
            </p>
          </div>

          <h2>How SK Classes Helps You</h2>
          <p>
            At SK Classes, we provide expert guidance, personalized training,
            and real exam strategies to help you achieve your target band score.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DetailPage;