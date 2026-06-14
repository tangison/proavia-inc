import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface RelatedService {
  href: string;
  title: string;
  description: string;
}

export default function RelatedServices({ exclude }: { exclude: string }) {
  const allServices: RelatedService[] = [
    { href: "/services/transfers", title: "Airport Transfers", description: "Private, door-to-door transfers from Hosea Kutako and Walvis Bay airports" },
    { href: "/services/tours", title: "Tours & Expeditions", description: "Sandwich Harbour, catamaran cruises, Spitzkoppe, and more" },
    { href: "/services/car-hire", title: "Car Hire", description: "Unlimited kilometres, 4x4 available, Walvis Bay or Windhoek pickup" },
    { href: "/accommodation", title: "Accommodation", description: "Self-catering properties in Walvis Bay and Swakopmund" },
    { href: "/services/flight-ticketing", title: "Flight Ticketing", description: "Domestic and regional flight bookings handled end-to-end" },
    { href: "/services/visa-handling", title: "Visa Handling", description: "Application support, documentation, and submission on your behalf" },
    { href: "/services/airport-assistance", title: "Airport Assistance", description: "Check-in support, luggage handling, and VIP meet & greet" },
    { href: "/services/shuttles", title: "Shuttle Services", description: "Scheduled and on-demand runs between key Namibian cities" },
  ];

  const services = allServices.filter((s) => s.href !== exclude);

  return (
    <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">MORE SERVICES</span>
          <h2 className="editorial-headline text-3xl md:text-4xl text-ink">
            You might also{" "}
            <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
              need
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 4).map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block"
            >
              <div className="double-bezel-outer h-full proavia-card">
                <div className="double-bezel-inner p-6 flex flex-col h-full">
                  <h3 className="text-base font-serif text-ink mb-1.5 group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                  <p className="text-ink/40 text-xs leading-relaxed mb-4 flex-1">{service.description}</p>
                  <span className="text-gold text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                    Explore
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
