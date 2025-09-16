import React from "react";
import Masonry from "react-masonry-css";

export default function Gallery() {
  const images = [
    "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/carnival/interior/In-1-m.jpg",
    "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/syros/int/Int-kv.jpg",
    "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/Carens/Safety/Desktop/Sat1-m.jpg",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/ev6/meet/sec2/se_1.jpg",
    "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/ev6/meet/sec2/se_2.jpg",
    "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/ev6/prebooking/600X800.jpg",
    "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/carnival/exterior/Ex-5-m.jpg",
    "https://www.kia.com/content/dam/kia2/in/en/our-vehicles/kia-clavis/kv/Int-1.png",
  ];

  const breakpointColumnsObj = {
    default: 3, // Desktop
    1024: 3,
    768: 2, // Tablet
    480: 1, // Mobile
  };

  return (
    <div className="w-full lg:h-[208vh] overflow-hidden m-0 p-0 bg-white">
      <section className="p-0">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -mx-0" // side gap hata diya
          columnClassName="masonry-column"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`gallery-${index}`}
              className="w-full mb-0" // rounded hataya
              loading="lazy"
            />
          ))}
        </Masonry>
      </section>
    </div>
  );
}
