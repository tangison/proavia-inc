"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Facebook } from "lucide-react";

const serviceLinks = [
  { href: "/services/transfers", label: "Transfers" },
  { href: "/services/tours", label: "Tours" },
  { href: "/services/car-hire", label: "Car Hire" },
];

const tourLinks = [
  { href: "/services/tours/sandwich-harbour", label: "Sandwich Harbour" },
  { href: "/services/tours/catamaran-dolphin-cruise", label: "Catamaran Cruise" },
  { href: "/services/tours/spitzkoppe-adventure", label: "Spitzkoppe" },
  { href: "/services/tours/skeleton-coast", label: "Skeleton Coast" },
  { href: "/services/tours/moon-valley-welwitschia", label: "Moon Valley" },
  { href: "/services/tours/swakopmund-town-tour", label: "Swakopmund Tour" },
  { href: "/services/tours/classic-namibia-safari", label: "Classic Namibia Safari" },
  { href: "/services/tours/sandwich-harbour-catamaran-combo", label: "Catamaran + Sandwich Harbour" },
];

const navLinks = [
  { href: "/accommodation", label: "Accommodation" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const toursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node) &&
        toursRef.current &&
        !toursRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
        setToursOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-[1200px] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
      }`}
    >
      <div
        className={`rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
        }`}
      >
        <Link className="flex items-center shrink-0" href="/">
          <Image
            alt="ProAvia Travel & Tours"
            width={160}
            height={65}
            className="h-9 lg:h-10 w-auto"
            src="/images/proavia-logo-light.webp"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 text-[12.5px] font-medium tracking-wide">
          <div className="relative" ref={servicesRef}>
            <button
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setToursOpen(false);
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold text-ink/55 hover:text-ink hover:bg-black/[0.04]"
            >
              Services
              <ArrowDown
                className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/5 shadow-xl p-2 z-50">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-sm rounded-xl text-ink/60 hover:text-ink hover:bg-black/[0.04] transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative" ref={toursRef}>
            <button
              aria-expanded={toursOpen}
              aria-haspopup="menu"
              onClick={() => {
                setToursOpen(!toursOpen);
                setServicesOpen(false);
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold text-ink/55 hover:text-ink hover:bg-black/[0.04]"
            >
              Tours
              <ArrowDown
                className={`w-3 h-3 transition-transform duration-300 ${toursOpen ? "rotate-180" : ""}`}
              />
            </button>
            {toursOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/5 shadow-xl p-2 z-50">
                {tourLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setToursOpen(false)}
                    className="block px-4 py-2.5 text-sm rounded-xl text-ink/60 hover:text-ink hover:bg-black/[0.04] transition-all duration-200 line-clamp-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="px-3.5 py-2 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold text-ink/55 hover:text-ink hover:bg-black/[0.04]"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://www.facebook.com/ProaviaHoldingsNamibia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 ml-1 rounded-xl flex items-center justify-center text-ink/35 hover:text-[#1877F2] hover:bg-[#1877F2]/6 transition-all duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </nav>

        <Link
          className="hidden lg:flex items-center gap-2 bg-ink text-white pl-5 pr-2 py-2.5 rounded-xl text-[12px] font-semibold tracking-wide ml-3 hover:bg-ink/80 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          href="/booking"
        >
          Book Now
          <span className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-0.5 transition-all duration-200">
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </Link>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-ink hover:text-gold hover:bg-black/[0.04] transition-all duration-200 rounded-xl"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.34a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
              <path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/5 shadow-xl p-6 space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-35 px-3">Services</span>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-ink/60 hover:text-ink rounded-lg hover:bg-black/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-35 px-3">Tours</span>
            {tourLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-ink/60 hover:text-ink rounded-lg hover:bg-black/[0.04] line-clamp-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-black/5 pt-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-ink/60 hover:text-ink rounded-lg hover:bg-black/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/booking"
            onClick={() => setMobileOpen(false)}
            className="block w-full py-3 bg-gold text-ink text-center font-bold tracking-widest uppercase rounded-xl text-sm btn-magnetic"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
