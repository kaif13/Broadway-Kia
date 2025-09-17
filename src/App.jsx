import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Sales from "./pages/Sales";
import Gallery from "./pages/Gallery";
import CarDetail from "./pages/CarDetail";
import AppointmentForm from "./components/AppointmentForm";
import TestDriveForm from "./components/TestDriveForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          {/* ✅ Dynamic Route */}
          <Route path="/cars/:carId" element={<CarDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<AppointmentForm />} />
          <Route path="/book-testdrive" element={<TestDriveForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
