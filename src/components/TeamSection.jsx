import React from "react";

const teamMembers = [
  {
    name: "Tony Fred",
    role: "Chief Executive Officer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Founder and chief visionary, Tony is the driving force behind the company. He loves to keep his hands full by participating in the development of the software, marketing, and customer experience strategies.",
  },
  {
    name: "Mich Stark",
    role: "Chief Sales Officer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Our team loves taking on challenges. With our multi-year experience as a car dealer, we have helped numerous customers find their dream cars. Our team is among the best in the industry.",
  },
  {
    name: "Aline Turner",
    role: "Chief Operations Officer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Mark is one of the iconic people in life who can say they love what they do. He mentors 100+ in-house salespeople and looks after the community of thousands of customers.",
  },
  {
    name: "Iris Joe",
    role: "Chief Financial Officer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "With her extensive industry knowledge and expertise, Emily is dedicated to driving our success and taking our dealership to the next level.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Meet our team of automotive experts
        </h2>
        <p className="text-gray-600">
          Dedicated professionals driving our dealership's success
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
