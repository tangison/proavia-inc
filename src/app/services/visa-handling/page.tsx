"use client";

import Image from "next/image";
import { Phone, ArrowUpRight, FileText, ClipboardList, Eye, Globe } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";

const features = [
  {
    icon: FileText,
    title: "Application Guidance",
    description: "We identify the correct visa type for your nationality and destination. No guesswork, no wasted applications — just the right path forward.",
  },
  {
    icon: ClipboardList,
    title: "Documentation Support",
    description: "We compile and review your supporting documents before submission. Every requirement checked, every detail verified.",
  },
  {
    icon: Eye,
    title: "Status Follow-Up",
    description: "We monitor your application and update you at every stage. No chasing embassies — we do that for you.",
  },
  {
    icon: Globe,
    title: "All Nationalities",
    description: "We assist travellers from across the globe, including those requiring Namibian visas. No matter your passport, we know the process.",
  },
];

export default function VisaHandlingPage() {
  return (
    <>
      <PageHeader label="VISA HANDLING" title="Visa HandlingServices" italicWord="Services" />

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image alt="Visa handling services — ProAvia Travel & Tours" width={1920} height={640} className="object-cover w-full h-full" sizes="100vw" src="/images/airports/proavia-airport-walvis-bay-exterior.webp" priority />
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
              We handle the{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                paperwork
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-ink/55 leading-relaxed text-lg">
            <p>
              The visa process can be complex and time-sensitive. Our team guides you through every step — from identifying the correct visa category to compiling your documentation and submitting on your behalf where applicable. We take the bureaucracy out of travel.
            </p>
            <p>
              Whether you are visiting Namibia or travelling onward to another destination, ProAvia ensures your visa application is complete, accurate, and submitted on time. One conversation with our team sets everything in motion.
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
                  Get your{" "}
                  <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                    visa
                  </span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Tell us your nationality and destination. We&apos;ll identify the correct visa, compile your documents, and handle the submission — all while keeping you updated on WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%20need%20assistance%20with%20a%20visa."
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
                    const nationality = (form.elements.namedItem("nationality") as HTMLInputElement).value;
                    const destination = (form.elements.namedItem("destination") as HTMLInputElement).value;
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                    const msg = `Hello ProAvia, I need assistance with a visa.\nName: ${name || "Not provided"}\nNationality: ${nationality || "TBD"}\nDestination: ${destination || "TBD"}\nDetails: ${message || "None"}`;
                    window.open(`https://wa.me/264818109185?text=${encodeURIComponent(msg)}`, "_blank");
                  }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="visa-name" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Name *</label>
                      <input id="visa-name" type="text" required name="name" placeholder="Your name" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="visa-nationality" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Nationality</label>
                      <input id="visa-nationality" type="text" name="nationality" placeholder="e.g. German, South African" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="visa-destination" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Destination</label>
                      <input id="visa-destination" type="text" name="destination" placeholder="e.g. Namibia, Botswana" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="visa-date" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Travel Date</label>
                      <input id="visa-date" type="date" className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 [color-scheme:dark]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="visa-message" className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Additional Details</label>
                    <textarea id="visa-message" name="message" placeholder="Purpose of travel, duration of stay, any prior visa applications..." rows={3} className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 py-2 min-h-[80px] resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-gold rounded-xl text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm btn-magnetic cursor-pointer">
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
    </>
  );
}
