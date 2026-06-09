import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";
import { tours } from "@/data/tours";

export default function ToursPage() {
  return (
    <div className="bg-white">
      <PageHeader
        label="EXPERIENCES"
        title="Namibia, Done RightTours"
        italicWord="Tours"
      />

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image
                alt="Where the Namib Desert meets the Atlantic"
                width={1920}
                height={640}
                className="object-cover w-full h-full"
                sizes="100vw"
                src="/images/destinations/destination-sandwich-harbour-coastal-dunes.webp"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                <h2 className="editorial-headline text-3xl md:text-5xl text-white mb-4">
                  Expertly guided{" "}
                  <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                    expeditions
                  </span>
                </h2>
                <p className="text-white/80 max-w-2xl text-lg font-light leading-relaxed">
                  From traversing 100-metre sand dunes to sailing alongside migrating whales, our premium tours are crafted for the discerning traveler. Discover the raw beauty of Namibia with our specialized 4x4 fleet and expert local guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Grid */}
      <section className="py-20 bg-white/40 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Link key={tour.slug} className="block h-full group" href={`/services/tours/${tour.slug}`}>
                <div className="double-bezel-outer h-full transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="double-bezel-inner h-full flex flex-col bg-white overflow-hidden relative">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        alt={tour.name}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        sizes="100vw"
                        src={tour.images[0]}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-ink shadow-sm">
                          {tour.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-serif text-ink mb-2 line-clamp-2">{tour.name}</h3>
                      <p className="text-sm text-ink/60 mb-6 line-clamp-3">{tour.tagline}</p>
                      <div className="mt-auto pt-6 border-t border-ink/10 flex items-end justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-ink/50 block mb-1">Starting from</span>
                          <span className="text-xl font-bold text-ink">
                            ${tour.price} <span className="text-xs font-normal text-ink/50">(USD)</span>
                          </span>
                        </div>
                        <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-gold group-hover:text-ink transition-colors" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
