import Image from "next/image";
import Link from "next/link";
import { Star, Users, MapPin, Phone, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";

export default function AboutPage() {
  return (
    <>
      <PageHeader label="ABOUT PROAVIA" title="Based inWalvis Bay" italicWord="Walvis Bay" description="ProAvia Travel & Tours is a premium Namibian-owned company in Erongo. We provide bespoke airport transfers, Sandwich Harbour tours, 4x4 car hire, and luxury residential accommodation across Namibia." />

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image
                alt="The Walvis Bay Salt Shore — ProAvia's home territory"
                fill
                className="object-cover"
                sizes="100vw"
                src="/images/destinations/destination-walvis-bay-salt-shore.webp"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/50 animate-float">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                    <Star className="w-5 h-5 text-gold" />
                  </span>
                  <div>
                    <span className="text-2xl font-serif text-ink block leading-none">5.0</span>
                    <span className="text-ink/50 text-[11px] font-medium tracking-wider uppercase">Facebook Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">WHO WE ARE</span>
            <h2 className="editorial-headline text-4xl md:text-5xl text-ink mb-6">
              A proud Namibian{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                company
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-ink/55 leading-relaxed text-lg">
            <p>
              ProAvia Travel & Tours is a diversified, premium Namibian-owned company based in Walvis Bay, Erongo. We provide bespoke airport transfers, Sandwich Harbour 4x4 expeditions, unrestricted car hire, and a curated residential collection — serving Walvis Bay, Swakopmund, and the greater Namibian landscape.
            </p>
            <p>
              We are a female-owned enterprise with an impeccable 5.0 rating on Facebook. From orchestrating complex logistical transitions to providing sanctuary-level accommodation, our standard of service remains uncompromised.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="double-bezel-outer proavia-card">
              <div className="double-bezel-inner p-6 flex flex-col items-center text-center">
                <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-gold" />
                </span>
                <span className="text-3xl font-serif text-ink">5.0</span>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40 mt-1">Facebook Rating</span>
              </div>
            </div>
            <div className="double-bezel-outer proavia-card">
              <div className="double-bezel-inner p-6 flex flex-col items-center text-center">
                <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-gold" />
                </span>
                <span className="text-3xl font-serif text-ink">Female</span>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40 mt-1">Owned Business</span>
              </div>
            </div>
            <div className="double-bezel-outer proavia-card">
              <div className="double-bezel-inner p-6 flex flex-col items-center text-center">
                <span className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-ocean" />
                </span>
                <span className="text-3xl font-serif text-ink">Walvis Bay</span>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40 mt-1">Erongo, Namibia</span>
              </div>
            </div>
          </div>
          <div className="pt-6 text-ink/35 text-sm flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <a
              href="https://maps.app.goo.gl/V2TnUoufwFc9ypJx7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              154 Sam Nujoma Ave, Walvis Bay Urban, Erongo, Namibia
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-ink rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.15" />
                <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.15" />
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="editorial-headline text-3xl md:text-5xl text-white mb-4">
                Begin your{" "}
                <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                  journey
                </span>
              </h3>
              <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
                Secure your transfer, expedition, vehicle, or accommodation in moments. A single WhatsApp message activates our concierge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%27d%20like%20to%20book%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 bg-gold rounded-full text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-sm btn-magnetic"
                >
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <Link
                  className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold tracking-widest uppercase hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-sm btn-magnetic"
                  href="/booking"
                >
                  Book Online
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24 trustee-strip">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/30">Accredited & Recognised</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <Image alt="ATTA — African Travel and Tourism Association" width={120} height={60} className="h-10 md:h-12 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300" src="/images/atta-logo.webp" />
            <Image alt="NIPDB — Namibia Investment Promotion and Development Board" width={120} height={60} className="h-10 md:h-12 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300" src="/images/nipdb-logo.webp" />
            <Image alt="NTB — Namibia Tourism Board" width={120} height={60} className="h-10 md:h-12 w-auto opacity-50 hover:opacity-80 transition-opacity duration-300" src="/images/ntb-logo.webp" />
          </div>
        </div>
      </section>
    </>
  );
}
