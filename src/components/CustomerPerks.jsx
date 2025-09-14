import { Truck, MapPin, LifeBuoy, Send } from "lucide-react";
import React from "react";

export default function CustomerPerks() {
  const perks = [
    {
      icon: <Send className="w-8 h-8 mx-auto mb-3" />,
      title: "Free Delivery",
      description: "Free delivery on purchases over $20,000",
    },
    {
      icon: <Truck className="w-8 h-8 mx-auto mb-3" />,
      title: "Quick Delivery",
      description: "Get your new car delivered fast.",
    },
    {
      icon: <MapPin className="w-8 h-8 mx-auto mb-3" />,
      title: "Order Tracking",
      description: "Track your vehicle purchase in real-time, anytime.",
    },
    {
      icon: <LifeBuoy className="w-8 h-8 mx-auto mb-3" />,
      title: "24/7 Customer Support",
      description: "We're here to assist you, 24/7.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Customer Perks</h2>
      <p className="text-center text-gray-600 mb-10">
        Enjoy these exclusive benefits with every vehicle purchase
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {perks.map((perk, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {perk.icon}
            <h3 className="text-lg font-semibold mb-1">{perk.title}</h3>
            <p className="text-gray-600 text-sm">{perk.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
