import React, { useEffect, useState } from "react";
import "./AdminForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const defaultData = {
  studyVisa: {
    sectionTitle: "",
    sectionDescription: "",
    contact: {
      callNumber: "",
      whatsappNumber: "",
    },
    items: [],
  },
};

const AdminStudyVisa = () => {
  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        if (res.data?.data) {
          const studyVisa = res.data.data.studyVisa || {};

          setFormData({
            studyVisa: {
              sectionTitle: studyVisa.sectionTitle || "",
              sectionDescription: studyVisa.sectionDescription || "",
              contact: {
                callNumber: studyVisa.contact?.callNumber || "",
                whatsappNumber: studyVisa.contact?.whatsappNumber || "",
              },
              items: studyVisa.items || [],
            },
          });
        }
      } catch {
        toast.error("Error fetching Study Visa data");
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

  // ✅ ADD CARD
  const addCard = () => {
    setFormData((prev) => ({
      ...prev,
      studyVisa: {
        ...prev.studyVisa,
        items: [...prev.studyVisa.items, { title: "", image: "" }],
      },
    }));
  };

  // ✅ REMOVE CARD
  const removeCard = (index) => {
    const updated = [...formData.studyVisa.items];
    updated.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      studyVisa: {
        ...prev.studyVisa,
        items: updated,
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
        {
          studyVisa: formData.studyVisa,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Study Visa Updated ");
    } catch {
      toast.error("Error saving Study Visa");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-heading">Study Visa Section</h1>

      <div className="card">
        <h2>Section Content</h2>

        <input
          placeholder="Section Title"
          value={formData.studyVisa.sectionTitle}
          onChange={(e) =>
            handleChange(e, ["studyVisa", "sectionTitle"])
          }
        />

        <textarea
          placeholder="Section Description"
          value={formData.studyVisa.sectionDescription}
          onChange={(e) =>
            handleChange(e, ["studyVisa", "sectionDescription"])
          }
        />

        {/* ✅ CONTACT */}
        <h3 style={{ marginTop: "20px" }}>Contact Info</h3>

        <div className="grid-2">
          <input
            placeholder="Call Number (+91...)"
            value={formData.studyVisa.contact.callNumber}
            onChange={(e) =>
              handleChange(e, ["studyVisa", "contact", "callNumber"])
            }
          />

          <input
            placeholder="WhatsApp Number (9199...)"
            value={formData.studyVisa.contact.whatsappNumber}
            onChange={(e) =>
              handleChange(e, ["studyVisa", "contact", "whatsappNumber"])
            }
          />
        </div>

        {/* ✅ CARDS */}
        <h2 style={{ marginTop: "20px" }}>Visa Cards</h2>

        {formData.studyVisa.items.map((item, index) => (
          <div key={index} className="card" style={{ marginTop: "15px" }}>
            <div className="image-row">
                <h3>Card {index + 1}</h3>

                <button
                    className="remove-btn"
                    onClick={() => removeCard(index)}
                    >
                    ✕
                </button>
            </div>
            

            <input
              placeholder="Country Title (e.g. Study in UK)"
              value={item.title}
              onChange={(e) =>
                handleChange(e, ["studyVisa", "items", index, "title"])
              }
            />

            <input
              placeholder="Image URL"
              value={item.image}
              onChange={(e) =>
                handleChange(e, ["studyVisa", "items", index, "image"])
              }
            />

            
          </div>
        ))}

        <button className="add-btn" onClick={addCard}>
          + Add Card
        </button>
      </div>

      <button className="save-btn" onClick={handleSubmit}>
        {loading ? "Saving..." : "Save Study Visa"}
      </button>
    </div>
  );
};

export default AdminStudyVisa;