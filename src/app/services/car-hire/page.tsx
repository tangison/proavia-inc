"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, ArrowUpRight, Infinity, Car, MapPin, Building2 } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";
import RelatedServices from "@/components/proavia/related-services";

const features = [
  {
    icon: Infinity,
    title: "Unrestricted Freedom",
    description: "Namibia's vastness demands exploration without boundaries. With our unlimited kilometre options, your only focus is the horizon, not the odometer.",
  },
  {
    icon: Car,
    title: "4x4 Capability",
    description: "From the skeletal remains of the coast to the rugged heart of Damaraland, our 4x4 fleet is engineered for the discerning explorer who seeks the road less travelled.",
  },
  {
    icon: MapPin,
    title: "Coastal Collection",
    description: "Acquire your vehicle in Walvis Bay, perfectly positioned for those arriving on the coast or beginning their journey where the desert meets the sea.",
  },
  {
    icon: Building2,
    title: "Capital Pickup",
    description: "Available for collection in Windhoek. A straightforward start from Namibia's capital, whether you're heading to the coast, the desert, or further north.",
  },
];

export default function CarHirePage() {
  const [formData, setFormData] = useState({ name: "", date: "", pickup: "", duration: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ProAvia, I'd like to hire a vehicle.
Name: ${formData.name || "Not provided"}
Pickup Date: ${formData.date || "TBD"}
Location: ${formData.pickup || "TBD"}
Duration: ${formData.duration || "TBD"}
Details: ${formData.message || "None"}`;
    window.open(`https://wa.me/264818109185?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <PageHeader label="CAR HIRE" title="CarHire" italicWord="Hire" />

      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image alt="White ProAvia-branded Volkswagen Polo parked at a Namibian coastal pier at sunset" width={1920} height={640} className="object-cover w-full h-full" sizes="100vw" src="/images/vehicles/proavia-fleet-vw-polo-coastal.webp" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">EXPLORE AT YOUR PACE</span>
            <h2 className="editorial-headline text-4xl md:text-5xl text-ink mb-6">
              Your journey,{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                your rules
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-ink/55 leading-relaxed text-lg">
            <p>
              Namibia is big. Really big. The distances between destinations are measured in hundreds of kilometres, and the best places aren&apos;t always on a paved road. Our car hire is built for that reality: unlimited kilometres, 4x4 options for the gravel roads, and pickup points in both Walvis Bay and Windhoek so you can start your trip wherever makes sense.
            </p>
            <p>
              We don&apos;t do small print traps. The price you see includes unlimited kilometres, insurance, and 24/7 roadside assistance. If you get a flat tyre on the road to Sossusvlei, you call us and we sort it out. We know these roads because we drive them ourselves, and we&apos;ll give you honest advice about which vehicle you actually need for your route.
            </p>
            <p>
              Choose a sedan if you&apos;re sticking to the highways. Choose a 4x4 if you&apos;re heading into Damaraland, the Skeleton Coast, or anywhere that requires a proper vehicle. We&apos;ll never talk you into a bigger car than you need, but we&apos;ll also make sure you don&apos;t end up stuck somewhere you shouldn&apos;t be.
            </p>
          </div>
        </div>
      </section>

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
                  Hire your{" "}
                  <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                    vehicle
                  </span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Tell us your travel dates and preferred pickup location. We&apos;ll match you with the right vehicle: 4x4 for the gravel roads, sedan for the highways.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%27d%20like%20to%20hire%20a%20vehicle."
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
                      <label htmlFor="carhire-name" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Name *</label>
                      <input id="carhire-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="carhire-date" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Pickup Date</label>
                      <input id="carhire-date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 [color-scheme:dark]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="carhire-pickup" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Pickup Location</label>
                      <select id="carhire-pickup" value={formData.pickup} onChange={(e) => setFormData({ ...formData, pickup: e.target.value })} className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 [color-scheme:dark]">
                        <option value="">Select location</option>
                        <option value="Walvis Bay">Walvis Bay</option>
                        <option value="Windhoek">Windhoek</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="carhire-duration" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Duration</label>
                      <input id="carhire-duration" type="text" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} placeholder="e.g. 5 days" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="carhire-message" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Additional Details</label>
                    <textarea id="carhire-message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Vehicle preference, planned destinations, 4x4 required..." rows={3} className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 py-2 min-h-[80px] resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-gold rounded-xl text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm btn-magnetic cursor-pointer">
                    <Phone className="w-4 h-4" />
                    Book via WhatsApp
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                {/* ServiceDisclosure: Car Hire */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-white/60 text-[11px] font-bold tracking-widest uppercase mb-3">Car Hire</p>
                  <ul className="space-y-1.5">
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Driver eligibility and document requirements apply.</span></li>
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Deposits, insurance excess, fuel rules, vehicle-use restrictions and cancellation terms must be disclosed in the quotation or rental agreement.</span></li>
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Vehicle availability is not confirmed until written confirmation.</span></li>
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
      <RelatedServices exclude="/services/car-hire" />
    </>
  );
}
