import React from "react";
import { Link } from "react-router-dom"; // agar react-router use kar rahe ho

// Dummy data
const cars = [
  {
    name: "Kia Carens Clavis EV 2025",
    price: "₹17.99 Lakhs",
    image: "/assets/Clavis EV.jpg",
    link: "/cars/carens-ev", // internal route
  },
  {
    name: "KIA SELTOS 2025",
    price: "₹11.19 Lakhs",
    image: "/assets/seltos.jpg",
    link: "/cars/seltos",
  },
  {
    name: "KIA SONET 2025",
    price: "₹9.13 Lakhs",
    image: "/assets/Sonet.jpg",
    link: "/cars/sonet",
  },
  {
    name: "KIA CARNIVAL",
    price: "₹63.91 Lakhs",
    image: "/assets/carnival.jpg",
    link: "/cars/carnival",
  },
];

export default function Cars() {
  return (
    <section className="px-6 md:px-20 py-16">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-10">CARS</h2>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {cars.map((car, index) => (
          <div key={index} className="text-center">
            {/* Clickable Image */}
            <Link to={car.link}>
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[200px] object-contain mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Title & Price */}
            <h3 className="font-semibold text-lg">{car.name}</h3>
            <p className="text-gray-600">Starting @ {car.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
