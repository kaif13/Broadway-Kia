import React from "react";
import { useParams, Link } from "react-router-dom";

// Cars Data (same as Sales.jsx)
const cars = [
  {
    id: "carens-ev",
    name: "Kia Carens Clavis EV 2025",
    price: "₹17.99 Lakhs",
    image: "/assets/Clavis EV.jpg",
    fuel: "Electric",
    transmission: "Automatic",
    seating: "7 Seater",
    mileage: "450 km/charge",
  },
  {
    id: "seltos",
    name: "KIA SELTOS 2025",
    price: "₹11.19 Lakhs",
    image: "/assets/seltos.jpg",
    fuel: "Petrol/Diesel",
    transmission: "Manual/Automatic",
    seating: "5 Seater",
    mileage: "17-21 km/l",
  },
  {
    id: "sonet",
    name: "KIA SONET 2025",
    price: "₹9.13 Lakhs",
    image: "/assets/Sonet.jpg",
    fuel: "Petrol/Diesel",
    transmission: "Manual/Automatic",
    seating: "5 Seater",
    mileage: "18-24 km/l",
  },
  {
    id: "carnival",
    name: "KIA CARNIVAL",
    price: "₹63.91 Lakhs",
    image: "/assets/carnival.jpg",
    fuel: "Diesel",
    transmission: "Automatic",
    seating: "7 Seater",
    mileage: "14 km/l",
  },
  {
    id: "sportage",
    name: "KIA SPORTAGE",
    price: "₹25.50 Lakhs",
    image: "/assets/sportage.jpg",
    fuel: "Petrol",
    transmission: "Automatic",
    seating: "5 Seater",
    mileage: "16 km/l",
  },
  {
    id: "ev6",
    name: "KIA EV6",
    price: "₹60.95 Lakhs",
    image: "/assets/ev6.jpg",
    fuel: "Electric",
    transmission: "Automatic",
    seating: "5 Seater",
    mileage: "528 km/charge",
  },
];

export default function CarDetail() {
  const { carId } = useParams();
  const car = cars.find((c) => c.id === carId);

  if (!car) {
    return <h2 className="text-center text-red-600 py-20">Car not found</h2>;
  }

  return (
    <section className="px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-[350px] object-contain rounded-lg shadow-lg"
        />

        {/* Right Side Details */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{car.name}</h2>
          <p className="text-xl text-gray-700 mb-6">Starting @ {car.price}</p>

          <table className="table-auto border-collapse w-full mb-6">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Fuel Type</td>
                <td className="border px-4 py-2">{car.fuel}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Transmission</td>
                <td className="border px-4 py-2">{car.transmission}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Seating</td>
                <td className="border px-4 py-2">{car.seating}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Mileage</td>
                <td className="border px-4 py-2">{car.mileage}</td>
              </tr>
            </tbody>
          </table>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link
              to="/book-appointment"
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Book Appointment
            </Link>
            <Link
              to="/book-testdrive"
              className="bg-white border border-black text-black px-5 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Book Test Drive
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
