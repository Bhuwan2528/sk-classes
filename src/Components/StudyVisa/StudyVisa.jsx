import React, { useEffect, useRef, useState } from "react";
import "./StudyVisa.css";
import axios from "axios";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// ✅ FALLBACK DATA (tera current static data)
const fallbackData = {
  sectionTitle: "Study Visa",
  sectionDescription:
    "Discover top global destinations and start your journey with expert guidance for a smooth and successful study visa process.",
  contact: {
    callNumber: "+919992888874",
    whatsappNumber: "919992888874",
  },
  items: [
    {
      title: "Study in UK",
      image:
        "https://t3.ftcdn.net/jpg/05/10/71/90/360_F_510719075_qeEoeE8pHYpHcgyy6wSdvx6Ozs843O6B.jpg",
    },
    {
      title: "Study in Australia",
      image:
        "https://img.freepik.com/premium-photo/downtown-sydney-skyline-australia-from-top-view-twilight_255553-249.jpg",
    },
    {
      title: "Study in Canada",
      image:
        "https://images.wallpapersden.com/image/download/toronto-hd-canada_bmVpZWWUmZqaraWkpJRoZWVlrWdnamU.jpg",
    },
    {
      title: "Study in USA",
      image:
        "https://getwallpapers.com/wallpaper/full/1/f/8/973924-best-wallpaper-usa-2560x1600-hd-for-mobile.jpg",
    },
    {
      title: "Study in Germany",
      image:
        "https://t3.ftcdn.net/jpg/00/84/15/38/360_F_84153835_k3tFP45bb2TVC9t4N84fpAo41cbNKzyv.jpg",
    },
    {
      title: "Study in Ireland",
      image:
        "https://media.istockphoto.com/id/641736118/photo/houses-and-catherdral-in-cobh-ireland.jpg",
    },
  ],
};

const StudyVisa = () => {
  const sliderRef = useRef(null);
  const [data, setData] = useState(null);

  // ✅ FETCH
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        if (res.data?.data?.studyVisa) {
          setData(res.data.data.studyVisa);
        } else {
          setData(fallbackData);
        }
      } catch {
        console.log("API failed → using fallback");
        setData(fallbackData);
      }
    };

    fetchData();
  }, []);

  // ✅ AUTO SCROLL (same tera logic)
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (!slider) return;

        scrollAmount += 0.9;
        slider.scrollLeft = scrollAmount;

        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0;
        }
      }, 20);
    };

    const stopAutoScroll = () => {
      clearInterval(interval);
    };

    startAutoScroll();

    // ✅ DESKTOP (mouse)  
    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    // ✅ MOBILE (touch)
    slider.addEventListener("touchstart", stopAutoScroll);
    slider.addEventListener("touchend", startAutoScroll);

    return () => {
      clearInterval(interval);
      slider.removeEventListener("mouseenter", stopAutoScroll);
      slider.removeEventListener("mouseleave", startAutoScroll);
      slider.removeEventListener("touchstart", stopAutoScroll);
      slider.removeEventListener("touchend", startAutoScroll);
    };
  }, []);

  // ✅ SAFE DATA
  const finalData = data || fallbackData;

  return (
    <section className="studyVisa">
      <div className="container">

        <h2>{finalData.sectionTitle}</h2>

        <p>{finalData.sectionDescription}</p>

        <div className="slider" ref={sliderRef}>
          {finalData.items?.map((item, index) => (
            <div className="card" key={index}>
              <div className="imgWrap">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="cardContent">
                <h3>{item.title}</h3>

                <div className="buttons">
                  
                  {/* ✅ CALL BUTTON */}
                  <a
                    href={`tel:${finalData.contact?.callNumber}`}
                    className="callBtn"
                  >
                    <FaPhoneAlt /> Call
                  </a>

                  {/* ✅ WHATSAPP BUTTON */}
                  <a
                    href={`https://wa.me/${finalData.contact?.whatsappNumber}`}
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