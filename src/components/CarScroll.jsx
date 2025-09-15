import React from "react";

const CarScroll = () => {
  return (
    <section
      className="relative h-[300px] md:h-[300px] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/drive-exp.jpg')" }} // apni car wali image ka path daalna
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-snug">
          Every vehicle is crafted. <br />
          Few vehicles are crafted well.
        </h2>
      </div>
    </section>
  );
};

export default CarScroll;
