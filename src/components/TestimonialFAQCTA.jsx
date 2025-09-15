import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Showroom = "/assets/contact-image.jpg";

export default function TestimonialFAQCTA() {
  const navigate = useNavigate();
  // ✅ Testimonial Data
  const testimonials = [
    {
      text: "This car is stylish and built to last!, Amazing service",
      name: "Jack",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Amazing service, I love my new car!",
      name: "Sophia",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Fast delivery and great customer support!",
      name: "Liam",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ FAQ Data
  const faqs = [
    {
      question: "What vehicles do you offer?",
      answer:
        "Our dealership specializes in new and used car sales, financing options, and exceptional customer service. We tailor our offerings to meet the unique needs of every driver, ensuring a smooth buying experience.",
    },
    {
      question: "How can I contact our sales team?",
      answer:
        "You can reach out via phone, email, or by visiting our showroom during business hours. Our team is always happy to assist you!",
    },
    {
      question: "What is your warranty policy?",
      answer:
        "We offer comprehensive warranties on all new vehicles and limited warranties on used vehicles. Contact us for more details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-gray-100 py-20 px-4">
      {/* ✅ Testimonial Carousel */}
      <div className="relative max-w-6xl w-full mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center mb-20">
        {/* Quote */}
        <p className="text-lg md:text-2xl font-medium text-gray-700 mb-6 md:mb-8 leading-relaxed">
          “{testimonials[currentIndex].text}”
        </p>

        {/* User Info */}
        <div className="flex flex-col items-center">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-3 border-4 border-gray-200 shadow"
          />
          <span className="font-semibold text-base md:text-xl text-gray-800">
            {testimonials[currentIndex].name}
          </span>
        </div>

        {/* Left / Right Buttons INSIDE Box (Responsive Sizes) */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-gray-200 p-2 md:p-3 rounded-full hover:bg-gray-300 transition shadow"
        >
          <ChevronLeft className="w-4 h-4 md:w-7 md:h-7" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-gray-200 p-2 md:p-3 rounded-full hover:bg-gray-300 transition shadow"
        >
          <ChevronRight className="w-4 h-4 md:w-7 md:h-7" />
        </button>
      </div>

      {/* ✅ FAQ Section */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 lg:col-span-1">
          Frequently Asked Questions
        </h2>
        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-5 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Call to Action Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Transform your driving experience with our vehicles.
          </h3>
          <p className="text-gray-700 mb-6">
            Contact us to find your perfect match!
          </p>
          <button
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition text-lg"
            onClick={() => navigate("/Contact")}
          >
            Contact Us
          </button>
        </div>
        <img
          src={Showroom}
          alt="Car Showroom"
          className="w-full h-72 md:h-full object-cover"
        />
      </div>
    </section>
  );
}
