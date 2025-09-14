import React from "react";
// import AboutImage from "../assets/7f5d1342-91fd-4dad-8152-b8b7ec76d41a.png"; // replace with actual path

const About = "/assets/drive-exp.jpg";
export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About us</h2>
          <p className="text-lg md:text-xl mb-4">
            Enhance Your <strong>Driving Experience</strong>
          </p>
          <p className="mb-4 text-gray-700">
            At KORAN, we are passionate about creating cars that deliver an
            unparalleled driving experience. From our advanced technology to our
            sleek and stylish designs, every detail is carefully crafted to
            provide you with the ultimate driving experience.
          </p>
          <p className="mb-6 text-gray-600 italic">
            "Start with the customer – find out what they want and give it to
            them." - Sir Richard Branson
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Learn more about our services
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={About}
            alt="About"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
