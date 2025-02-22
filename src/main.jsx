import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUpForm from "./pages/SignUpForm";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";
import AboutUs from "./pages/aboutusPage";
import VerificationPage from "./pages/verificationPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/verify" element={<VerificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
