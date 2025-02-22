import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/header";
import Hero from "./pages/hero";
import AboutUs from "./pages/about";
import Footer from "./pages/footer";
import ServicesSection from "./pages/ServicesSection";
import "./app.css";
import axios from "axios";

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:5000/save-data",
      formData
    );
    console.log("Data saved:", response.data);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("Error saving data:", error);
    alert("An error occurred. Please try again.");
  }
};

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ServicesSection />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
