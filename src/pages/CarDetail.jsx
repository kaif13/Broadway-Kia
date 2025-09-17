import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// Cars Data
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
    models: ["2024 Base", "2024 Top", "2025 Base", "2025 Top"],
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
    models: ["2024 Base", "2024 Top", "2025 Base", "2025 Top"],
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
    models: ["2024 Base", "2024 Top", "2025 Base", "2025 Top"],
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
    models: ["2024 Base", "2024 Top", "2025 Base", "2025 Top"],
  },
  {
    id: "syros",
    name: "KIA SYROS",
    price: "₹25.50 Lakhs",
    image: "/assets/syros.jpg",
    fuel: "Petrol",
    transmission: "Automatic",
    seating: "5 Seater",
    mileage: "16 km/l",
    models: ["2024 Base", "2024 Top", "2025 Base", "2025 Top"],
  },
  {
    id: "ev6",
    name: "KIA EV6",
    price: "₹60.95 Lakhs",
    image: "/assets/EV-6.jpg",
    fuel: "Electric",
    transmission: "Automatic",
    seating: "5 Seater",
    mileage: "528 km/charge",
    models: ["2024 Base", "2024 Top", "2025 Base", "2025 Top"],
  },
];

export default function CarDetail() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === carId);

  if (!car) {
    return <h2 className="text-center text-red-600 py-20">Car not found</h2>;
  }

  return (
    <section className="px-6 md:px-20 py-16">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

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
              state={{ carModel: car.name, modelOptions: car.models }} // ✅ pass full model list
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Book Appointment
            </Link>

            <Link
              to="/book-testdrive"
              state={{ carModel: car.name, modelOptions: car.models }} // ✅ pass model options
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
