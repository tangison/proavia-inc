"use client";

import Image from "next/image";
import { Phone, ArrowUpRight, UserCheck, Luggage, Crown, Clock } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";
import RelatedServices from "@/components/proavia/related-services";

const features = [
  {
    icon: UserCheck,
    title: "Check-In Support",
    description: "We coordinate your check-in process so you move through the airport without friction. From boarding pass to gate, we keep you on track.",
  },
  {
    icon: Luggage,
    title: "Luggage Handling",
    description: "Assistance with your luggage from vehicle to check-in desk. No struggling with bags. We handle the heavy lifting so you travel light.",
  },
  {
    icon: Crown,
    title: "VIP Meet & Greet",
    description: "A dedicated ProAvia representative greets you on arrival or escorts you to departures. Ideal for first-time visitors, corporate clients, and government delegates.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Available for early departures, late arrivals, and everything in between. Our team operates around the clock because flights don't follow a schedule.",
  },
];

export default function AirportAssistancePage() {
  return (
    <>
      <PageHeader label="AIRPORT ASSISTANCE" title="AirportAssistance" italicWord="Assistance" />

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image alt="Walvis Bay International Airport exterior with DEPARTURES and ARRIVALS signage, palm trees, and blue sky" width={1920} height={640} className="object-cover w-full h-full" sizes="100vw" src="/images/airports/walvis-bay-airport-exterior-departures.webp" priority />
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
              Beyond the{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                transfer
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-ink/55 leading-relaxed text-lg">
            <p>
              Sometimes a transfer isn&apos;t enough. Maybe it&apos;s your first time in Namibia and you&apos;re not sure where to go after customs. Maybe you&apos;re travelling with a delegation that needs to move through the airport quickly. Or maybe you just don&apos;t want to carry your own bags. That&apos;s what this service is for.
            </p>
            <p>
              Our airport assistance goes beyond the ride. We meet you at the gate or arrivals, help with check-in if you&apos;re departing, handle your luggage, and make sure you get where you need to be without the usual airport stress. For VIP clients and government delegates, we offer discreet meet-and-greet service that gets you through the airport without the crowds.
            </p>
            <p>
              This is a popular add-on for corporate groups, first-time visitors, and anyone who values their time at the airport more than navigating it alone. We&apos;re available around the clock because flights and schedules don&apos;t always cooperate with business hours.
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
                  Arrange{" "}
                  <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                    assistance
                  </span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Let us know your flight details and what you need. Whether it&apos;s a simple meet-and-greet or full VIP service, we&apos;ll have someone there for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%20need%20airport%20assistance."
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
                    const flight = (form.elements.namedItem("flight") as HTMLInputElement).value;
                    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                    const msg = `Hello ProAvia, I need airport assistance.\nName: ${name || "Not provided"}\nFlight: ${flight || "TBD"}\nDate: ${date || "TBD"}\nDetails: ${message || "None"}`;
                    window.open(`https://wa.me/264818109185?text=${encodeURIComponent(msg)}`, "_blank");
                  }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="airport-name" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Name *</label>
                      <input id="airport-name" type="text" required name="name" placeholder="Your name" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="airport-flight" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Flight Number</label>
                      <input id="airport-flight" type="text" name="flight" placeholder="e.g. SW 123" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="airport-date" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Travel Date</label>
                      <input id="airport-date" type="date" name="date" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 [color-scheme:dark]" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="airport-service" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Service Type</label>
                      <select id="airport-service" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 [color-scheme:dark] focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none">
                        <option value="">Select service</option>
                        <option value="Meet & Greet">Meet & Greet</option>
                        <option value="Full Assistance">Full Assistance</option>
                        <option value="VIP Service">VIP Service</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="airport-message" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Additional Details</label>
                    <textarea id="airport-message" name="message" placeholder="Number of passengers, luggage details, special requirements..." rows={3} className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 py-2 min-h-[80px] resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-gold rounded-xl text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm btn-magnetic cursor-pointer">
                    <Phone className="w-4 h-4" />
                    Book via WhatsApp
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                {/* ServiceDisclosure: Airport Assistance */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-white/60 text-[11px] font-bold tracking-widest uppercase mb-3">Airport Assistance</p>
                  <ul className="space-y-1.5">
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Service availability depends on airport operating hours and staff scheduling.</span></li>
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Customers must provide accurate flight details and passenger information.</span></li>
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Any third-party airport or VIP lounge fees may be passed through at cost.</span></li>
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
      <RelatedServices exclude="/services/airport-assistance" />
    </>
  );
}
