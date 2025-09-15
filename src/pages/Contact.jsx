import React from "react";
import AboutUs from "../components/AboutUs";
import { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiry: "",
    message: "",
    address: "",
  });

  const bgRef = useRef(null);

  // Parallax Effect for Background
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.backgroundPositionY = `${scrollY * 0.4}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");

    // Clear form fields after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      enquiry: "",
      message: "",
      address: "",
    });
  };

  return (
    <>
      {/* Hero Section with Parallax Background */}
      <section
        ref={bgRef}
        className="relative h-[15vh] md:h-[20vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <h1 className="relative text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center">
          Contact Us
        </h1>
      </section>

      {/* Centered Form Section */}
      <div className="flex justify-center p-4 md:p-10 bg-white">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold text-center">
            Contact us about anything related to our cars or services.
          </h2>
          <p className="text-gray-600 text-center mb-4">
            We'll do our best to get back to you as soon as possible.
          </p>

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
          </div>

          {/* Email & Kia Car Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email (Optional)"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            <select
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-full"
            >
              <option value="">Select Kia Car *</option>
              <option value="Kia Sonet">Kia Sonet</option>
              <option value="Kia Seltos">Kia Seltos</option>
              <option value="Kia Carens">Kia Carens</option>
              <option value="Kia EV6">Kia EV6</option>
              <option value="Kia Carnival">Kia Carnival</option>
              <option value="Kia EV9">Kia EV9</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg w-full h-28"
          />

          {/* Address */}
          <textarea
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full h-20"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <AboutUs />
    </>
  );
}
