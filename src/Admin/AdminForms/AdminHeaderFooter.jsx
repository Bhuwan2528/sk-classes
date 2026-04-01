import React, { useState, useEffect } from "react";
import "./AdminForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const defaultData = {
  header: {
    phone: "",
    email: "",
    socialLinks: {
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
    },
  },
  cta: {
    heading: "",
    description: "",
    callNumber: "",
    whatsappNumber: "",
  },
  footer: {
    description: "",
    quickLinks: {
      link1: { title: "", url: "" },
      link2: { title: "", url: "" },
      link3: { title: "", url: "" },
      link4: { title: "", url: "" },
      link5: { title: "", url: "" },
      link6: { title: "", url: "" },
    },
    office: {
      address: "",
      phone: "",
      email: "",
    },
  },
};

const AdminHeaderFooter = () => {
  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH FIXED
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://sk-classes-backend.onrender.com/api/header-footer");

        if (res.data?.data) {
          setFormData({
            ...defaultData,
            ...res.data.data,
          });
        }
      } catch {
        alert("Error fetching data");
      }
    };

    fetchData();
  }, []);

  // CHANGE HANDLER
  const handleChange = (e, path) => {
    const value = e.target.value;

    setFormData((prev) => {
      const updated = structuredClone(prev);
      let ref = updated;

      for (let i = 0; i < path.length - 1; i++) {
        ref = ref[path[i]];
      }

      ref[path[path.length - 1]] = value;
      return updated;
    });
  };

  // SUBMIT
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "https://sk-classes-backend.onrender.com/api/header-footer/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Saved successfully ");
    } catch {
      alert("Error saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-heading">Header • CTA • Footer</h1>

      {/* HEADER */}
      <div className="card">
        <h2>Header</h2>

        <div className="grid-2">
          <input
            placeholder="Phone"
            value={formData.header?.phone || ""}
            onChange={(e) => handleChange(e, ["header", "phone"])}
          />
          <input
            placeholder="Email"
            value={formData.header?.email || ""}
            onChange={(e) => handleChange(e, ["header", "email"])}
          />
        </div>

        <div className="grid-4">
          <input
            placeholder="Facebook URL"
            value={formData.header?.socialLinks?.facebook || ""}
            onChange={(e) =>
              handleChange(e, ["header", "socialLinks", "facebook"])
            }
          />

          <input
            placeholder="Instagram URL"
            value={formData.header?.socialLinks?.instagram || ""}
            onChange={(e) =>
              handleChange(e, ["header", "socialLinks", "instagram"])
            }
          />

          <input
            placeholder="Twitter URL"
            value={formData.header?.socialLinks?.twitter || ""}
            onChange={(e) =>
              handleChange(e, ["header", "socialLinks", "twitter"])
            }
          />

          <input
            placeholder="LinkedIn URL"
            value={formData.header?.socialLinks?.linkedin || ""}
            onChange={(e) =>
              handleChange(e, ["header", "socialLinks", "linkedin"])
            }
          />
        </div>
      </div>

      {/* CTA */}
      <div className="card">
        <h2>CTA Section</h2>

        <input
          placeholder="Heading"
          value={formData.cta?.heading || ""}
          onChange={(e) => handleChange(e, ["cta", "heading"])}
        />

        <textarea
          placeholder="Description"
          value={formData.cta?.description || ""}
          onChange={(e) => handleChange(e, ["cta", "description"])}
        />

        <div className="grid-2">
          <input
            placeholder="Call Number - without space and special character"
            value={formData.cta?.callNumber || ""}
            onChange={(e) => handleChange(e, ["cta", "callNumber"])}
          />
          <input
            placeholder="WhatsApp Number - without space and special character"
            value={formData.cta?.whatsappNumber || ""}
            onChange={(e) =>
              handleChange(e, ["cta", "whatsappNumber"])
            }
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="card">
        <h2>Footer</h2>

        <textarea
          placeholder="Footer Description"
          value={formData.footer?.description || ""}
          onChange={(e) => handleChange(e, ["footer", "description"])}
        />

        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div className="grid-2" key={num}>
            <input
              placeholder={`Link ${num} Title`}
              value={
                formData.footer?.quickLinks?.[`link${num}`]?.title || ""
              }
              onChange={(e) =>
                handleChange(e, [
                  "footer",
                  "quickLinks",
                  `link${num}`,
                  "title",
                ])
              }
            />
            <input
              placeholder={`Link ${num} URL`}
              value={
                formData.footer?.quickLinks?.[`link${num}`]?.url || ""
              }
              onChange={(e) =>
                handleChange(e, [
                  "footer",
                  "quickLinks",
                  `link${num}`,
                  "url",
                ])
              }
            />
          </div>
        ))}

        <div className="grid-3">
          <input
            placeholder="Office Address"
            value={formData.footer?.office?.address || ""}
            onChange={(e) =>
              handleChange(e, ["footer", "office", "address"])
            }
          />
          <input
            placeholder="Office Phone"
            value={formData.footer?.office?.phone || ""}
            onChange={(e) =>
              handleChange(e, ["footer", "office", "phone"])
            }
          />
          <input
            placeholder="Office Email"
            value={formData.footer?.office?.email || ""}
            onChange={(e) =>
              handleChange(e, ["footer", "office", "email"])
            }
          />
        </div>
      </div>

      <button className="save-btn" onClick={handleSubmit}>
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default AdminHeaderFooter;