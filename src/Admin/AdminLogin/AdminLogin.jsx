import React, { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";

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

      setTimeout(() => navigate("/admin-dashboard"), 1000);

    } catch {
      toast.error("Invalid credentials ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-login">


      {/* floating shapes */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>

      <div className="admin-login-container">

        <div className="login-form-box">

          <h2>Welcome Back 👋</h2>
          <p className="subtitle">Login to SK Classes Admin Panel</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder=" "
                value={form.username}
                onChange={handleChange}
              />
              <label>Username</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder=" "
                value={form.password}
                onChange={handleChange}
              />
              <label>Password</label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default AdminLogin;