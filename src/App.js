import React from "react";
//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import whatsapp from "./assets/whatsapp.png";
function App() {
  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "9999",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    padding: "20px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const logoStyle = {
    width: "50px",
    height: "50px",
  };
  const countryCode = "+91"; // Replace with the desired country code
  const phoneNumber = "8700810423"; // Replace with the phone number

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${countryCode}${phoneNumber}`;
  return (
    <>
      <BrowserRouter>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <img src={whatsapp} alt="WhatsApp Logo" style={logoStyle} />
        </a>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
