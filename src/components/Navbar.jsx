import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const KiaLogo = "/assets/Kia.jpg"; // public folder me image

  return (
    <nav className="w-full shadow-md relative">
      {/* Top Row for PC */}
      <div className="hidden md:flex justify-start px-6 py-3 text-lg font-bold tracking-wide">
        <Link to="/">BROADWAY</Link>
      </div>

      {/* Divider line for PC */}
      <div className="hidden md:block border-t border-gray-300"></div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between px-6 py-4 relative">
        {/* PC Left Links */}
        <div className="hidden md:flex gap-8 flex-1">
          <Link
            to="/"
            className="hover:underline underline-offset-4 transition"
          >
            Home
          </Link>
          <Link
            to="/sales"
            className="hover:underline underline-offset-4 transition"
          >
            Sales
          </Link>
          <Link
            to="/services"
            className="hover:underline underline-offset-4 transition"
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className="hover:underline underline-offset-4 transition"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="hover:underline underline-offset-4 transition"
          >
            About Us
          </Link>
        </div>

        {/* Center Logo for PC */}
        <div className="hidden md:flex flex-1 justify-center">
          <Link to="/">
            <img
              src={KiaLogo}
              alt="KIA"
              className="h-10 transition-transform hover:scale-110"
            />
          </Link>
        </div>

        {/* PC Contact */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            to="/contact"
            className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Left: BROADWAY */}
          <div className="text-lg font-bold">
            <Link to="/" onClick={() => setIsOpen(false)}>
              BROADWAY
            </Link>
          </div>

          {/* Center: Logo */}
          <div>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={KiaLogo} alt="KIA" className="h-10" />
            </Link>
          </div>

          {/* Right: Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-50 flex flex-col pt-6 px-6`}
      >
        {/* Close Button */}
        <button className="self-end mb-4" onClick={() => setIsOpen(false)}>
          ✕
        </button>

        {/* Mobile Links */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/sales"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:underline"
        >
          Sales
        </Link>
        <Link
          to="/services"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:underline"
        >
          Services
        </Link>
        <Link
          to="/gallery"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:underline"
        >
          Gallery
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:underline"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:underline"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
