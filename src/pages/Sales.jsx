import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";

const cars = [
  {
    id: "carens-ev",
    name: "Kia Carens Clavis EV 2025",
    price: "₹17.99 Lakhs",
    image: "/assets/Clavis EV.jpg",
  },
  {
    id: "seltos",
    name: "KIA SELTOS 2025",
    price: "₹11.19 Lakhs",
    image: "/assets/seltos.jpg",
  },
  {
    id: "sonet",
    name: "KIA SONET 2025",
    price: "₹9.13 Lakhs",
    image: "/assets/Sonet.jpg",
  },
  {
    id: "carnival",
    name: "KIA CARNIVAL",
    price: "₹63.91 Lakhs",
    image: "/assets/carnival.jpg",
  },
  {
    id: "ev6",
    name: "KIA EV6",
    price: "₹60.95 Lakhs",
    image: "/assets/EV-6.jpg",
  },
  {
    id: "syros",
    name: "KIA SYROS",
    price: "₹25.75 Lakhs",
    image: "/assets/syros.jpg",
  },
];

export default function Cars() {
  return (
    <>
      <section className="px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white shadow-md rounded-xl overflow-hidden text-center hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/cars/${car.id}`}>
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[200px] object-contain mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="px-4 pb-4">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-600">Starting @ {car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AboutUs />
    </>
  );
}
