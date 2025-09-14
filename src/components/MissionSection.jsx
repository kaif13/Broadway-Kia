import React from "react";

export default function MissionSection() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* Small heading */}
      <p className="uppercase tracking-wide text-sm mb-4">— Our Mission</p>

      {/* Big heading */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 leading-snug">
        “Where innovation drives <br /> performance and style.”
      </h2>

      {/* Two-column text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-300 text-lg leading-relaxed">
        <p>
          “Our dealership is dedicated to offering a wide range of vehicles that
          combine style, performance, and reliability. We strive to make your
          car-buying journey seamless by helping you choose the perfect vehicle
          that matches your lifestyle and budget. Every car in our collection is
          carefully selected to ensure superior quality and lasting satisfaction
          for every customer.”
        </p>
        <p>
          “Backed by years of expertise in the automotive world, we bring
          together innovation and outstanding service. Our mission is to deliver
          vehicles that go beyond performance to elevate every drive. Each model
          is thoughtfully chosen to match your needs while delivering
          reliability, comfort, and style.”
        </p>
      </div>
    </section>
  );
}
