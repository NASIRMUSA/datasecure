import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/VerificationPage.css";

const VerificationPage = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { email, name } = location.state || { email: "", name: "" };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate verification logic
    if (code === "123456") {
      // Replace with actual verification logic
      navigate("/profile", { state: { name } });
    } else {
      setError("Invalid verification code. Please try again.");
    }
  };

  return (
    <div className="verification-container">
      <div className="verification-form">
        <h2>Verify Your Email</h2>
        <p>
          We've sent a verification code to <strong>{email}</strong>. Please
          enter it below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="code">Verification Code</label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code"
              required
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          <button type="submit" className="submit-btn">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;
