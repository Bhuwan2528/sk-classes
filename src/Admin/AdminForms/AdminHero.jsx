import React, { useState, useEffect } from "react";
import "./AdminForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const defaultData = {
  hero: {
    heading: "",
    description: "",
    buttons: [
      { text: "", url: "" },
      { text: "", url: "" },
    ],
    images: [""],
    stats: [
      { number: "", label: "" },
      { number: "", label: "" },
      { number: "", label: "" },
    ],
  },
};

const AdminHero = () => {
  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  // ✅ FIXED FETCH (DEEP MERGE)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://sk-classes-backend.onrender.com/api/home");

        if (res.data?.data?.hero) {
          const incoming = res.data.data.hero;

          setFormData({
            hero: {
              heading: incoming.heading || "",
              description: incoming.description || "",

              // ✅ buttons fix (always 2)
              buttons:
                incoming.buttons?.length >= 2
                  ? incoming.buttons
                  : defaultData.hero.buttons,

              // ✅ images fix
              images:
                incoming.images?.length > 0
                  ? incoming.images
                  : defaultData.hero.images,

              // ✅ stats fix
              stats:
                incoming.stats?.length > 0
                  ? incoming.stats
                  : defaultData.hero.stats,
            },
          });
        }
      } catch {
        toast.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  // CHANGE HANDLER
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

  // IMAGE ADD
  const addImage = () => {
    setFormData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        images: [...prev.hero.images, ""],
      },
    }));
  };

  // IMAGE REMOVE
  const removeImage = (index) => {
    const updated = [...formData.hero.images];
    updated.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        images: updated.length ? updated : [""],
      },
    }));
  };

  // SUBMIT
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "https://sk-classes-backend.onrender.com/api/home/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Hero Updated ");
    } catch {
      toast.error("Error saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-heading">Hero Section</h1>

      <div className="card">
        <h2>Hero Content</h2>

        {/* HEADING */}
        <textarea
          placeholder="Heading (HTML allowed)"
          value={formData.hero.heading}
          onChange={(e) => handleChange(e, ["hero", "heading"])}
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Description"
          value={formData.hero.description}
          onChange={(e) => handleChange(e, ["hero", "description"])}
        />

        {/* BUTTONS */}
        <h3 style={{ marginTop: "20px" }}>Buttons</h3>

        {formData.hero.buttons.map((btn, index) => (
          <div className="grid-2" key={index}>
            <input
              placeholder="Button Text"
              value={btn.text}
              onChange={(e) =>
                handleChange(e, ["hero", "buttons", index, "text"])
              }
            />
            <input
              placeholder="Button URL"
              value={btn.url}
              onChange={(e) =>
                handleChange(e, ["hero", "buttons", index, "url"])
              }
            />
          </div>
        ))}

        {/* IMAGES */}
        <h3 style={{ marginTop: "20px" }}>Background Images</h3>

        {formData.hero.images.map((img, index) => (
          <div className="image-row" key={index}>
            <input
              placeholder="Image URL"
              value={img}
              onChange={(e) =>
                handleChange(e, ["hero", "images", index])
              }
            />

            <button
              className="remove-btn"
              onClick={() => removeImage(index)}
            >
              ✕
            </button>
          </div>
        ))}

        <button className="add-btn" onClick={addImage}>
          + Add Image
        </button>

        {/* STATS */}
        <h3 style={{ marginTop: "20px" }}>Stats</h3>

        {formData.hero.stats.map((stat, index) => (
          <div className="grid-2" key={index}>
            <input
              placeholder="Number (1500+)"
              value={stat.number}
              onChange={(e) =>
                handleChange(e, ["hero", "stats", index, "number"])
              }
            />
            <input
              placeholder="Label (Students)"
              value={stat.label}
              onChange={(e) =>
                handleChange(e, ["hero", "stats", index, "label"])
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

export default AdminHero;