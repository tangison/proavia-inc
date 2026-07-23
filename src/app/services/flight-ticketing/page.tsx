"use client";

import Image from "next/image";
import { Phone, ArrowUpRight, Plane, Globe, Clock, MessageCircle } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";
import RelatedServices from "@/components/proavia/related-services";

const features = [
  {
    icon: Plane,
    title: "Domestic Bookings",
    description: "All major Namibian routes including Windhoek, Walvis Bay, and Lüderitz. We secure your seat on the flights that fit your schedule.",
  },
  {
    icon: Globe,
    title: "Regional Routes",
    description: "Southern Africa connections including South Africa, Botswana, Zimbabwe, and Zambia. Cross-border travel sorted.",
  },
  {
    icon: Clock,
    title: "Fast Confirmation",
    description: "Reservations confirmed within the hour. We work quickly so you don't have to wait. Your itinerary is our priority.",
  },
  {
    icon: MessageCircle,
    title: "Itinerary Delivery",
    description: "Your full flight itinerary sent directly to you on WhatsApp upon confirmation. No emails to dig through, no portals to log into.",
  },
];

export default function FlightTicketingPage() {
  return (
    <>
      <PageHeader label="FLIGHT TICKETING" title="Flight Ticketing& Reservations" italicWord="& Reservations" />

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image alt="Walvis Bay International Airport terminal with travelers waiting outside under a sunny sky" width={1920} height={640} className="object-cover w-full h-full" sizes="100vw" src="/images/airports/walvis-bay-airport-travelers-queue.webp" priority />
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
              Your seats,{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                secured
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-ink/55 leading-relaxed text-lg">
            <p>
              Booking flights within Namibia or to neighbouring countries shouldn&apos;t be complicated, but it often is. Airlines change schedules, routes get discontinued, and trying to coordinate domestic connections with international arrivals can be a headache. We handle all of that for you.
            </p>
            <p>
              Send us your travel dates and where you need to go. We check availability across all domestic and regional carriers, find the flights that fit your schedule, book the seats, and send your itinerary straight to WhatsApp. No logging into portals, no confirmation emails buried in your inbox. One message, done.
            </p>
            <p>
              We book domestic routes like Windhoek to Walvis Bay and Lüderitz, as well as regional connections to South Africa, Botswana, Zimbabwe, and Zambia. If you&apos;re not sure which route makes sense, ask us, we fly these routes regularly and know which ones are reliable and which ones to avoid.
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
                    flight
                  </span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Send us your travel dates and preferred route. We&apos;ll confirm availability and have your itinerary to you within the hour, all on WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%27d%20like%20to%20book%20a%20flight."
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
                    const route = (form.elements.namedItem("route") as HTMLInputElement).value;
                    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                    const msg = `Hello ProAvia, I'd like to book a flight.\nName: ${name || "Not provided"}\nRoute: ${route || "TBD"}\nDate: ${date || "TBD"}\nDetails: ${message || "None"}`;
                    window.open(`https://wa.me/264818109185?text=${encodeURIComponent(msg)}`, "_blank");
                  }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="flight-name" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Name *</label>
                      <input id="flight-name" type="text" required name="name" placeholder="Your name" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="flight-route" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Route</label>
                      <input id="flight-route" type="text" name="route" placeholder="e.g. Walvis Bay to Windhoek" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="flight-date" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Travel Date</label>
                      <input id="flight-date" type="date" name="date" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 [color-scheme:dark]" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="flight-passengers" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Passengers</label>
                      <input id="flight-passengers" type="number" min={1} placeholder="e.g. 2" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="flight-message" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Additional Details</label>
                    <textarea id="flight-message" name="message" placeholder="One-way or return, preferred airline, special requests..." rows={3} className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 py-2 min-h-[80px] resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-gold rounded-xl text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm btn-magnetic cursor-pointer">
                    <Phone className="w-4 h-4" />
                    Book via WhatsApp
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                {/* ServiceDisclosure: Flight Ticketing */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-white/60 text-[11px] font-bold tracking-widest uppercase mb-3">Flight Ticketing</p>
                  <ul className="space-y-1.5">
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Airlines control schedules, baggage rules, changes and refunds.</span></li>
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Passenger names must match official travel documents.</span></li>
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>Airline fare rules will be communicated during quotation or booking.</span></li>
                    <li className="text-white/50 text-[11px] leading-relaxed flex items-start gap-2"><span className="text-gold/60 shrink-0">•</span><span>ProAvia cannot guarantee visa approval or airline schedule stability.</span></li>
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
      <RelatedServices exclude="/services/flight-ticketing" />
    </>
  );
}
