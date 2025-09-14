import React from "react";

export default function Services() {
  return (
    <div className="mt-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="font-bold text-2xl mb-2">Car Servicing</h2>
          <p className="text-gray-600">
            Regular maintenance and servicing for your KIA car.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="font-bold text-2xl mb-2">Car Accessories</h2>
          <p className="text-gray-600">
            Upgrade your car with original KIA accessories.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="font-bold text-2xl mb-2">Finance Options</h2>
          <p className="text-gray-600">
            Flexible loan and EMI options for easy purchase.
          </p>
        </div>
      </div>
    </div>
  );
}
