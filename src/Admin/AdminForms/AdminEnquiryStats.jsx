import React, { useState, useEffect } from "react";
import "./AdminForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const defaultData = {
  formSection: {
    heading: "",
    description: "",
    whatsappNumber: "",
    points: [{ text: "" }],
  },

  statsSection: {
    items: [
      { end: "", suffix: "+", label: "" },
      { end: "", suffix: "+", label: "" },
      { end: "", suffix: "+", label: "" },
      { end: "", suffix: "+", label: "" },
    ],
  },
};

const AdminEnquiryStats = () => {
  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        const data = res.data?.data;

        setFormData({
          formSection: {
            heading: data?.formSection?.heading || "",
            description: data?.formSection?.description || "",
            whatsappNumber:
              data?.formSection?.whatsappNumber || "",

            points:
              data?.formSection?.points?.length > 0
                ? data.formSection.points
                : defaultData.formSection.points,
          },

          statsSection: {
            items: [
              data?.statsSection?.items?.[0] ||
                defaultData.statsSection.items[0],
              data?.statsSection?.items?.[1] ||
                defaultData.statsSection.items[1],
              data?.statsSection?.items?.[2] ||
                defaultData.statsSection.items[2],
              data?.statsSection?.items?.[3] ||
                defaultData.statsSection.items[3],
            ],
          },
        });
      } catch {
        toast.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  // ✅ CHANGE HANDLER
  const handleChange = (e, path) => {
    const value = e.target.value;

    setFormData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let ref = updated;

      for (let i = 0; i < path.length - 1; i++) {
        ref = ref[path[i]];
      }

      ref[path[path.length - 1]] = value;
      return updated;
    });
  };

  // ✅ ADD POINT
  const addPoint = () => {
    setFormData((prev) => ({
      ...prev,
      formSection: {
        ...prev.formSection,
        points: [...prev.formSection.points, { text: "" }],
      },
    }));
  };

  // ✅ REMOVE POINT
  const removePoint = (index) => {
    const updated = [...formData.formSection.points];
    updated.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      formSection: {
        ...prev.formSection,
        points: updated.length
          ? updated
          : defaultData.formSection.points,
      },
    }));
  };

  // ✅ SUBMIT
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/home/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Enquiry & Stats Updated ");
    } catch {
      toast.error("Error saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-heading">Enquiry + Stats Section</h1>

      {/* ✅ FORM SECTION */}
      <div className="card">
        <h2>Form Right Content</h2>

        <textarea
          placeholder="Heading (HTML allowed)"
          value={formData.formSection.heading}
          onChange={(e) =>
            handleChange(e, ["formSection", "heading"])
          }
        />

        <textarea
          placeholder="Description"
          value={formData.formSection.description}
          onChange={(e) =>
            handleChange(e, ["formSection", "description"])
          }
        />

        <input
          placeholder="WhatsApp Number"
          value={formData.formSection.whatsappNumber}
          onChange={(e) =>
            handleChange(e, ["formSection", "whatsappNumber"])
          }
        />

        {/* POINTS */}
        <h3 style={{ marginTop: "20px" }}>Points</h3>

        {formData.formSection.points.map((point, index) => (
          <div className="image-row" key={index}>
            <input
              placeholder={`Point ${index + 1}`}
              value={point.text}
              onChange={(e) =>
                handleChange(e, [
                  "formSection",
                  "points",
                  index,
                  "text",
                ])
              }
            />

            <button
              className="remove-btn"
              onClick={() => removePoint(index)}
            >
              ✕
            </button>
          </div>
        ))}

        <button className="add-btn" onClick={addPoint}>
          + Add Point
        </button>
      </div>

      {/* ✅ STATS SECTION */}
      <div className="card">
        <h2>Stats Section</h2>

        {formData.statsSection.items.map((stat, index) => (
          <div className="grid-3" key={index}>
            <input
              placeholder="Number (1500)"
              value={stat.end}
              onChange={(e) =>
                handleChange(e, [
                  "statsSection",
                  "items",
                  index,
                  "end",
                ])
              }
            />

            <input
              placeholder="Suffix (+, %)"
              value={stat.suffix}
              onChange={(e) =>
                handleChange(e, [
                  "statsSection",
                  "items",
                  index,
                  "suffix",
                ])
              }
            />

            <input
              placeholder="Label"
              value={stat.label}
              onChange={(e) =>
                handleChange(e, [
                  "statsSection",
                  "items",
                  index,
                  "label",
                ])
              }
            />
          </div>
        ))}
      </div>

      <button className="save-btn" onClick={handleSubmit}>
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default AdminEnquiryStats;