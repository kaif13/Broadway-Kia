import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Car,
  ShieldCheck,
  CreditCard,
  Truck,
  PhoneCall,
  Clock,
  Sparkles,
  BadgeCheck,
  CalendarCheck,
  MapPin,
  HelpCircle,
} from "lucide-react";

// Wrapper sections & cards
const Section = ({ children, className = "" }) => (
  <section className={`max-w-7xl mx-auto px-6 md:px-8 ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35 }}
    className={`rounded-2xl border bg-white/90 backdrop-blur shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    {children}
  </motion.div>
);

export default function Services() {
  const services = [
    {
      title: "Periodic Maintenance",
      desc: "Engine oil, filters, brake check, and multi-point inspection as per KIA schedule.",
      icon: <Wrench className="w-6 h-6" aria-hidden />,
      highlights: [
        "Genuine parts",
        "Service history updated",
        "Same-day delivery*",
      ],
    },
    {
      title: "Repairs & Diagnostics",
      desc: "Computerized diagnostics and expert repairs for engine, AC, electrical and suspension.",
      icon: <Car className="w-6 h-6" aria-hidden />,
      highlights: ["OBD scanning", "Transparent estimates", "Warranty on work"],
    },
    {
      title: "Body & Paint Shop",
      desc: "Accident repair, denting/painting in a dust-free paint booth for showroom finish.",
      icon: <Sparkles className="w-6 h-6" aria-hidden />,
      highlights: ["Color match", "Insurance tie-ups", "Quick turnaround"],
    },
    {
      title: "Genuine Accessories",
      desc: "Upgrade with official KIA accessories and expert installation.",
      icon: <BadgeCheck className="w-6 h-6" aria-hidden />,
      highlights: ["Factory fit", "Warranty-friendly", "On-spot fitting"],
    },
    {
      title: "Insurance & Claims Assist",
      desc: "Cashless claims, renewals, and paperwork handled end-to-end.",
      icon: <ShieldCheck className="w-6 h-6" aria-hidden />,
      highlights: ["Multiple insurers", "Cashless network", "Hassle-free"],
    },
    {
      title: "Finance & Exchange",
      desc: "Attractive loan/EMI options and smooth old-car exchange support.",
      icon: <CreditCard className="w-6 h-6" aria-hidden />,
      highlights: ["Quick approval", "Low down payment", "Transparent rates"],
    },
    {
      title: "24×7 Roadside Assistance",
      desc: "Towing, jump-start, flat tyre and emergency help anytime, anywhere.",
      icon: <Truck className="w-6 h-6" aria-hidden />,
      highlights: ["Nationwide", "Fast dispatch", "Safety first"],
    },
    {
      title: "Pick-up & Drop",
      desc: "Doorstep vehicle pick-up/drop with live updates.",
      icon: <Clock className="w-6 h-6" aria-hidden />,
      highlights: [
        "Real-time tracking",
        "Digital invoice",
        "Sanitized handling",
      ],
    },
    {
      title: "Extended Warranty",
      desc: "Protect your car beyond standard warranty for worry-free ownership.",
      icon: <ShieldCheck className="w-6 h-6" aria-hidden />,
      highlights: [
        "Up to 5–7 years",
        "Nationwide coverage",
        "Zero hassle claims",
      ],
    },
  ];

  // form state + modal
  const [form, setForm] = useState({
    name: "",
    phone: "",
    model: "",
    date: "",
    note: "",
  });
  const [showThanks, setShowThanks] = useState(false);

  // phone validation WITHOUT regex/backslashes (keeps canvas update safe)
  const phoneOk = useMemo(() => {
    const digits = form.phone.trim();
    if (digits.length < 10 || digits.length > 15) return false;
    for (let i = 0; i < digits.length; i++) {
      const ch = digits[i];
      if (ch < "0" || ch > "9") return false;
    }
    return true;
  }, [form.phone]);

  const isValid = useMemo(() => {
    return (
      form.name.trim().length > 0 &&
      phoneOk &&
      form.model.trim().length > 0 &&
      form.date.trim().length > 0
    );
  }, [form, phoneOk]);

  const handleBookScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setShowThanks(true);
    // RESET after successful submit
    setForm({ name: "", phone: "", model: "", date: "", note: "" });
  };

  useEffect(() => {
    if (!showThanks) return;
    const t = setTimeout(() => setShowThanks(false), 2500);
    return () => clearTimeout(t);
  }, [showThanks]);

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* HERO */}
      <Section className="pt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              KIA Service & Care —
              <span className="text-black"> Fast. Transparent. Trusted.</span>
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600">
              Keep your KIA running like new with expert technicians, genuine
              parts, and digital-first convenience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#booking"
                onClick={handleBookScroll}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-black text-white font-semibold shadow hover:shadow-md"
                aria-label="Book your service"
              >
                <CalendarCheck className="w-5 h-5" /> Book Service
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-slate-300 bg-white font-semibold hover:bg-slate-50"
                aria-label="Go to Contact page"
              >
                <PhoneCall className="w-5 h-5" /> Contact Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl">
              {[
                { big: "4.8/5", small: "Customer rating" },
                { big: "10k+", small: "Cars serviced" },
                { big: "100%", small: "Genuine parts" },
              ].map((t) => (
                <div key={t.small} className="text-center">
                  <p className="text-xl font-bold">{t.big}</p>
                  <p className="text-sm text-slate-500">{t.small}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* reliable image, if blocked replace the URL */}
            <div className="aspect-[4/3] rounded-3xl bg-[url('https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/Carens/Safety/Desktop/Sat1-d.jpg')] bg-cover bg-center shadow-lg" />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <p className="text-sm">Free pick-up within 8 km</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES GRID */}
      <Section className="mt-16">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <p className="text-slate-600 text-center mt-2 max-w-2xl mx-auto">
          Everything your KIA needs—under one roof. Simple pricing, real-time
          updates, and no surprises.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-slate-100 text-black">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-slate-700">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-black" />{" "}
                    {h}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="mt-20">
        <Card className="p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            How It Works
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <CalendarCheck className="w-5 h-5" />,
                title: "Book",
                text: "Pick date/time online or call us.",
              },
              {
                icon: <Truck className="w-5 h-5" />,
                title: "Pick-up",
                text: "We inspect & collect your car (optional).",
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                title: "Service",
                text: "Live updates and approvals on WhatsApp.",
              },
              {
                icon: <BadgeCheck className="w-5 h-5" />,
                title: "Deliver",
                text: "Washed, sanitized, and delivered back.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  {step.icon}
                </div>
                <p className="mt-3 font-semibold">
                  {i + 1}. {step.title}
                </p>
                <p className="text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* OFFERS / PROMOS */}
      <Section className="mt-16">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            "Free 40-point check",
            "AC service 15% off",
            "Complimentary wash",
            "Doorstep pick-up*",
          ].map((o) => (
            <span
              key={o}
              className="text-sm px-3 py-1 rounded-full border bg-white"
            >
              {o}
            </span>
          ))}
        </div>
      </Section>

      {/* FAQ + BOOKING */}
      <Section className="mt-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-2 text-slate-600">
              Didn’t find what you’re looking for?{" "}
              <a href="/contact" className="font-semibold underline">
                Contact us
              </a>{" "}
              and we’ll help right away.
            </p>
            <div className="mt-6">
              {[
                {
                  q: "How often should I service my KIA?",
                  a: "Follow the service schedule in your owner's manual (typically every 10,000 km or 12 months, whichever is earlier). Driving conditions may change intervals.",
                },
                {
                  q: "Do you use genuine parts?",
                  a: "Yes, we use OEM-approved genuine parts and recommended fluids to keep warranty intact.",
                },
                {
                  q: "Is pick-up & drop available in my area?",
                  a: "Yes, within our service radius. Share your PIN code during booking to confirm coverage.",
                },
                {
                  q: "How long does a standard service take?",
                  a: "Same-day in most cases, subject to parts availability and workshop load.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group border-b py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-medium">{q}</span>
                    <HelpCircle className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" />
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Booking Card */}
          <Card className="p-6" id="booking">
            <h3 className="text-2xl font-bold">Book a Service</h3>
            <p className="text-slate-600 text-sm mt-1">
              Share a few details and we’ll confirm your slot.
            </p>
            <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-3">
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="rounded-xl border px-4 py-2"
                placeholder="Full Name"
                required
              />
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="rounded-xl border px-4 py-2"
                placeholder="Mobile Number (10-15 digits)"
                required
              />
              <input
                name="model"
                value={form.model}
                onChange={onChange}
                className="rounded-xl border px-4 py-2"
                placeholder="KIA Model (e.g., Seltos)"
                required
              />
              <input
                name="date"
                value={form.date}
                onChange={onChange}
                className="rounded-xl border px-4 py-2"
                placeholder="Preferred Date"
                type="date"
                required
              />
              <textarea
                name="note"
                value={form.note}
                onChange={onChange}
                className="rounded-xl border px-4 py-2"
                placeholder="Describe issue / service needed"
                rows={3}
              />
              <button
                type="submit"
                disabled={!isValid}
                className={`mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold shadow hover:shadow-md ${
                  isValid
                    ? "bg-black text-white"
                    : "bg-slate-200 text-slate-500 cursor-not-allowed"
                }`}
              >
                <CalendarCheck className="w-5 h-5" /> Submit Request
              </button>
              <p className="text-[11px] text-slate-500">
                By submitting, you agree to be contacted on phone/WhatsApp.
              </p>
            </form>
          </Card>
        </div>
      </Section>

      {/* CONTACT STRIP */}
      <Section className="mt-16 mb-24" id="contact">
        <Card className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <PhoneCall className="w-6 h-6" />
            <div>
              <p className="text-sm text-slate-600">Need help right now?</p>
              <p className="font-semibold">Call: +91 12345 67890</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6" />
            <div>
              <p className="text-sm text-slate-600">Workshop Hours</p>
              <p className="font-semibold">Mon–Sat: 9:00 AM – 7:00 PM</p>
            </div>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-black text-white font-semibold shadow hover:shadow-md"
          >
            <PhoneCall className="w-5 h-5" /> Contact Us
          </a>
        </Card>
      </Section>

      {/* THANK YOU MODAL */}
      {showThanks && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-bold text-center">Thank you!</h4>
            <p className="mt-1 text-sm text-slate-600 text-center">
              Aapki service book ho gayi hai. Hum jald hi aapse sampark karenge.
            </p>
            <button
              onClick={() => setShowThanks(false)}
              className="mt-4 w-full rounded-xl bg-black px-4 py-2 text-white font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
