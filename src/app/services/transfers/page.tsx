"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, ArrowUpRight, Clock, Shield, MapPin, HandshakeIcon } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";
import RelatedServices from "@/components/proavia/related-services";

const features = [
  {
    icon: HandshakeIcon,
    title: "Bespoke Reception",
    description: "Your dedicated driver awaits within the arrivals hall at Hosea Kutako or Walvis Bay, name board in hand, ready to facilitate your onward journey.",
  },
  {
    icon: Clock,
    title: "Absolute Availability",
    description: "Our concierge-level transfer service operates around the clock. Whether you land at dawn or dusk, we are there.",
  },
  {
    icon: MapPin,
    title: "Sanctuary-to-Sanctuary",
    description: "From the terminal to your retreat. Whether it's a coastal lodge or a city-center residence, we provide a seamless, private transition.",
  },
  {
    icon: Shield,
    title: "Vetted Excellence",
    description: "Our meticulously maintained fleet is fully insured and operated by professional drivers who possess an intimate knowledge of the Namibian landscape.",
  },
];

export default function TransfersPage() {
  const [formData, setFormData] = useState({ name: "", date: "", pickup: "", flight: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ProAvia, I need an airport transfer.
Name: ${formData.name || "Not provided"}
Date: ${formData.date || "TBD"}
Pickup: ${formData.pickup || "TBD"}
Flight: ${formData.flight || "TBD"}
Details: ${formData.message || "None"}`;
    window.open(`https://wa.me/264818109185?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <PageHeader label="TRANSFERS" title="Airport & CityTransfers" italicWord="Transfers" />

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image alt="Airport transfer shuttle, ProAvia Travel & Tours" width={1920} height={640} className="object-cover w-full h-full" sizes="100vw" src="/images/vehicles/vehicle-walvis-bay-airport-shuttle.webp" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">WHAT WE OFFER</span>
            <h2 className="editorial-headline text-4xl md:text-5xl text-ink mb-6">
              Your driver is already{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                waiting
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-ink/55 leading-relaxed text-lg">
            <p>
              When you land at Hosea Kutako International or Walvis Bay Airport, the last thing you want is to figure out transport on the spot. Our private transfers sort that out before you even board your flight. Your driver is waiting inside arrivals with your name, and from there it&apos;s a straight drive to your hotel, guesthouse, or accommodation, no detours, no shared shuttles, no waiting for other passengers.
            </p>
            <p>
              We operate 24 hours a day because flights don&apos;t always land at convenient times. Early morning, late at night, delayed by two hours: it doesn&apos;t matter. Your driver tracks your flight and adjusts accordingly. You won&apos;t be standing outside an empty airport wondering where your ride is.
            </p>
            <p>
              All our vehicles are insured and maintained, and our drivers know the routes between Windhoek, Walvis Bay, and Swakopmund like the back of their hand. It&apos;s a simple service, but we take it seriously because it&apos;s often the first impression you get of Namibia.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24 bg-white/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">INCLUDED</span>
            <h2 className="editorial-headline text-4xl md:text-5xl text-ink">
              What&apos;s{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                included
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

      {/* Booking CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
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
                    transfer
                  </span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Fill in your details and we&apos;ll confirm your transfer on WhatsApp within minutes. We operate 24/7, late flights and early arrivals are our normal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%20need%20an%20airport%20transfer."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 bg-gold rounded-full text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-sm btn-magnetic"
                  >
                    <Phone className="w-4 h-4" />
                    Quick WhatsApp
                    <span className="w-7 h-7 bg-ink/10 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="transfer-name" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Name *</label>
                      <input id="transfer-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="transfer-date" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Date</label>
                      <input id="transfer-date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 [color-scheme:dark]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="transfer-pickup" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Pickup Location</label>
                      <select id="transfer-pickup" value={formData.pickup} onChange={(e) => setFormData({ ...formData, pickup: e.target.value })} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 [color-scheme:dark]">
                        <option value="">Select airport</option>
                        <option value="Hosea Kutako">Hosea Kutako (WDH)</option>
                        <option value="Walvis Bay Airport">Walvis Bay Airport (WVB)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="transfer-flight" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Flight Number</label>
                      <input id="transfer-flight" type="text" value={formData.flight} onChange={(e) => setFormData({ ...formData, flight: e.target.value })} placeholder="e.g. SW 123" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="transfer-message" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Additional Details</label>
                    <textarea id="transfer-message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Drop-off address, number of passengers, luggage details..." rows={3} className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 py-2 min-h-[80px] resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-gold rounded-xl text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm btn-magnetic cursor-pointer">
                    <Phone className="w-4 h-4" />
                    Book via WhatsApp
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                {/* ServiceDisclosure: Transfers and Shuttles */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-white/60 text-[11px] font-bold tracking-widest uppercase mb-3">Transfers and Shuttles</p>
                  <ul className="space-y-1.5">
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Customers must provide accurate pickup information.</span></li>
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Customers should notify ProAvia of flight delays or itinerary changes.</span></li>
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Waiting-time or no-show conditions may be included in the quotation.</span></li>
                  </ul>
                  <p className="text-white/40 text-[10px] mt-3">
                    See our <a href="/terms" className="text-gold/80 hover:text-gold underline underline-offset-2">Terms and Conditions</a> and <a href="/cancellation-policy" className="text-gold/80 hover:text-gold underline underline-offset-2">Cancellation and Refund Policy</a> for the full details.
                  </p>
                </div>

                
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices exclude="/services/transfers" />
    </>
  );
}
