import React, { useEffect, useRef } from "react";
import "./StudyVisa.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const visaData = [
  {
    title: "Study in UK",
    img: "https://t3.ftcdn.net/jpg/05/10/71/90/360_F_510719075_qeEoeE8pHYpHcgyy6wSdvx6Ozs843O6B.jpg",
  },
  {
    title: "Study in Australia",
    img: "https://img.freepik.com/premium-photo/downtown-sydney-skyline-australia-from-top-view-twilight_255553-249.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Study in Canada",
    img: "https://images.wallpapersden.com/image/download/toronto-hd-canada_bmVpZWWUmZqaraWkpJRoZWVlrWdnamU.jpg",
  },
  {
    title: "Study in USA",
    img: "https://getwallpapers.com/wallpaper/full/1/f/8/973924-best-wallpaper-usa-2560x1600-hd-for-mobile.jpg",
  },
  {
    title: "Study in Germany",
    img: "https://t3.ftcdn.net/jpg/00/84/15/38/360_F_84153835_k3tFP45bb2TVC9t4N84fpAo41cbNKzyv.jpg",
  },
  {
    title: "Study in Ireland",
    img: "https://media.istockphoto.com/id/641736118/photo/houses-and-catherdral-in-cobh-ireland.jpg?s=612x612&w=0&k=20&c=dTQbo6doEK9vJyW1MnOy67q-WtH8Odnkd1SY0UpNgV0=",
  },
];

const StudyVisa = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (!slider) return;

      scrollAmount += 0.4;
      slider.scrollLeft = scrollAmount;

      // loop reset
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(autoScroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="studyVisa">
      <div className="container">
        <h2>Study Visa</h2>
        <p>
          Discover top global destinations and start your journey with expert
          guidance for a smooth and successful study visa process.
        </p>

        <div className="slider" ref={sliderRef}>
          {visaData.map((item, index) => (
            <div className="card" key={index}>
              <div className="imgWrap">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="cardContent">
                <h3>{item.title}</h3>

                <div className="buttons">
                  <a href="tel:+919999999999" className="callBtn">
                    <FaPhoneAlt /> Call
                  </a>

                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsappBtn"
                  >
                    <FaWhatsapp /> Enquire
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

export default StudyVisa;