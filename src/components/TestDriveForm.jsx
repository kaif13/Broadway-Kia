import React from "react";
import { useNavigate } from "react-router-dom";

export default function TestDriveForm() {
  const navigate = useNavigate();

  return (
    <section className="px-6 md:px-20 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Book a Test Drive</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border p-3 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded"
        />
        <input
          type="text"
          placeholder="Preferred Date & Time"
          className="border p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="Car Model"
          className="border p-3 rounded"
          required
        />
        <textarea
          placeholder="Additional Notes"
          className="border p-3 rounded md:col-span-2"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition md:col-span-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
