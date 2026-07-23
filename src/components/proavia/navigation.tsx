"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Search, Facebook, Phone, X } from "lucide-react";
import { companyContact } from "@/lib/constants/contact";

// ─── DATA ─────────────────────────────────────────────

const serviceLinks = [
  { href: "/services/transfers", label: "Airport Transfers", image: "/images/vehicles/proavia-fleet-vw-tiguan-windhoek.webp", tagline: "Private, door-to-door transfers" },
  { href: "/services/tours", label: "Tours & Expeditions", image: "/images/experiences/client-sandwich-harbour-dunes-aerial.webp", tagline: "Expert-guided adventures" },
  { href: "/services/car-hire", label: "Car Hire", image: "/images/vehicles/proavia-fleet-vw-polo-coastal.webp", tagline: "Unlimited km, 4x4 available" },
  { href: "/services/flight-ticketing", label: "Flight Ticketing", image: "/images/airports/walvis-bay-airport-travelers-queue.webp", tagline: "Domestic & regional bookings" },
  { href: "/services/visa-handling", label: "Visa and Immigration", image: "/images/airports/proavia-travel-docs-passport-boarding-pass.webp", tagline: "Application & documentation" },
  { href: "/services/airport-assistance", label: "Airport Assistance", image: "/images/airports/walvis-bay-airport-exterior-departures.webp", tagline: "VIP meet & greet" },
  { href: "/services/shuttles", label: "Shuttle Services", image: "/images/vehicles/proavia-fleet-toyota-minivan-airport.webp", tagline: "Scheduled & on-demand" },
];

const tourLinks = [
  { href: "/services/tours/sandwich-harbour", label: "Sandwich Harbour", image: "/images/experiences/client-sandwich-harbour-woman-dunes-ocean.webp", tagline: "Where desert meets ocean", price: "$179" },
  { href: "/services/tours/catamaran-dolphin-cruise", label: "Atlantic Catamaran", image: "/images/experiences/client-catamaran-women-group-harbour.webp", tagline: "Marine Big 5 experience", price: "$69" },
  { href: "/services/tours/spitzkoppe-adventure", label: "Spitzkoppe", image: "/images/experiences/client-spitzkoppe-rock-arch-man.webp", tagline: "Ancient granite & rock art", price: "$139" },
  { href: "/services/tours/skeleton-coast", label: "Skeleton Coast", image: "/images/experiences/client-skeleton-coast-shipwreck.webp", tagline: "Shipwrecks & seal colonies", price: "$79" },
  { href: "/services/tours/moon-valley-welwitschia", label: "Moon Valley", image: "/images/experiences/client-moon-valley-sunset-group.webp", tagline: "500M years of desert history", price: "$169" },
  { href: "/services/tours/swakopmund-town-tour", label: "Swakopmund Tour", image: "/images/experiences/client-swakopmund-jetty-sunset.webp", tagline: "German colonial heritage", price: "$59" },
  { href: "/services/tours/classic-namibia-safari", label: "Classic Namibia", image: "/images/experiences/client-etosha-elephant-zebra-waterhole.webp", tagline: "The full 7-10 day journey", price: "$2,490" },
  { href: "/services/tours/sandwich-harbour-catamaran-combo", label: "Catamaran + SH Combo", image: "/images/experiences/client-sandwich-harbour-woman-arms-up.webp", tagline: "Two experiences, one day", price: "$229" },
];

const navLinks = [
  { href: "/accommodation", label: "Accommodation", image: "/images/experiences/client-lodge-sundowner-deck.webp", tagline: "Curated residential properties" },
  { href: "/about", label: "About", image: "/images/destinations/destination-walvis-bay-salt-shore.webp", tagline: "A proud Namibian company" },
  { href: "/gallery", label: "Gallery", image: "/images/experiences/client-dunes-women-group-colourful.webp", tagline: "Real photos from real trips" },
  { href: "/insights", label: "Insights", image: "/images/experiences/client-desert-dinner-sunset-women.webp", tagline: "Stories from the road" },
  { href: "/contact", label: "Contact", image: "/images/experiences/client-swakopmund-jetty-sunset.webp", tagline: "Get in touch" },
];

const searchableItems = [
  ...tourLinks.map((t) => ({ type: "Tour" as const, title: t.label, tagline: t.tagline, href: t.href, image: t.image })),
  ...serviceLinks.map((s) => ({ type: "Service" as const, title: s.label, tagline: s.tagline, href: s.href, image: s.image })),
  ...navLinks.map((n) => ({ type: "Page" as const, title: n.label, tagline: n.tagline, href: n.href, image: n.image })),
  { type: "Page" as const, title: "Booking", tagline: "Book your experience", href: "/booking", image: "/images/experiences/client-sandwich-harbour-dunes-aerial.webp" },
  { type: "Page" as const, title: "Privacy Policy", tagline: "How we handle your data", href: "/privacy", image: "/images/destinations/destination-walvis-bay-salt-shore.webp" },
];

const heroImageMap: Record<string, string> = {
  services: "/images/experiences/client-sossusvlei-guide-tourists-dune.webp",
  tours: "/images/experiences/client-sandwich-harbour-dunes-aerial.webp",
  accommodation: "/images/experiences/client-lodge-sundowner-deck.webp",
  about: "/images/destinations/destination-walvis-bay-salt-shore.webp",
  gallery: "/images/experiences/client-dunes-women-group-colourful.webp",
  insights: "/images/experiences/client-desert-dinner-sunset-women.webp",
  contact: "/images/experiences/client-swakopmund-jetty-sunset.webp",
  default: "/images/experiences/client-sandwich-harbour-dunes-aerial.webp",
};

// ─── COMPONENT ─────────────────────────────────────────

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(heroImageMap.default);
  const [searchQuery, setSearchQuery] = useState("");
  const [animReady, setAnimReady] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      // Stagger animation start
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimReady(true));
      });
    } else {
      document.body.style.overflow = "";
      setAnimReady(false);
      setServicesOpen(false);
      setToursOpen(false);
      setSearchQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape key closes menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (searchQuery) {
          setSearchQuery("");
        } else {
          setMenuOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchQuery]);

  // Close menu on route change (clicking a link)
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Search filtering
  const searchResults = searchQuery.trim().length > 0
    ? searchableItems.filter((item) => {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.tagline.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q)
        );
      })
    : [];

  // Current hero image (fallback chain: hovered > default)
  const currentHeroImage = hoveredImage || heroImageMap.default;

  return (
    <>
      {/* ─── FLOATING HEADER ─── */}
      <header
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-[1200px] transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
        } ${menuOpen ? "!z-[200]" : ""}`}
      >
        <div
          className={`rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-500 ${
            menuOpen
              ? "bg-ink text-white shadow-none"
              : scrolled
                ? "bg-white/90 backdrop-blur-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
                : "bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
          }`}
        >
          <Link className="flex items-center shrink-0" href="/" onClick={closeMenu}>
            <Image
              alt="ProAvia Travel & Tours"
              width={180}
              height={90}
              className={`h-9 lg:h-10 w-auto transition-all duration-300 ${menuOpen ? "brightness-0 invert" : ""}`}
              src="/images/proavia-logo-light.webp"
              priority
            />
          </Link>

          {/* Desktop nav (hidden on < lg) */}
          <nav className="hidden lg:flex items-center gap-0.5 text-[12.5px] font-medium tracking-wide">
            {[
              { label: "Services", key: "services" },
              { label: "Tours", key: "tours" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setMenuOpen(true)}
                onMouseEnter={() => setHoveredImage(heroImageMap[item.key])}
                onMouseLeave={() => setHoveredImage(heroImageMap.default)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  menuOpen ? "text-white/50" : "text-ink/55 hover:text-ink hover:bg-black/[0.04]"
                }`}
              >
                {item.label}
                <ArrowDown className={`w-3 h-3 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`} />
              </button>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={`px-3.5 py-2 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  menuOpen ? "text-white/50" : "text-ink/55 hover:text-ink hover:bg-black/[0.04]"
                }`}
                href={link.href}
                onMouseEnter={() => setHoveredImage(heroImageMap[link.label.toLowerCase()])}
                onMouseLeave={() => setHoveredImage(heroImageMap.default)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Book Now (desktop) */}
            <Link
              className="hidden lg:flex items-center gap-2 bg-ink text-white pl-5 pr-2 py-2.5 rounded-xl text-[12px] font-semibold tracking-wide hover:bg-ink/80 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              href="/booking"
              onClick={closeMenu}
            >
              Book Now
              <span className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-0.5 transition-all duration-200">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Menu Toggle, two-line icon */}
            <button
              className={`w-10 h-10 flex items-center justify-center transition-all duration-200 rounded-xl ${
                menuOpen
                  ? "text-white hover:text-gold hover:bg-white/10"
                  : "text-ink hover:text-gold hover:bg-black/[0.04]"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 h-[2px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                    menuOpen
                      ? "top-[7px] w-5 rotate-45"
                      : "top-0 w-5"
                  } ${menuOpen ? "bg-current" : "bg-current"}`}
                />
                <span
                  className={`absolute right-0 h-[2px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                    menuOpen
                      ? "top-[7px] w-5 -rotate-45 !right-auto !left-0"
                      : "top-[14px] w-3"
                  } ${menuOpen ? "bg-current" : "bg-current"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ─── FULL-PAGE OVERLAY ─── */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-[150] transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(10, 10, 10, 0.97)" }}
      >
        <div className="h-full flex flex-col">
          {/* Top spacer for header */}
          <div className="h-24 shrink-0" />

          {/* Main content area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* LEFT COLUMN */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Section label */}
                  <div
                    className={`transition-all duration-500 delay-100 ${
                      animReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold/80">
                      NAMIBIA, DONE RIGHT
                    </span>
                  </div>

                  {/* Main navigation links, editorial size */}
                  <nav className="space-y-1">
                    {/* Services dropdown */}
                    <div>
                      <button
                        onClick={() => { setServicesOpen(!servicesOpen); setToursOpen(false); }}
                        onMouseEnter={() => setHoveredImage(heroImageMap.services)}
                        className={`w-full flex items-center justify-between py-3 text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight transition-all duration-300 group text-left ${
                          animReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                        style={{ transitionDelay: animReady ? "150ms" : "0ms", color: servicesOpen ? "#c9a84c" : "rgba(255,255,255,0.85)" }}
                      >
                        <span className="group-hover:text-gold transition-colors duration-300">Services</span>
                        <ArrowDown
                          className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-gold" : "text-white/30"}`}
                        />
                      </button>
                      {/* Services dropdown, image grid */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-6 pt-2">
                          {serviceLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={closeMenu}
                              onMouseEnter={() => setHoveredImage(link.image)}
                              onMouseLeave={() => setHoveredImage(heroImageMap.services)}
                              className="group/card block"
                            >
                              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 mb-2.5">
                                <Image
                                  alt={link.label}
                                  width={300}
                                  height={225}
                                  className="object-cover w-full h-full group-hover/card:scale-105 group-hover/card:brightness-110 transition-all duration-500"
                                  sizes="(max-width: 640px) 50vw, 25vw"
                                  src={link.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none group-hover/card:from-black/20 transition-all duration-500" />
                              </div>
                              <span className="text-sm text-white/70 group-hover/card:text-gold transition-colors duration-300 leading-tight block">
                                {link.label}
                              </span>
                              <span className="text-[10px] text-white/30 leading-tight block mt-0.5">
                                {link.tagline}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tours dropdown */}
                    <div>
                      <button
                        onClick={() => { setToursOpen(!toursOpen); setServicesOpen(false); }}
                        onMouseEnter={() => setHoveredImage(heroImageMap.tours)}
                        className={`w-full flex items-center justify-between py-3 text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight transition-all duration-300 group text-left ${
                          animReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                        style={{ transitionDelay: animReady ? "230ms" : "0ms", color: toursOpen ? "#c9a84c" : "rgba(255,255,255,0.85)" }}
                      >
                        <span className="group-hover:text-gold transition-colors duration-300">Tours</span>
                        <ArrowDown
                          className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${toursOpen ? "rotate-180 text-gold" : "text-white/30"}`}
                        />
                      </button>
                      {/* Tours dropdown, image grid with prices */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          toursOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-6 pt-2">
                          {tourLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={closeMenu}
                              onMouseEnter={() => setHoveredImage(link.image)}
                              onMouseLeave={() => setHoveredImage(heroImageMap.tours)}
                              className="group/card block"
                            >
                              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 mb-2.5">
                                <Image
                                  alt={link.label}
                                  width={300}
                                  height={225}
                                  className="object-cover w-full h-full group-hover/card:scale-105 group-hover/card:brightness-110 transition-all duration-500"
                                  sizes="(max-width: 640px) 50vw, 25vw"
                                  src={link.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none group-hover/card:from-black/30 transition-all duration-500" />
                                <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                                  <span className="text-[10px] font-semibold tracking-wide uppercase text-white/80 bg-ink/60 backdrop-blur-sm rounded-md px-2 py-0.5">
                                    {link.price}
                                  </span>
                                </div>
                              </div>
                              <span className="text-sm text-white/70 group-hover/card:text-gold transition-colors duration-300 leading-tight block">
                                {link.label}
                              </span>
                              <span className="text-[10px] text-white/30 leading-tight block mt-0.5">
                                {link.tagline}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Standard nav links */}
                    {navLinks.map((link, i) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        onMouseEnter={() => setHoveredImage(heroImageMap[link.label.toLowerCase()] || heroImageMap.default)}
                        onMouseLeave={() => setHoveredImage(heroImageMap.default)}
                        className={`block py-3 text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-white/85 hover:text-gold transition-all duration-300 ${
                          animReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                        style={{ transitionDelay: animReady ? `${310 + i * 80}ms` : "0ms" }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Search */}
                  <div
                    className={`pt-6 transition-all duration-500 ${
                      animReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: animReady ? "600ms" : "0ms" }}
                  >
                    <div className="relative">
                      <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
                      <input
                        ref={searchRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search destinations, tours, experiences..."
                        className="w-full bg-transparent border-b border-white/10 focus:border-gold/50 pl-8 pr-4 py-3 text-lg font-serif text-white placeholder:text-white/20 outline-none transition-colors duration-300"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-white/30 hover:text-white/60 transition-colors"
                          aria-label="Clear search"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Search results */}
                    {searchResults.length > 0 && (
                      <div className="mt-4 space-y-1 max-h-[300px] overflow-y-auto custom-scrollbar">
                        {searchResults.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-200 group/result"
                          >
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
                              <Image
                                alt={item.title}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                                sizes="48px"
                                src={item.image}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm text-white/80 group-hover/result:text-gold transition-colors duration-200 block truncate">
                                {item.title}
                              </span>
                              <span className="text-[10px] text-white/30 block truncate">{item.tagline}</span>
                            </div>
                            <span className="text-[9px] font-bold tracking-widest uppercase text-gold/40 shrink-0">
                              {item.type}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover/result:text-gold transition-colors duration-200 shrink-0" />
                          </Link>
                        ))}
                      </div>
                    )}

                    {searchQuery.trim().length > 0 && searchResults.length === 0 && (
                      <div className="mt-4 py-6 text-center">
                        <span className="text-white/30 text-sm">No results found for &ldquo;{searchQuery}&rdquo;</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT COLUMN, contextual hero image (desktop only) */}
                <div className="hidden lg:block lg:col-span-5">
                  <div
                    className={`sticky top-32 transition-all duration-700 ${
                      animReady ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: animReady ? "400ms" : "0ms" }}
                  >
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/5">
                      <Image
                        alt="ProAvia destination"
                        width={600}
                        height={800}
                        className="object-cover w-full h-full transition-all duration-700"
                        sizes="40vw"
                        src={currentHeroImage}
                        key={currentHeroImage}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      {/* Ken Burns slow zoom */}
                      <style jsx>{`
                        @keyframes ken-burns {
                          0% { transform: scale(1); }
                          100% { transform: scale(1.05); }
                        }
                      `}</style>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div
            className={`shrink-0 border-t border-white/5 transition-all duration-500 ${
              animReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: animReady ? "700ms" : "0ms" }}
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link
                  href="/booking"
                  onClick={closeMenu}
                  className="px-6 py-3 bg-gold text-ink font-bold tracking-widest uppercase rounded-xl text-sm btn-magnetic flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Book Now
                </Link>
                <a
                  href={companyContact.mobile.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 font-bold tracking-widest uppercase rounded-xl text-sm transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/ProaviaHoldingsNamibia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <div className="flex flex-col text-right leading-tight">
                  <a
                    href={companyContact.officePhone.href}
                    className="text-[10px] text-white/40 hover:text-white tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded"
                  >
                    {companyContact.officePhone.display}
                  </a>
                  <a
                    href={companyContact.mobile.telephoneHref}
                    className="text-[10px] text-white/40 hover:text-white tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded"
                  >
                    {companyContact.mobile.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
