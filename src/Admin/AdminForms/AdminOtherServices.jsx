import React, { useState, useEffect } from "react";
import "./AdminForm.css";
import axios from "axios";
import { toast } from "react-toastify";

const defaultData = {
  otherServices: {
    sectionTitle: "",
    sectionSubtitle: "",
    contact: {
      callNumber: "",
      whatsappNumber: "",
    },
    items: [
      { title: "", description: "", image: "" },
      { title: "", description: "", image: "" },
      { title: "", description: "", image: "" },
    ],
  },
};

const AdminOtherServices = () => {
  const [formData, setFormData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH (FIXED 3 ITEMS)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");

        if (res.data?.data?.otherServices) {
          const incoming = res.data.data.otherServices;

          setFormData({
            otherServices: {
              sectionTitle: incoming.sectionTitle || "",
              sectionSubtitle: incoming.sectionSubtitle || "",

              contact: {
                callNumber: incoming.contact?.callNumber || "",
                whatsappNumber: incoming.contact?.whatsappNumber || "",
              },

              // ✅ ALWAYS 3 CARDS
              items: [
                incoming.items?.[0] || defaultData.otherServices.items[0],
                incoming.items?.[1] || defaultData.otherServices.items[1],
                incoming.items?.[2] || defaultData.otherServices.items[2],
              ],
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

  // SUBMIT
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

      toast.success("Other Services Updated ");
    } catch {
      toast.error("Error saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-heading">Other Services</h1>

      <div className="card">
        <h2>Section Content</h2>

        {/* TITLE */}
        <input
          placeholder="Section Title"
          value={formData.otherServices.sectionTitle}
          onChange={(e) =>
            handleChange(e, ["otherServices", "sectionTitle"])
          }
        />

        {/* SUBTITLE */}
        <textarea
          placeholder="Section Subtitle"
          value={formData.otherServices.sectionSubtitle}
          onChange={(e) =>
            handleChange(e, ["otherServices", "sectionSubtitle"])
          }
        />

        {/* CONTACT */}
        <h3 style={{ marginTop: "20px" }}>Contact Info</h3>

        <div className="grid-2">
          <input
            placeholder="Call Number"
            value={formData.otherServices.contact.callNumber}
            onChange={(e) =>
              handleChange(e, [
                "otherServices",
                "contact",
                "callNumber",
              ])
            }
          />

          <input
            placeholder="WhatsApp Number"
            value={formData.otherServices.contact.whatsappNumber}
            onChange={(e) =>
              handleChange(e, [
                "otherServices",
                "contact",
                "whatsappNumber",
              ])
            }
          />
        </div>

        {/* ✅ FIXED 3 CARDS */}
        <h3 style={{ marginTop: "20px" }}>Service Cards</h3>

        {formData.otherServices.items.map((item, index) => (
          <div className="card" key={index}>
            <h4>Card {index + 1}</h4>

            <input
              placeholder="Title"
              value={item.title}
              onChange={(e) =>
                handleChange(e, [
                  "otherServices",
                  "items",
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
                  "otherServices",
                  "items",
                  index,
                  "description",
                ])
              }
            />

            <input
              placeholder="Image URL"
              value={item.image}
              onChange={(e) =>
                handleChange(e, [
                  "otherServices",
                  "items",
                  index,
                  "image",
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

export default AdminOtherServices;