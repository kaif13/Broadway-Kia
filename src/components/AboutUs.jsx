// About.jsx
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt, FaCommentDots, FaHome } from "react-icons/fa";
import React from "react";

// Kia logo import karo apne assets se
const KiaLogo = "/assets/Kia.jpg"; // ✅ apna sahi path daalna

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 pl-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Left Side - Logo + About Text */}
        <div>
          {/* Kia Logo + Title ek line me */}
          <div className="flex items-center mb-6 gap-3">
            <h2 className="text-2xl font-bold">BROADWAY</h2>
            <img src={KiaLogo} alt="Kia Logo" className="w-20" />
          </div>

          {/* About Text */}
          <p className="text-gray-700 leading-relaxed">
            We believe that owning a Kia is more than just driving a car— it’s
            about enjoying a worry-free journey backed by trusted service and
            care. As an{" "}
            <span className="font-semibold">
              authorized Kia dealership and service center
            </span>
            , we are committed to delivering excellence in every interaction,
            whether you’re booking routine maintenance, repairing your vehicle,
            or simply seeking expert guidance.
          </p>
        </div>

        {/* Right Side - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <FaCommentDots className="text-gray-600" />
              <span>Contact us</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gray-600" />
              <span>info@yourcompany.example.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-600" />
              <span>+1 555-555-5556</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-gray-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-gray-200"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-gray-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-gray-200"
            >
              <FaHome />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
