"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Car, Compass, Phone, Star, Plane, FileCheck, ShieldCheck, Bus } from "lucide-react";

const heroImages = [
  { src: "/images/destinations/destination-sandwich-harbour-ocean-view.webp", alt: "Sandwich Harbour", label: "Sandwich Harbour", region: "Erongo Region" },
  { src: "/images/experiences/client-sandwich-harbour-woman-dunes-ocean.webp", alt: "Sandwich Harbour Desert Meets Ocean", label: "", region: "" },
  { src: "/images/experiences/client-pink-lake-man-hat.webp", alt: "Pink Salt Lakes Experience", label: "", region: "" },
  { src: "/images/experiences/client-sossusvlei-dune-ridge-group.webp", alt: "Sossusvlei Dune Tour", label: "", region: "" },
];

const serviceCards = [
  {
    href: "/services/transfers",
    image: "/images/vehicles/proavia-fleet-vw-tiguan-windhoek.webp",
    imageAlt: "White ProAvia-branded Volkswagen Tiguan parked at a Windhoek tyre service centre",
    tag: "transfers",
    tagIcon: Car,
    title: "Airport & City",
    italic: "Transfers",
    description: "Your driver meets you inside arrivals at Hosea Kutako or Walvis Bay airport. Private vehicle, direct to your door, no shared rides, no waiting.",
    badges: ["Meet & Greet", "24/7 Availability", "Door-to-Door", "Insured Fleet"],
  },
  {
    href: "/services/tours",
    image: "/images/destinations/destination-sandwich-harbour-suv-drive.webp",
    imageAlt: "Sandwich Harbour",
    tag: "tours",
    tagIcon: Compass,
    title: "Sandwich Harbour",
    italic: "Tours",
    description: "Drive through the dunes where the Namib meets the Atlantic. A 4x4 tour to one of the most isolated lagoons on Earth, a UNESCO World Heritage Site candidate.",
    badges: ["4x4 Adventure", "Dune Driving", "Photo Stops", "Expert Guides"],
  },
  {
    href: "/services/car-hire",
    image: "/images/vehicles/proavia-fleet-vw-polo-coastal.webp",
    imageAlt: "White ProAvia-branded Volkswagen Polo parked at a Namibian coastal pier at sunset",
    tag: "car hire",
    tagIcon: Car,
    title: "Car",
    italic: "Hire",
    description: "Unrestricted kilometres. 4x4 or sedan. Pick up in Walvis Bay or Windhoek and explore Namibia on your own terms.",
    badges: ["Unlimited KM", "4x4 Available", "Coastal Pickup", "Windhoek Depot"],
  },
  {
    href: "/accommodation",
    image: "/images/experiences/client-luxury-tent-bathtub-desert.webp",
    imageAlt: "Luxury Namibian tented suite with a freestanding bathtub overlooking the desert",
    tag: "accommodation",
    tagIcon: Star,
    title: "Luxury",
    italic: "Accommodation",
    description: "Curated residential properties in Walvis Bay and Swakopmund. Fully equipped, elegantly appointed, and positioned for exploration.",
    badges: ["Self-Catering", "Prime Locations", "Premium Amenities", "Daily Servicing"],
  },
  {
    href: "/services/flight-ticketing",
    image: "/images/airports/proavia-airport-airlink-plane.webp",
    imageAlt: "Flight Ticketing",
    tag: "flight ticketing",
    tagIcon: Plane,
    title: "Flight Ticketing",
    italic: "& Reservations",
    description: "Domestic and regional flight bookings handled end-to-end. We secure your seats so your journey starts before you reach the airport.",
    badges: ["Domestic Flights", "Regional Routes", "Fast Confirmation", "WhatsApp Booking"],
  },
  {
    href: "/services/visa-handling",
    image: "/images/airports/proavia-airport-walvis-bay-exterior.webp",
    imageAlt: "Visa Handling",
    tag: "visa handling",
    tagIcon: FileCheck,
    title: "Visa Handling",
    italic: "Services",
    description: "Navigating the visa process is time-consuming. We manage your application from documentation to submission, stress-free.",
    badges: ["Application Support", "Documentation", "All Nationalities", "Expert Guidance"],
  },
  {
    href: "/services/airport-assistance",
    image: "/images/airports/hosea-kutako-international-airport-windhoek.webp",
    imageAlt: "Hosea Kutako International Airport exterior with Welcome to Windhoek signage in Namibia",
    tag: "airport assistance",
    tagIcon: ShieldCheck,
    title: "Airport",
    italic: "Assistance",
    description: "Beyond the transfer. Our team assists with check-in, luggage handling, and airport navigation, ideal for first-time arrivals or government delegates.",
    badges: ["Check-in Support", "Luggage Handling", "VIP Meet & Greet", "24/7 Available"],
  },
  {
    href: "/services/shuttles",
    image: "/images/vehicles/fleet-volkswagen-in-sosslvei.webp",
    imageAlt: "Shuttle Services",
    tag: "shuttle services",
    tagIcon: Bus,
    title: "Shuttle",
    italic: "Services",
    description: "Scheduled and on-demand shuttle runs between Walvis Bay, Swakopmund, and Windhoek. Reliable, shared, and affordable.",
    badges: ["Walvis Bay", "Swakopmund", "Windhoek", "Scheduled Runs"],
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const reveal = useCallback((id: string) => {
    setRevealed((prev) => new Set(prev).add(id));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-reveal-section]").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [reveal]);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[100dvh] pt-36 md:pt-40 px-6 md:px-12 lg:px-24 flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="mb-6" data-reveal-section id="hero-label">
              <span
                className={`text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-6 transition-all duration-700 ${revealed.has("hero-label") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                NAMIBIA, DONE RIGHT
              </span>
            </div>
            <h1
              className={`editorial-headline text-6xl md:text-8xl lg:text-9xl text-ink mb-6 transition-all duration-700 delay-100 ${revealed.has("hero-label") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              Unrivaled
              <br />
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                Expeditions
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl text-ink/50 max-w-[500px] leading-relaxed transition-all duration-700 delay-200 ${revealed.has("hero-label") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              From the dunes of Sandwich Harbour to the streets of Windhoek. We orchestrate the logistics, so you can focus on the journey.
            </p>
            <div
              className={`mt-10 flex flex-wrap gap-4 items-center transition-all duration-700 delay-300 ${revealed.has("hero-label") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <Link
                className="group relative px-7 py-4 bg-gold text-ink rounded-full btn-magnetic font-bold tracking-tight text-sm flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                href="/booking"
              >
                BOOK NOW
                <span className="w-7 h-7 bg-ink/10 rounded-full flex items-center justify-center group-hover:bg-ink/20 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-300">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
              <Link
                className="flex items-center gap-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full px-2"
                href="/services/tours"
              >
                <span className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all duration-500">
                  <Compass className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold tracking-widest uppercase opacity-60">Our Tours</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="double-bezel-outer aspect-[4/5] w-full">
              <div className="double-bezel-inner overflow-hidden relative group h-full">
                {heroImages.map((img, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === i ? "opacity-100" : "opacity-0"}`}
                  >
                    <Image
                      alt={img.alt}
                      width={1920}
                      height={1080}
                      className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                      sizes="100vw"
                      src={img.src}
                      priority={i === 0}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <div className="text-[10px] tracking-[0.3em] uppercase mb-1.5 opacity-70 font-bold">Featured Destination</div>
                  <div className="text-2xl md:text-3xl font-serif leading-none">
                    {heroImages[currentSlide].label || "Walvis Bay"}
                  </div>
                  <div className="text-[10px] tracking-widest uppercase mt-1.5 opacity-70">
                    {heroImages[currentSlide].region || "Erongo Region"}
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 flex gap-1.5 z-10">
                  {heroImages.map((_, i) => (
                    <div
                      key={i}
                      className={`h-[2px] rounded-full transition-all duration-500 ${currentSlide === i ? "w-8 bg-gold" : "w-2 bg-white/25"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">WHO WE ARE</span>
          <h2 className="editorial-headline text-4xl md:text-5xl text-ink mb-6">
            A proud Namibian{" "}
            <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
              company
            </span>
          </h2>
          <p className="text-ink/55 text-lg leading-relaxed max-w-[700px]">
            ProAvia Travel & Tours is a premium, female-owned Namibian company based in Walvis Bay, Erongo. Accredited by ATTA, NIPDB, and the Namibia Tourism Board, we specialise in bespoke travel logistics, from airport transfers and tours to flight ticketing, visa handling, and shuttle services. We answer within minutes, not hours, and we run every service ourselves, no subcontractors, no surprises.
          </p>
          <Link
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mt-6 text-gold hover:text-gold/70 transition-colors duration-300"
            href="/about"
          >
            Discover Our Story
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">SERVICES</span>
            <h2 className="editorial-headline text-5xl md:text-7xl text-ink">
              Essential <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>Logistics</span>
            </h2>
            <p className="text-ink/40 text-lg mt-4 max-w-lg">
              Everything you need to explore Namibia, handled by a team that actually lives here. Transfers, tours, car hire, accommodation, flights, visas. We sort it all from our base in Walvis Bay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-[2.5rem]"
                href={card.href}
              >
                <div className="double-bezel-outer h-full proavia-card">
                  <div className="double-bezel-inner overflow-hidden relative">
                    <div className="relative aspect-[4/3]">
                      <Image alt={card.imageAlt} width={400} height={300} className="object-cover w-full h-full" sizes="100vw" src={card.image} />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-gold/90 text-ink text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-lg">
                          <card.tagIcon className="w-3 h-3" />
                          {card.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-serif tracking-tight text-ink">
                        {card.title}{" "}
                        <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                          {card.italic}
                        </span>
                      </h3>
                      <p className="mt-3 text-ink/50 text-sm leading-relaxed max-w-[52ch]">{card.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {card.badges.map((badge) => (
                          <span key={badge} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-sand text-ink/60">
                            {badge}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase mt-5 group/link">
                        Explore {card.title}
                        <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover/link:bg-ink group-hover/link:text-white transition-all duration-300">
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
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
                A single WhatsApp message gets things moving. Transfer, tour, car, or accommodation: tell us what you need and we&apos;ll sort it out from there.
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
    </>
  );
}
