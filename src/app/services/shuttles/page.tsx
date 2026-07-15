"use client";

import Image from "next/image";
import { Phone, ArrowUpRight, MapPin, Route, Calendar, Car } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";
import RelatedServices from "@/components/proavia/related-services";

const features = [
  {
    icon: MapPin,
    title: "Walvis Bay to Swakopmund",
    description: "Regular runs between the two coastal towns. Quick, comfortable, and on time. The journey you take most, made effortless.",
  },
  {
    icon: Route,
    title: "Walvis Bay to Windhoek",
    description: "Intercity shuttle connecting the coast to the capital. A comfortable ride through Namibia's scenic interior, no driving required.",
  },
  {
    icon: Calendar,
    title: "Scheduled & On-Demand",
    description: "Join a scheduled run or book a dedicated shuttle for your group. Flexibility built around your travel plans, not the other way around.",
  },
  {
    icon: Car,
    title: "Comfortable Vehicles",
    description: "Insured, maintained fleet operated by professional drivers. Your safety and comfort are non-negotiable, every seat, every run.",
  },
];

export default function ShuttlesPage() {
  return (
    <>
      <PageHeader label="SHUTTLE SERVICES" title="ShuttleServices" italicWord="Services" />

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image alt="White ProAvia-branded Toyota minivan parked at an airport terminal in Namibia" width={1920} height={640} className="object-cover w-full h-full" sizes="100vw" src="/images/vehicles/proavia-fleet-toyota-minivan-airport.webp" priority />
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
              Reliable runs,{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                every time
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-ink/55 leading-relaxed text-lg">
            <p>
              Not everyone needs a private transfer, and not every trip calls for a rental car. Our shuttle service fills the gap: scheduled runs and on-demand rides between Walvis Bay, Swakopmund, and Windhoek that are reliable, affordable, and actually comfortable.
            </p>
            <p>
              The Walvis Bay to Swakopmund route is the one most travellers need, and we run it regularly. It&apos;s a short drive along the coast, and our shuttles get you there without the hassle of arranging a taxi or waiting for an unpredictable bus. For the longer trip between Walvis Bay and Windhoek, we offer comfortable vehicles with space for luggage and a driver who knows the road.
            </p>
            <p>
              You can book a seat on a scheduled run or request a private shuttle for your group. Either way, you&apos;re travelling in an insured, well-maintained vehicle driven by a professional. No sketchy minibuses, no bargaining with drivers who don&apos;t know the route.
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
                    shuttle
                  </span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Tell us your route and travel date. We&apos;ll confirm your seat on the next available shuttle, or arrange a dedicated run for your group.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%27d%20like%20to%20book%20a%20shuttle."
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
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                    const route = (form.elements.namedItem("route") as HTMLSelectElement).value;
                    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                    const msg = `Hello ProAvia, I'd like to book a shuttle.\nName: ${name || "Not provided"}\nRoute: ${route || "TBD"}\nDate: ${date || "TBD"}\nDetails: ${message || "None"}`;
                    window.open(`https://wa.me/264818109185?text=${encodeURIComponent(msg)}`, "_blank");
                  }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="shuttle-name" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Name *</label>
                      <input id="shuttle-name" type="text" required name="name" placeholder="Your name" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="shuttle-route" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Route</label>
                      <select id="shuttle-route" name="route" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 [color-scheme:dark] focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none">
                        <option value="">Select route</option>
                        <option value="Walvis Bay to Swakopmund">Walvis Bay to Swakopmund</option>
                        <option value="Swakopmund to Walvis Bay">Swakopmund to Walvis Bay</option>
                        <option value="Walvis Bay to Windhoek">Walvis Bay to Windhoek</option>
                        <option value="Windhoek to Walvis Bay">Windhoek to Walvis Bay</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="shuttle-date" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Travel Date</label>
                      <input id="shuttle-date" type="date" name="date" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 [color-scheme:dark]" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="shuttle-passengers" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Passengers</label>
                      <input id="shuttle-passengers" type="number" min={1} placeholder="e.g. 2" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="shuttle-message" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Additional Details</label>
                    <textarea id="shuttle-message" name="message" placeholder="Scheduled or private, pickup address, luggage details..." rows={3} className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 py-2 min-h-[80px] resize-none" />
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
      <RelatedServices exclude="/services/shuttles" />
    </>
  );
}
