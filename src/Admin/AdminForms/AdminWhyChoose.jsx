import React, { useState, useEffect } from "react";
import "./AdminForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const defaultData = {
  whyChoose: {
    tag: "",
    sectionTitle: "",
    sectionDescription: "",
    button: {
      text: "",
      url: "",
    },
    features: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
  },
};

const AdminWhyChoose = () => {
  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH + SAFE MERGE
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://sk-classes-backend.onrender.com/api/home");

        if (res.data?.data?.whyChoose) {
          const incoming = res.data.data.whyChoose;

          setFormData({
            whyChoose: {
              tag: incoming.tag || "",
              sectionTitle: incoming.sectionTitle || "",
              sectionDescription: incoming.sectionDescription || "",

              button: {
                text: incoming.button?.text || "",
                url: incoming.button?.url || "",
              },

              // ✅ ALWAYS 4 FEATURES
              features:
                incoming.features?.length === 4
                  ? incoming.features
                  : defaultData.whyChoose.features,
            },
          });
        }
      } catch {
        toast.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  // ✅ CHANGE HANDLER (PATH BASED)
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

  // ✅ SUBMIT ONLY WHYCHOOSE
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "https://sk-classes-backend.onrender.com/api/home/update",
        { whyChoose: formData.whyChoose },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Why Choose Updated ");
    } catch {
      toast.error("Error saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-heading">Why Choose Section</h1>

      <div className="card">
        <h2>Section Content</h2>

        {/* TAG */}
        <input
          placeholder="Tag (SK CLASSES)"
          value={formData.whyChoose.tag}
          onChange={(e) => handleChange(e, ["whyChoose", "tag"])}
        />

        {/* TITLE */}
        <textarea
          placeholder="Heading (HTML allowed)"
          value={formData.whyChoose.sectionTitle}
          onChange={(e) =>
            handleChange(e, ["whyChoose", "sectionTitle"])
          }
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Description"
          value={formData.whyChoose.sectionDescription}
          onChange={(e) =>
            handleChange(e, ["whyChoose", "sectionDescription"])
          }
        />

        {/* BUTTON */}
        <h3 style={{ marginTop: "20px" }}>Button</h3>

        <div className="grid-2">
          <input
            placeholder="Button Text"
            value={formData.whyChoose.button.text}
            onChange={(e) =>
              handleChange(e, ["whyChoose", "button", "text"])
            }
          />
          <input
            placeholder="Button URL"
            value={formData.whyChoose.button.url}
            onChange={(e) =>
              handleChange(e, ["whyChoose", "button", "url"])
            }
          />
        </div>

        {/* FEATURES (FIXED 4) */}
        <h3 style={{ marginTop: "20px" }}>Features (4 Cards)</h3>

        {formData.whyChoose.features.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <h4>Card {index + 1}</h4>

            <input
              placeholder="Title"
              value={item.title}
              onChange={(e) =>
                handleChange(e, [
                  "whyChoose",
                  "features",
                  index,
                  "title",
                ])
              }
            />

            <textarea
              placeholder="Description"
              value={item.description}
              onChange={(e) =>
                handleChange(e, [
                  "whyChoose",
                  "features",
                  index,
                  "description",
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

export default AdminWhyChoose;