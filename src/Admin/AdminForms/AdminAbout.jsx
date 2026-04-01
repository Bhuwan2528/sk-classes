import React, { useEffect, useState } from "react";
import "./AdminForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const defaultData = {
  about: {
    image: "",
    experience: {
      years: "",
      label: "",
    },
    heading: "",
    description: "",
    button: {
      text: "",
      link: "",
    },
    vmg: {
      vision: { title: "", description: "" },
      mission: { title: "", description: "" },
      goal: { title: "", description: "" },
    },
  },
};

const AdminAbout = () => {
  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  // FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://sk-classes-backend.onrender.com/api/home");

        if (res.data?.data) {
          setFormData({
            ...defaultData,
            about: {
              ...defaultData.about,
              ...res.data.data.about, // 🔥 FIX
            },
          });
        }
      } catch {
        toast.error("Error fetching about data");
      }
    };

    fetchData();
  }, []);

  // HANDLE CHANGE (DEEP)
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

  // SUBMIT (PARTIAL UPDATE)
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "https://sk-classes-backend.onrender.com/api/home/update",
        {
          about: formData.about, // 🔥 direct
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("About Updated ");
    } catch {
      toast.error("Error saving about");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-heading">About Section</h1>

      <div className="card">
        <h2>About Content</h2>

        {/* IMAGE */}
        <input
          placeholder="Image URL"
          value={formData.about.image || ""}
          onChange={(e) => handleChange(e, ["about", "image"])}
        />

        {/* EXPERIENCE BADGE */}
        <div className="grid-2">
          <input
            placeholder="Experience Years (e.g. 10+ Years)"
            value={formData.about.experience?.years || ""}
            onChange={(e) =>
              handleChange(e, ["about", "experience", "years"])
            }
          />

          <input
            placeholder="Experience Label (e.g. Experience)"
            value={formData.about.experience?.label || ""}
            onChange={(e) =>
              handleChange(e, ["about", "experience", "label"])
            }
          />
        </div>

        {/* HEADING */}
        <textarea
        placeholder="Heading (HTML allowed)"
        value={formData.about.heading || ""}
        onChange={(e) => handleChange(e, ["about", "heading"])}
        />

        <textarea
        placeholder="Description (HTML allowed)"
        value={formData.about.description || ""}
        onChange={(e) => handleChange(e, ["about", "description"])}
        />

        {/* BUTTON */}
        <h3 style={{ marginTop: "15px" }}>Button</h3>

        <div className="grid-2">
          <input
            placeholder="Button Text"
            value={formData.about.button?.text || ""}
            onChange={(e) =>
              handleChange(e, ["about", "button", "text"])
            }
          />

          <input
            placeholder="Button Link"
            value={formData.about.button?.link || ""}
            onChange={(e) =>
              handleChange(e, ["about", "button", "link"])
            }
          />
        </div>

        {/* VMG */}
        <h3 style={{ marginTop: "20px" }}>Vision</h3>
        <input
          placeholder="Vision Title"
          value={formData.about.vmg?.vision?.title || ""}
          onChange={(e) =>
            handleChange(e, ["about", "vmg", "vision", "title"])
          }
        />
        <textarea
          placeholder="Vision Description"
          value={formData.about.vmg?.vision?.description || ""}
          onChange={(e) =>
            handleChange(e, ["about", "vmg", "vision", "description"])
          }
        />

        <h3 style={{ marginTop: "20px" }}>Mission</h3>
        <input
          placeholder="Mission Title"
          value={formData.about.vmg?.mission?.title || ""}
          onChange={(e) =>
            handleChange(e, ["about", "vmg", "mission", "title"])
          }
        />
        <textarea
          placeholder="Mission Description"
          value={formData.about.vmg?.mission?.description || ""}
          onChange={(e) =>
            handleChange(e, ["about", "vmg", "mission", "description"])
          }
        />

        <h3 style={{ marginTop: "20px" }}>Goal</h3>
        <input
          placeholder="Goal Title"
          value={formData.about.vmg?.goal?.title || ""}
          onChange={(e) =>
            handleChange(e, ["about", "vmg", "goal", "title"])
          }
        />
        <textarea
          placeholder="Goal Description"
          value={formData.about.vmg?.goal?.description || ""}
          onChange={(e) =>
            handleChange(e, ["about", "vmg", "goal", "description"])
          }
        />
      </div>

      <button className="save-btn" onClick={handleSubmit}>
        {loading ? "Saving..." : "Save About"}
      </button>
    </div>
  );
};

export default AdminAbout;