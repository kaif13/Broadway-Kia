import React from "react";

export default function Sales() {
  return (
    <div className="mt-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Cars for Sale</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img
            src="https://www.kia.com/content/dam/kwp/au/vehicles/seltos/seltos-gallery.jpg"
            alt="KIA Seltos"
            className="rounded mb-4"
          />
          <h2 className="font-bold text-xl">KIA Seltos</h2>
          <p className="text-gray-600">Starting at ₹15,00,000</p>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img
            src="https://www.kia.com/content/dam/kwp/au/vehicles/sonet/sonet-gallery.jpg"
            alt="KIA Sonet"
            className="rounded mb-4"
          />
          <h2 className="font-bold text-xl">KIA Sonet</h2>
          <p className="text-gray-600">Starting at ₹10,50,000</p>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img
            src="https://www.kia.com/content/dam/kwp/au/vehicles/carnival/carnival-gallery.jpg"
            alt="KIA Carnival"
            className="rounded mb-4"
          />
          <h2 className="font-bold text-xl">KIA Carnival</h2>
          <p className="text-gray-600">Starting at ₹30,00,000</p>
        </div>
      </div>
    </div>
  );
}
