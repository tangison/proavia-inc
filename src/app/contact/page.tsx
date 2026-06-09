"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Clock, Globe, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/proavia/page-header";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", topic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ProAvia, I'd like to get in touch.
Name: ${formData.name || "Not provided"}
Regarding: ${formData.topic || "General"}
Message: ${formData.message || "None"}`;
    window.open(`https://wa.me/264818109185?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <PageHeader
        label="CONTACT"
        title="Get intouch."
        italicWord="touch."
        description="WhatsApp, call, or email — whichever suits you. We respond within minutes on WhatsApp."
      />

      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold/60 mb-4 block">REACH US</span>
                <h2 className="editorial-headline text-3xl md:text-4xl text-ink">
                  Get in{" "}
                  <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                    touch
                  </span>
                </h2>
              </div>
              <p className="text-ink/50 text-sm leading-relaxed">WhatsApp is the fastest way to reach us. We respond within minutes, not hours. No automated replies, no holding queues — a real person on the other end who can answer your questions and get things sorted right away.</p>
              <div className="space-y-4">
                <a href="tel:+264818109185" className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-gold" />
                  </span>
                  <div>
                    <span className="text-ink/50 text-[10px] uppercase tracking-widest font-medium block">Phone / WhatsApp</span>
                    <span className="text-ink/80 text-sm group-hover:text-gold transition-colors duration-300">+264 81 810 9185</span>
                  </div>
                </a>
                <a href="mailto:proaviatravel@gmail.com" className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-gold" />
                  </span>
                  <div>
                    <span className="text-ink/50 text-[10px] uppercase tracking-widest font-medium block">Email</span>
                    <span className="text-ink/80 text-sm group-hover:text-gold transition-colors duration-300">proaviatravel@gmail.com</span>
                  </div>
                </a>
                <a href="https://maps.app.goo.gl/V2TnUoufwFc9ypJx7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-gold" />
                  </span>
                  <div>
                    <span className="text-ink/50 text-[10px] uppercase tracking-widest font-medium block">Address</span>
                    <span className="text-ink/80 text-sm group-hover:text-gold transition-colors duration-300">154 Sam Nujoma Ave, Walvis Bay Urban, Erongo, Namibia</span>
                    <span className="text-gold/50 text-[10px] tracking-wider uppercase block mt-0.5">View on Google Maps</span>
                  </div>
                </a>
                <a href="https://www.facebook.com/ProaviaHoldingsNamibia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-full bg-ocean/10 flex items-center justify-center shrink-0 group-hover:bg-ocean/20 transition-colors duration-300">
                    <Facebook className="w-4 h-4 text-ocean" />
                  </span>
                  <div>
                    <span className="text-ink/50 text-[10px] uppercase tracking-widest font-medium block">Facebook</span>
                    <span className="text-ink/80 text-sm group-hover:text-ocean transition-colors duration-300">Proavia Holdings Namibia</span>
                    <span className="text-ink/50 text-[10px] tracking-wider uppercase block mt-0.5">Tour itineraries & updates</span>
                  </div>
                </a>
              </div>
              <div className="pt-4">
                <a
                  href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%27d%20like%20to%20get%20in%20touch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-ink text-white pl-6 pr-3 py-3.5 rounded-full text-[13px] font-semibold tracking-tight btn-magnetic group"
                >
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                  <span className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="double-bezel-outer">
                <div className="double-bezel-inner p-6 md:p-8 lg:p-10">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold/60 mb-6 block">SEND A MESSAGE</span>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-ink/50 text-[11px] uppercase tracking-widest font-medium">Your Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah van der Merwe"
                        className="w-full h-12 rounded-xl bg-canvas-warm border border-black/5 px-3 text-base outline-none focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-topic" className="text-ink/50 text-[11px] uppercase tracking-widest font-medium">Regarding</label>
                      <select
                        id="contact-topic"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full h-12 rounded-xl bg-canvas-warm border border-black/5 px-3 text-sm outline-none focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px]"
                      >
                        <option value="">Select a topic</option>
                        <option value="Transfer">Airport Transfer</option>
                        <option value="Tour">Tour Booking</option>
                        <option value="Car Hire">Car Hire</option>
                        <option value="Accommodation">Accommodation</option>
                        <option value="General">General Enquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="text-ink/50 text-[11px] uppercase tracking-widest font-medium">Message</label>
                      <textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        rows={4}
                        className="w-full rounded-xl bg-canvas-warm border border-black/5 px-3 py-2 text-base outline-none focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] min-h-[120px] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-ink rounded-xl text-white font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-sm btn-magnetic cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      Send via WhatsApp
                      <span className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                    <p className="text-ink/30 text-[11px] text-center">Your message will open WhatsApp with a pre-filled enquiry</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24 bg-canvas-warm">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="double-bezel-outer h-full proavia-card">
              <div className="double-bezel-inner p-6 md:p-8 flex flex-col h-full">
                <span className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-ocean" />
                </span>
                <h3 className="text-lg font-serif text-ink mb-2">Business Hours</h3>
                <p className="text-ink/50 text-sm leading-relaxed">Mon – Fri: 08:00 – 17:00<br />Sat: 09:00 – 13:00<br />Sun: Emergency only</p>
                <p className="text-ink/35 text-[11px] mt-3">WhatsApp available 24/7 — we respond within minutes</p>
              </div>
            </div>
            <div className="double-bezel-outer h-full proavia-card">
              <div className="double-bezel-inner p-6 md:p-8 flex flex-col h-full">
                <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-gold" />
                </span>
                <h3 className="text-lg font-serif text-ink mb-2">Service Area</h3>
                <p className="text-ink/50 text-sm leading-relaxed">Based in Walvis Bay. We cover transfers between Windhoek, Swakopmund, and the coast. Tours depart from Walvis Bay. Car hire available in both Walvis Bay and Windhoek.</p>
              </div>
            </div>
            <div className="double-bezel-outer h-full proavia-card">
              <div className="double-bezel-inner p-6 md:p-8 flex flex-col h-full">
                <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-gold" />
                </span>
                <h3 className="text-lg font-serif text-ink mb-2">Ready to Book?</h3>
                <p className="text-ink/50 text-sm leading-relaxed mb-4">Use our booking form for service-specific requests with all the details — dates, flight numbers, pickup locations.</p>
                <a className="text-gold text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300" href="/booking">
                  Book now <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24 trustee-strip">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/50">Accredited & Recognised</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <Image alt="ATTA" width={120} height={60} className="h-10 md:h-12 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300" src="/images/atta-logo.webp" loading="lazy" />
            <Image alt="NIPDB" width={120} height={60} className="h-10 md:h-12 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300" src="/images/nipdb-logo.webp" loading="lazy" />
            <Image alt="NTB" width={120} height={60} className="h-10 md:h-12 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300" src="/images/ntb-logo.webp" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
