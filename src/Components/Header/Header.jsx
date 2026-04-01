import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import axios from "axios";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ bg }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(bg);

  const [headerData, setHeaderData] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();

  const toggleDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  // ================= FETCH DATA =================
  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/header-footer");
        if (res.data.data?.header) {
          setHeaderData(res.data.data.header);
        }
      } catch (err) {
        console.log("Header fetch error");
      }
    };

    fetchHeader();
  }, []);

  // ================= SCROLL =================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(bg || window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="top-left">
          <span>
            <FaPhoneAlt /> {headerData?.phone || "+91-99928-88874"}
          </span>
          <span>
            <FaEnvelope /> {headerData?.email || "nagpal.kuldeep@gmail.com"}
          </span>
        </div>

        <div className="top-right">
          <FaFacebookF
            onClick={() =>
              window.open(headerData?.socialLinks?.facebook, "facebook.com")
            }
          />
          <FaInstagram
            onClick={() =>
              window.open(headerData?.socialLinks?.instagram, "instagram.com")
            }
          />
          <FaLinkedinIn
            onClick={() =>
              window.open(headerData?.socialLinks?.linkedin, "linkedin.com")
            }
          />
        </div>
      </div>

      {/* NAVBAR */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">

          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
          </div>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>

            <a href="/">Home</a>
            <a href="/about">About Us</a>

            {/* Study Visa */}
            <div className="nav-item">
              <div className="nav-link" onClick={() => toggleDropdown("study")}>
                Study Visa <FaChevronDown className="arrow" />
              </div>
              <div className={`dropdown ${mobileDropdown === "study" ? "show" : ""}`}>
                <a href="/study-in-canada">Canada</a>
                <a href="/study-in-australia">Australia</a>
                <a href="/study-in-uk">UK</a>
                <a href="/study-in-usa">USA</a>
                <a href="/study-in-new-zealand">New Zealand</a>
                <a href="/study-in-europe">Europe</a>
              </div>
            </div>

            {/* IELTS */}
            <div className="nav-item">
              <div className="nav-link" onClick={() => toggleDropdown("ielts")}>
                IELTS <FaChevronDown className="arrow" />
              </div>
              <div className={`dropdown ${mobileDropdown === "ielts" ? "show" : ""}`}>
                <a href="/ielts">IELTS</a>
                <a href="/band-score">Overall Band Score</a>
              </div>
            </div>

            {/* PTE */}
            <div className="nav-item">
              <div className="nav-link" onClick={() => toggleDropdown("pte")}>
                PTE <FaChevronDown className="arrow" />
              </div>
              <div className={`dropdown ${mobileDropdown === "pte" ? "show" : ""}`}>
                <a href="/pte">PTE</a>
                <a href="/pte-benifits">Benefits of PTE</a>
              </div>
            </div>

            {/* Other */}
            <div className="nav-item">
              <div className="nav-link" onClick={() => toggleDropdown("other")}>
                Other Services <FaChevronDown className="arrow" />
              </div>
              <div className={`dropdown ${mobileDropdown === "other" ? "show" : ""}`}>
                <a href="/spoken-english">Spoken English</a>
                <a href="/spouse-visa">Spouse Visa</a>
              </div>
            </div>

            <a href="/contact">Contact Us</a>

          </nav>

          {/* HAMBURGER */}
          <div className={`menu-btn ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;