import React from "react";

export default function Contact() {
  return (
    <div className="mt-16 px-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded"
        />
        <textarea
          placeholder="Message"
          className="border p-3 rounded h-32"
        ></textarea>
        <button className="bg-red-600 text-white py-3 rounded hover:bg-red-700 transition">
          Send Message
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Address: 123 KIA Street, City, India <br />
        Phone: +91 9876543210 <br />
        Email: info@kiashowroom.com
      </p>
    </div>
  );
}
