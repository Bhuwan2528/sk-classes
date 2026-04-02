import React, { useState, useEffect } from "react";
import {
  FiHome,
  FiFileText,
  FiLayers,
  FiGrid,
  FiMessageSquare,
  FiBarChart2,
  FiLogOut,
} from "react-icons/fi";

import AdminHero from "../../Admin/AdminForms/AdminHero";
import AdminAbout from "../../Admin/AdminForms/AdminAbout";
import AdminServices from "../../Admin/AdminForms/AdminServices";
import AdminStudyVisa from "../../Admin/AdminForms/AdminStudyVisa";
import AdminWhyChoose from "../../Admin/AdminForms/AdminWhyChoose";
import AdminTestimonials from "../../Admin/AdminForms/AdminTestimonials";
import AdminOtherServices from "../../Admin/AdminForms/AdminOtherServices";
import AdminEnquiryStats from "../../Admin/AdminForms/AdminEnquiryStats";
import AdminHeaderFooter from "../../Admin/AdminForms/AdminHeaderFooter";

import "./admin.css";

const AdminDashboard = () => {
  const [active, setActive] = useState("dashboard");
  const [isAuth, setIsAuth] = useState(null);

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  /* ================= LOGOUT ================= */
  const handleLogout = async () => {
    try {
      const res = await fetch(
        "https://sk-classes-backend.onrender.com/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (res.ok) {
        localStorage.removeItem("token");
        window.location.href = "/admin-login";
      } else {
        console.log("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  /* ================= PAGE RENDER ================= */
  const renderPage = () => {
    switch (active) {
      case "hero":
        return <AdminHero />;

      case "about":
        return <AdminAbout />;

      case "services":
        return <AdminServices />;

      case "studyVisa":
        return <AdminStudyVisa />;

      case "whyChoose":
        return <AdminWhyChoose />;

      case "testimonials":
        return <AdminTestimonials />;

      case "otherServices":
        return <AdminOtherServices />;

      case "enquiryStats":
        return <AdminEnquiryStats />;

      case "headerFooter":
        return <AdminHeaderFooter />;

      default:
        return (
          <div className="ap-dash">
            <h3>Admin Dashboard</h3>
            <p>Choose The Item From Sidebar To Continue</p>
          </div>
        );
    }
  };

  /* ================= AUTH STATES ================= */

  if (isAuth === null) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        Checking authentication...
      </div>
    );
  }

  if (!isAuth) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        🚫 No Access
      </div>
    );
  }

  /* ================= MAIN UI ================= */

  return (
    <div className="ap-container">
      {/* SIDEBAR */}
      <aside className="ap-sidebar">
        {/* LOGO */}
        <div className="ap-logo">
          <div className="ap-logo-box">SK</div>
          <div className="ap-logo-text">
            <span className="ap-logo-title">SK Classes</span>
            <span className="ap-logo-sub">Admin Panel</span>
          </div>
        </div>

        {/* NAV */}
        <nav className="ap-sidebar-nav">
          

          <button
            className={`ap-nav-item ${
              active === "headerFooter" ? "ap-active" : ""
            }`}
            onClick={() => setActive("headerFooter")}
          >
            <FiGrid className="ap-icon" />
            <span>Header & Footer</span>
          </button>

          <button
            className={`ap-nav-item ${
              active === "hero" ? "ap-active" : ""
            }`}
            onClick={() => setActive("hero")}
          >
            <FiLayers className="ap-icon" />
            <span>Hero Section</span>
          </button>

          <button
            className={`ap-nav-item ${
              active === "about" ? "ap-active" : ""
            }`}
            onClick={() => setActive("about")}
          >
            <FiFileText className="ap-icon" />
            <span>About Section</span>
          </button>

          <button
            className={`ap-nav-item ${
              active === "services" ? "ap-active" : ""
            }`}
            onClick={() => setActive("services")}
          >
            <FiLayers className="ap-icon" />
            <span>Services Section</span>
          </button>

          <button
            className={`ap-nav-item ${
              active === "studyVisa" ? "ap-active" : ""
            }`}
            onClick={() => setActive("studyVisa")}
          >
            <FiLayers className="ap-icon" />
            <span>Study Visa</span>
          </button>

          <button
            className={`ap-nav-item ${
              active === "whyChoose" ? "ap-active" : ""
            }`}
            onClick={() => setActive("whyChoose")}
          >
            <FiLayers className="ap-icon" />
            <span>Why Choose Us</span>
          </button>

          <button
            className={`ap-nav-item ${
              active === "testimonials" ? "ap-active" : ""
            }`}
            onClick={() => setActive("testimonials")}
          >
            <FiMessageSquare className="ap-icon" />
            <span>Testimonials</span>
          </button>

          <button
            className={`ap-nav-item ${
              active === "otherServices" ? "ap-active" : ""
            }`}
            onClick={() => setActive("otherServices")}
          >
            <FiLayers className="ap-icon" />
            <span>Other Services</span>
          </button>

          <button
            className={`ap-nav-item ${
              active === "enquiryStats" ? "ap-active" : ""
            }`}
            onClick={() => setActive("enquiryStats")}
          >
            <FiBarChart2 className="ap-icon" />
            <span>Enquiry & Stats</span>
          </button>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="ap-main">
        {/* TOPBAR */}
        <header className="ap-topbar">
          <div className="ap-title">Admin Panel</div>

          <button className="ap-logout" onClick={handleLogout}>
            <FiLogOut />
            Logout
          </button>
        </header>

        {/* CONTENT */}
        <section className="ap-content">{renderPage()}</section>
      </main>
    </div>
  );
};

export default AdminDashboard;


// jkjfnjnlfenvll