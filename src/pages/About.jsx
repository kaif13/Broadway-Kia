import React from "react";

// Images
const About = "/assets/drive-exp.jpg"; // About section ke liye right image
const New = "/assets/new-car.jpg"; // Discover section ke liye left image

// Components
import AboutUs from "../components/AboutUs";
import CarScroll from "../components/CarScroll";
import TeamSection from "../components/TeamSection";

export default function AboutDiscoverSection() {
  return (
    <>
      {/* About Section */}
      <section
        className="relative py-12 md:py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/home-car.webp')" }} // ✅ yaha apna bg image ka path daalo
      >
        {/* Responsive Overlay for better readability */}
        <div className="absolute inset-0 md:inset-12 bg-white/100"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Left Text */}
          <div>
            <h2 className="text-5xl font-bold mb-8">About us</h2>
            <h3 className="text-2xl font-semibold mb-4">
              Enhance Your{" "}
              <span className="font-extrabold">Driving Experience</span>
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              At KORAN, we are passionate about creating cars that deliver an
              unparalleled driving experience. From our advanced technology to
              our sleek and stylish designs, every detail is carefully crafted
              to provide you with the ultimate driving experience.
            </p>

            <p className="text-gray-600 italic mb-8">
              "Start with the customer – find out what they want and give it to
              them." <br />- Sir Richard Branson
            </p>

            <button className="bg-black text-white px-8 py-3 rounded-lg shadow hover:bg-gray-800 transition">
              Learn more about our services
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center">
            <img
              src={About}
              alt="Driving Experience"
              className="w-full max-w-lg rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={New}
              alt="Discover Cars"
              className="w-full max-w-lg rounded-xl shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover New <span className="font-extrabold">Cars</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              At KORAN, we are passionate about creating cars that deliver an
              unparalleled driving experience. From our advanced technology to
              our sleek and stylish designs, every detail is carefully crafted
              to provide you with the ultimate driving experience.
            </p>

            <p className="text-gray-600 italic mb-8">
              "Start with the customer – find out what they want and give it to
              them." <br />- Sir Richard Branson
            </p>

            <button className="bg-black text-white px-8 py-3 rounded-lg shadow hover:bg-gray-800 transition">
              Learn more about our services
            </button>
          </div>
        </div>
      </section>

      <CarScroll />
      <TeamSection />
      <AboutUs />
    </>
  );
}
