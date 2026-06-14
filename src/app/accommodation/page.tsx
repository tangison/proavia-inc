"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, ArrowUpRight, Wifi, Car, Shield, UtensilsCrossed } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";
import RelatedServices from "@/components/proavia/related-services";

const rooms = [
  {
    image: "/images/accommodation/proavia-service-hotel-room-modern.webp",
    title: "Modern Suites",
    description: "Contemporary living spaces with premium furnishings and ocean-influenced design.",
  },
  {
    image: "/images/accommodation/proavia-service-accommodation-living-room-tv.webp",
    title: "Living Areas",
    description: "Spacious lounge areas with smart entertainment systems and curated décor.",
  },
  {
    image: "/images/accommodation/proavia-service-accommodation-kitchen-black-modern.webp",
    title: "Gourmet Kitchens",
    description: "Fully equipped modern kitchens with premium appliances and everything you need to cook your own meals.",
  },
  {
    image: "/images/accommodation/proavia-service-accommodation-shower-bathroom.webp",
    title: "Luxury Bathrooms",
    description: "Designer bathrooms with premium fixtures, rainfall showers, and heated towel rails.",
  },
];

const features = [
  { icon: Wifi, title: "High-Speed WiFi", description: "Fibre-optic internet throughout your stay. Stream, video call, or plan your next day's route without waiting." },
  { icon: Car, title: "Secure Parking", description: "Dedicated, covered parking for your vehicle on every property. Your car stays safe while you sleep." },
  { icon: Shield, title: "24/7 Security", description: "Round-the-clock security and emergency support. Peace of mind, whether you're out exploring or fast asleep." },
  { icon: UtensilsCrossed, title: "Self-Catering", description: "Fully equipped kitchens so you can cook when you want and eat out when you don't. Your schedule, your choice." },
];

export default function AccommodationPage() {
  const [formData, setFormData] = useState({ name: "", checkin: "", location: "", duration: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ProAvia, I'd like to book accommodation.
Name: ${formData.name || "Not provided"}
Check-in: ${formData.checkin || "TBD"}
Location: ${formData.location || "TBD"}
Duration: ${formData.duration || "TBD"}
Details: ${formData.message || "None"}`;
    window.open(`https://wa.me/264818109185?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <PageHeader
        label="ACCOMMODATION"
        title="LuxuryAccommodation"
        italicWord="Accommodation"
        description="Curated residential properties in Walvis Bay and Swakopmund. Fully equipped, elegantly appointed, and positioned for exploration."
      />

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image
                alt="Luxury desert tent accommodation with bathtub view"
                width={1920}
                height={640}
                className="object-cover w-full h-full"
                sizes="100vw"
                src="/images/experiences/client-luxury-tent-bed-view.webp"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto space-y-5 text-ink/55 leading-relaxed text-lg">
          <p>
            Our accommodation collection represents the finest residential properties in Walvis Bay and Swakopmund. Each property has been hand-picked for its location, comfort, and ability to serve as a proper home base while you explore Namibia. These are not hotel rooms — they are fully furnished homes where you can unpack, cook your own meals, and settle in.
          </p>
          <p>
            From modern apartments overlooking the lagoon to spacious family homes within walking distance of the beach, every property comes with premium appliances, high-speed WiFi, and the kind of thoughtful details that make a difference when you&apos;re far from home. Fresh linen, quality cookware, reliable hot water — the basics that shouldn&apos;t be a question mark.
          </p>
          <p>
            We manage each property ourselves. That means if something breaks, we fix it. If you need a late checkout, you talk to us directly. No call centres, no waiting for a manager who&apos;s never around. You deal with ProAvia from booking to checkout, and we keep things simple.
          </p>
        </div>
      </section>

      {/* Room Gallery */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24 bg-white/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">PROPERTIES</span>
            <h2 className="editorial-headline text-4xl md:text-5xl text-ink">
              Our{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                collection
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rooms.map((room) => (
              <div key={room.title} className="double-bezel-outer proavia-card">
                <div className="double-bezel-inner overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image alt={room.title} width={400} height={300} className="object-cover w-full h-full" sizes="100vw" src={room.image} />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-serif text-ink mb-2">{room.title}</h3>
                    <p className="text-ink/50 text-sm leading-relaxed">{room.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="double-bezel-outer h-full proavia-card">
                <div className="double-bezel-inner p-6 md:p-8 flex flex-col h-full">
                  <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <feat.icon className="w-5 h-5 text-gold" />
                  </span>
                  <h3 className="text-xl font-serif text-ink mb-2">{feat.title}</h3>
                  <p className="text-ink/50 text-sm leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-ink rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.15" />
                <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.15" />
              </svg>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 relative z-10">
              <div>
                <h2 className="editorial-headline text-4xl md:text-6xl text-white mb-4">
                  Book your{" "}
                  <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                    stay
                  </span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Tell us your travel dates and preferred location — Walvis Bay or Swakopmund. We&apos;ll match you with the right property and confirm everything on WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%27d%20like%20to%20book%20accommodation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 bg-gold rounded-full text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-sm btn-magnetic"
                  >
                    <Phone className="w-4 h-4" />
                    Quick WhatsApp
                  </a>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="accommodation-name" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Name *</label>
                      <input
                        id="accommodation-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="accommodation-checkin" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Check-in Date</label>
                      <input
                        id="accommodation-checkin"
                        type="date"
                        value={formData.checkin}
                        onChange={(e) => setFormData({ ...formData, checkin: e.target.value })}
                        className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="accommodation-location" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Location</label>
                      <select
                        id="accommodation-location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 [color-scheme:dark] focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none"
                      >
                        <option value="">Select location</option>
                        <option value="Walvis Bay">Walvis Bay</option>
                        <option value="Swakopmund">Swakopmund</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="accommodation-duration" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Duration</label>
                      <input
                        id="accommodation-duration"
                        type="text"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        placeholder="e.g. 5 nights"
                        className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="accommodation-message" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Additional Details</label>
                    <textarea
                      id="accommodation-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Group size, special requests, budget range..."
                      rows={3}
                      className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 py-2 min-h-[80px] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gold rounded-xl text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm btn-magnetic cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    Book via WhatsApp
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedServices exclude="/accommodation" />
    </>
  );
}
