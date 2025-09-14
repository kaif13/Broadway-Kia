import React from "react";
import MissionSection from "../components/MissionSection";
import Cars from "../components/Cars";
import CustomerPerks from "../components/CustomerPerks";
import TestimonialFAQCTA from "../components/TestimonialFAQCTA";
const CarImage = "../assets/home-car.webp"; // car image path
const LeftImage = "/assets/left.jpg"; // left image
const RightImage = "/assets/right.jpg"; // right image

export default function Home() {
  return (
    <>
      <div className="w-full">
        {/* Top Full Image */}
        <div className="w-full">
          <img
            src={CarImage}
            alt="Car"
            className="w-full h-[60vh] md:h-[70vh] object-cover object-center"
          />
        </div>

        {/* Bottom Images */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left image - always visible */}
          <div>
            <img
              src={LeftImage}
              alt="Left"
              className="w-full h-[40vh] md:h-[50vh] object-contain md:object-cover object-center"
            />
          </div>

          {/* Right image - hidden on mobile */}
          <div className="hidden md:block">
            <img
              src={RightImage}
              alt="Right"
              className="w-full h-[50vh] object-cover object-center"
            />
          </div>
        </div>
      </div>
      <MissionSection />
      <Cars />
      <CustomerPerks />
      <TestimonialFAQCTA />
    </>
  );
}
