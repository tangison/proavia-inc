import Image from "next/image";
import { Phone, ArrowUpRight, Wifi, Car, Shield, UtensilsCrossed } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";

const rooms = [
  {
    image: "/images/accommodation/proavia-service-hotel-room-modern.webp",
    title: "Modern Suites",
    description: "Contemporary living spaces with premium furnishings and ocean-influenced design.",
  },
  {
    image: "/images/accommodation/proavia-service-accommodation-living-room-tv.webp",
    title: "Living Areas",
    description: "Spacious lounge areas with smart entertainment systems and curated décor.",
  },
  {
    image: "/images/accommodation/proavia-service-accommodation-kitchen-black-modern.webp",
    title: "Gourmet Kitchens",
    description: "Fully equipped modern kitchens with premium appliances and everything you need.",
  },
  {
    image: "/images/accommodation/proavia-service-accommodation-shower-bathroom.webp",
    title: "Luxury Bathrooms",
    description: "Designer bathrooms with premium fixtures, rainfall showers, and heated towel rails.",
  },
];

const features = [
  { icon: Wifi, title: "High-Speed WiFi", description: "Stay connected with fibre-optic internet throughout your stay." },
  { icon: Car, title: "Secure Parking", description: "Dedicated, covered parking for your vehicle on every property." },
  { icon: Shield, title: "24/7 Security", description: "Round-the-clock security and emergency support for peace of mind." },
  { icon: UtensilsCrossed, title: "Self-Catering", description: "Fully equipped kitchens for independent dining at your own pace." },
];

export default function AccommodationPage() {
  return (
    <>
      <PageHeader
        label="ACCOMMODATION"
        title="LuxuryAccommodation"
        italicWord="Accommodation"
        description="Curated residential properties in Walvis Bay and Swakopmund. Fully equipped, elegantly appointed, and positioned for exploration."
      />

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image
                alt="Luxury accommodation by ProAvia"
                fill
                className="object-cover"
                sizes="100vw"
                src="/images/accommodation/proavia-service-hotel-accommodation.webp"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto space-y-5 text-ink/55 leading-relaxed text-lg">
          <p>
            Our accommodation collection represents the finest residential properties in Walvis Bay and Swakopmund. Each property has been selected for its location, appointment, and capacity to serve as the perfect base for Namibian exploration.
          </p>
          <p>
            From modern apartments overlooking the lagoon to spacious family homes within walking distance of the beach, every property is fully equipped with premium appliances, high-speed WiFi, and the thoughtful touches that transform a stay into an experience.
          </p>
        </div>
      </section>

      {/* Room Gallery */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24 bg-white/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">PROPERTIES</span>
            <h2 className="editorial-headline text-4xl md:text-5xl text-ink">
              Our{" "}
              <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                collection
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rooms.map((room) => (
              <div key={room.title} className="double-bezel-outer proavia-card">
                <div className="double-bezel-inner overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image alt={room.title} fill className="object-cover" sizes="100vw" src={room.image} />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-serif text-ink mb-2">{room.title}</h3>
                    <p className="text-ink/50 text-sm leading-relaxed">{room.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
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
                    stay
                  </span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Tell us your travel dates and preferred location. We&apos;ll match you with the perfect property.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/264818109185?text=Hello%20ProAvia%2C%20I%27d%20like%20to%20book%20accommodation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 bg-gold rounded-full text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-sm btn-magnetic"
                  >
                    <Phone className="w-4 h-4" />
                    Quick WhatsApp
                  </a>
                </div>
              </div>
              <div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Name *</label>
                      <input
                        type="text"
                        className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Check-in Date</label>
                      <input
                        type="date"
                        className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Location</label>
                      <select className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 [color-scheme:dark]">
                        <option value="">Select location</option>
                        <option value="walvis-bay">Walvis Bay</option>
                        <option value="swakopmund">Swakopmund</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Duration</label>
                      <input
                        type="text"
                        className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus-visible:border-gold/50 focus-visible:ring-gold/20 focus-visible:ring-[3px] outline-none px-3"
                        placeholder="e.g. 5 nights"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full py-3.5 bg-gold rounded-xl text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm btn-magnetic cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    Book via WhatsApp
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
