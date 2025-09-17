import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AppointmentForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    carModel: "",
    modelVariant: "",
    notes: "",
  });

  const carModel = location.state?.carModel || "";
  const modelOptions = location.state?.modelOptions || [];

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDate = today.toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, carModel: carModel }));
    setShowPopup(true);
  };

  return (
    <section className="px-6 md:px-20 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Book an Appointment</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="border p-3 rounded"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="border p-3 rounded"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border p-3 rounded"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          className="border p-3 rounded"
          required
          min={minDate}
          onChange={handleChange}
        />

        <select
          name="time"
          className="border p-3 rounded"
          required
          onChange={handleChange}
        >
          <option value="">Select Time Slot</option>
          <option value="9-10">09:00 AM – 10:00 AM</option>
          <option value="10-11">10:00 AM – 11:00 AM</option>
          <option value="11-12">11:00 AM – 12:00 PM</option>
          <option value="12-1">12:00 PM – 01:00 PM</option>
          <option value="1-2">01:00 PM – 02:00 PM</option>
          <option value="2-3">02:00 PM – 03:00 PM</option>
          <option value="3-4">03:00 PM – 04:00 PM</option>
          <option value="4-5">04:00 PM – 05:00 PM</option>
          <option value="5-6">05:00 PM – 06:00 PM</option>
        </select>

        <input
          type="text"
          value={carModel}
          readOnly
          className="border p-3 rounded bg-gray-100 cursor-not-allowed"
        />

        <select
          name="modelVariant"
          className="border p-3 rounded md:col-span-2"
          required
          onChange={handleChange}
        >
          <option value="">Select Model Variant</option>
          {modelOptions.map((model, index) => (
            <option key={index} value={model}>
              {carModel} - {model}
            </option>
          ))}
        </select>

        <textarea
          name="notes"
          placeholder="Additional Notes"
          className="border p-3 rounded md:col-span-2"
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition md:col-span-2"
        >
          Submit
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">🎉 Thank You!</h3>
            <p className="mb-2">Your Appointment is Confirmed.</p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Name:</strong> {formData.fullName} <br />
              <strong>Phone:</strong> {formData.phone} <br />
              <strong>Email:</strong> {formData.email || "N/A"} <br />
              <strong>Date:</strong> {formData.date} <br />
              <strong>Time Slot:</strong> {formData.time} <br />
              <strong>Car:</strong> {carModel} <br />
              <strong>Model:</strong> {formData.modelVariant} <br />
              <strong>Notes:</strong> {formData.notes || "N/A"}
            </p>
            <button
              onClick={() => {
                setShowPopup(false);
                navigate("/sales"); // ✅ Redirect to Sales section
              }}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
