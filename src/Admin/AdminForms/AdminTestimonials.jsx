import React, { useEffect, useState } from "react";
import "./AdminForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const defaultData = {
  testimonials: {
    sectionTitle: "",
    rows: [
      { items: [] },
      { items: [] },
      { items: [] },
    ],
  },
};

const AdminTestimonials = () => {
  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        if (res.data?.data) {
          const testimonials = res.data.data.testimonials || {};

          setFormData({
            testimonials: {
              sectionTitle: testimonials.sectionTitle || "",
              rows:
                testimonials.rows?.length === 3
                  ? testimonials.rows
                  : [
                      { items: [] },
                      { items: [] },
                      { items: [] },
                    ],
            },
          });
        }
      } catch {
        toast.error("Error fetching Testimonials data");
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

  // ✅ ADD TESTIMONIAL
  const addTestimonial = (rowIndex) => {
    setFormData((prev) => {
      const updated = structuredClone(prev);
      updated.testimonials.rows[rowIndex].items.push({
        name: "",
        image: "",
        review: "",
      });
      return updated;
    });
  };

  // ✅ REMOVE TESTIMONIAL
  const removeTestimonial = (rowIndex, itemIndex) => {
    setFormData((prev) => {
      const updated = structuredClone(prev);
      updated.testimonials.rows[rowIndex].items.splice(itemIndex, 1);
      return updated;
    });
  };

  // ✅ SUBMIT
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/home/update",
        {
          testimonials: formData.testimonials,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Testimonials Updated ");
    } catch {
      toast.error("Error saving Testimonials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-heading">Testimonials Section</h1>

      <div className="card">
        <h2>Section Content</h2>

        <input
          placeholder="Section Title"
          value={formData.testimonials.sectionTitle}
          onChange={(e) =>
            handleChange(e, ["testimonials", "sectionTitle"])
          }
        />

        {/* ✅ ROWS */}
        {formData.testimonials.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="card" style={{ marginTop: "20px" }}>
            <h2>Row {rowIndex + 1}</h2>

            {row.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="card"
                style={{ marginTop: "15px" }}
              >
                <div className="image-row">
                  <h3>
                    Testimonial {itemIndex + 1}
                  </h3>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeTestimonial(rowIndex, itemIndex)
                    }
                  >
                    ✕
                  </button>
                </div>

                <input
                  placeholder="Name"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(e, [
                      "testimonials",
                      "rows",
                      rowIndex,
                      "items",
                      itemIndex,
                      "name",
                    ])
                  }
                />

                <input
                  placeholder="Image URL"
                  value={item.image}
                  onChange={(e) =>
                    handleChange(e, [
                      "testimonials",
                      "rows",
                      rowIndex,
                      "items",
                      itemIndex,
                      "image",
                    ])
                  }
                />

                <textarea
                  placeholder="Review"
                  value={item.review}
                  onChange={(e) =>
                    handleChange(e, [
                      "testimonials",
                      "rows",
                      rowIndex,
                      "items",
                      itemIndex,
                      "review",
                    ])
                  }
                />
              </div>
            ))}

            <button
              className="add-btn"
              onClick={() => addTestimonial(rowIndex)}
            >
              + Add Testimonial
            </button>
          </div>
        ))}
      </div>

      <button className="save-btn" onClick={handleSubmit}>
        {loading ? "Saving..." : "Save Testimonials"}
      </button>
    </div>
  );
};

export default AdminTestimonials;