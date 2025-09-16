import React, { useEffect, useState } from "react";

const mobile = "/assets/mobile-new.mp4";
const desktop = "/assets/desktop-new.mp4"; // use correct file

export default function App() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="w-full h-screen relative ">
        <video
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src={isMobile ? mobile : desktop} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
}
