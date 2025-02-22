import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate login logic (e.g., API call)
      const user = {
        email: formData.email,
        name: "John Doe", // Replace with actual user data from the backend
      };

      // Check if the user is logging in from the same device
      const storedDeviceId = localStorage.getItem("deviceId");
      const currentDeviceId = "device123"; // Replace with a unique device ID (e.g., from a library like `uuid`)

      if (storedDeviceId === currentDeviceId) {
        // User is logging in from the same device
        navigate("/profile", { state: { name: user.name } });
      } else {
        // User is logging in from a different device
        localStorage.setItem("deviceId", currentDeviceId); // Store the new device ID
        navigate("/verify", { state: { email: user.email, name: user.name } });
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
