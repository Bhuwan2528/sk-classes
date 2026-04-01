import React, { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://sk-classes-backend.onrender.com/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      toast.success("Welcome Admin ");

      setTimeout(() => navigate("/admin"), 1000);

    } catch {
      toast.error("Invalid credentials ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-login">

      <div className="admin-login-container">



        {/* RIGHT FORM */}
        <div className="login-form-box">

          <h3>Admin Login</h3>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
            />

            <button type="submit">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

        </div>

      </div>

    </section>
  );
};

export default AdminLogin;