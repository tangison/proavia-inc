"use client";

import { useState } from "react";
import { Phone, ArrowUpRight, Plane, Compass, Car } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";

const quickBookItems = [
  {
    href: "https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%20need%20an%20airport%20transfer.",
    icon: Plane,
    title: "Airport Transfer",
    description: "Your driver meets you at Hosea Kutako or Walvis Bay airport",
  },
  {
    href: "https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%27m%20interested%20in%20a%20Sandwich%20Harbour%20tour.",
    icon: Compass,
    title: "Sandwich Harbour Tour",
    description: "4x4 adventure where the Namib Desert meets the Atlantic",
  },
  {
    href: "https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%27d%20like%20to%20hire%20a%20vehicle.",
    icon: Car,
    title: "Car Hire",
    description: "Reliable vehicles with unlimited km — Walvis Bay or Windhoek pickup",
  },
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    name: "",
    passengers: "",
    pickup: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ProAvia, I'd like to book:
Service: ${formData.service || "Not specified"}
Date: ${formData.date || "TBD"}
Name: ${formData.name || "Not provided"}
Passengers: ${formData.passengers || "TBD"}
Pickup: ${formData.pickup || "TBD"}
Details: ${formData.message || "None"}`;

    window.open(`https://wa.me/264818109185?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <PageHeader
        label="BOOKING"
        title="Book yourtrip"
        italicWord="trip"
        description="Fill in the form below and your booking request opens WhatsApp. We respond within minutes."
      />

      {/* Booking Form */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-ink rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.15" />
                <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.15" />
                <path d="M0,70 Q25,20 50,70 T100,70" fill="none" stroke="white" strokeWidth="0.15" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mb-10">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold/60 mb-4 block">BOOK NOW</span>
                <h2 className="editorial-headline text-3xl md:text-4xl text-white mb-3">
                  Tell us what you{" "}
                  <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                    need
                  </span>
                </h2>
                <p className="text-white/40 text-sm">
                  Fill in the details below. Your booking request opens WhatsApp with a structured message — we respond within minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 lg:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Service *</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white px-3 [color-scheme:dark] focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Sandwich Harbour Tour">Sandwich Harbour Tour</option>
                      <option value="Catamaran Cruise">Catamaran Cruise</option>
                      <option value="Spitzkoppe Adventure">Spitzkoppe Adventure</option>
                      <option value="Skeleton Coast Tour">Skeleton Coast Tour</option>
                      <option value="Moon Valley Tour">Moon Valley Tour</option>
                      <option value="Swakopmund Tour">Swakopmund Tour</option>
                      <option value="Classic Namibia Safari">Classic Namibia Safari</option>
                      <option value="Car Hire">Car Hire</option>
                      <option value="Accommodation">Accommodation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white px-3 [color-scheme:dark] focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah van der Merwe"
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Number of Passengers</label>
                    <input
                      type="number"
                      min={1}
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      placeholder="e.g. 2"
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Pickup / Location</label>
                  <select
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white px-3 [color-scheme:dark] focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none"
                  >
                    <option value="">Select pickup location</option>
                    <option value="Hosea Kutako Airport">Hosea Kutako Airport (WDH)</option>
                    <option value="Walvis Bay Airport">Walvis Bay Airport (WVB)</option>
                    <option value="Walvis Bay">Walvis Bay (City)</option>
                    <option value="Swakopmund">Swakopmund</option>
                    <option value="Windhoek">Windhoek (City)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Additional Details</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your trip — destinations, group size, special requests..."
                    rows={4}
                    className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 py-2 min-h-[120px] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold rounded-xl text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-sm btn-magnetic cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  Send via WhatsApp
                  <span className="w-7 h-7 bg-ink/10 rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
                <p className="text-white/30 text-[11px] text-center">
                  Your booking request will open WhatsApp with a pre-filled message. We respond within minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Book */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-10 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">QUICK BOOK</span>
            <h2 className="editorial-headline text-3xl md:text-4xl text-ink">
              Or book{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                directly
              </span>
            </h2>
            <p className="text-ink/40 text-sm mt-3">
              Tap a service below to start a WhatsApp conversation instantly. No form required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickBookItems.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="double-bezel-outer h-full proavia-card">
                  <div className="double-bezel-inner p-6 flex flex-col items-center text-center h-full">
                    <span className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-gold" />
                    </span>
                    <h3 className="text-base font-serif text-ink mb-1.5">{item.title}</h3>
                    <p className="text-ink/40 text-xs leading-relaxed mb-4">{item.description}</p>
                    <span className="text-gold text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                      <Phone className="w-3 h-3" />
                      Book now
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
