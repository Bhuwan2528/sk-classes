import React, { useEffect, useState } from "react";
import "./AdminForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const defaultData = {
  services: {
    sectionTitle: "",
    sectionSubtitle: "",
    items: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
  },
};

const AdminServices = () => {
  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://sk-classes-backend.onrender.com/api/home");

        if (res.data?.data) {
          const services = res.data.data.services || {};

          setFormData({
            services: {
              sectionTitle: services.sectionTitle || "",
              sectionSubtitle: services.sectionSubtitle || "",
              items: services.items?.length === 6
                ? services.items
                : defaultData.services.items, // fallback
            },
          });
        }
      } catch {
        toast.error("Error fetching services");
      }
    };

    fetchData();
  }, []);

  // ✅ HANDLE CHANGE (deep)
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

  // ✅ SUBMIT
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "https://sk-classes-backend.onrender.com/api/home/update",
        {
          services: formData.services,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Services Updated ");
    } catch {
      toast.error("Error saving services");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-heading">Services Section</h1>

      <div className="card">
        <h2>Section Content</h2>

        <input
          placeholder="Section Title"
          value={formData.services.sectionTitle}
          onChange={(e) =>
            handleChange(e, ["services", "sectionTitle"])
          }
        />

        <textarea
          placeholder="Section Subtitle"
          value={formData.services.sectionSubtitle}
          onChange={(e) =>
            handleChange(e, ["services", "sectionSubtitle"])
          }
        />

        <h2 style={{ marginTop: "20px" }}>6 Service Cards</h2>

        {formData.services.items.map((item, index) => (
          <div key={index} className="card" style={{ marginTop: "15px" }}>
            <h3>Service {index + 1}</h3>

            <input
              placeholder="Title"
              value={item.title}
              onChange={(e) =>
                handleChange(e, ["services", "items", index, "title"])
              }
            />

            <textarea
              placeholder="Description"
              value={item.description}
              onChange={(e) =>
                handleChange(e, ["services", "items", index, "description"])
              }
            />
          </div>
        ))}
      </div>

      <button className="save-btn" onClick={handleSubmit}>
        {loading ? "Saving..." : "Save Services"}
      </button>
    </div>
  );
};

export default AdminServices;