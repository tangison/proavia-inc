import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, ArrowUpRight, Clock, Users, CheckCircle2 } from "lucide-react";
import { tours, getTourBySlug } from "@/data/tours";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };

  // Keep title under 60 chars — use shortened name if needed
  const suffix = " | ProAvia Travel & Tours";
  const maxNameLen = 60 - suffix.length;
  const titleName = tour.name.length > maxNameLen ? tour.name.slice(0, maxNameLen - 1).trimEnd() : tour.name;

  // Keep description between 120–160 chars
  let description = tour.tagline;
  if (description.length > 160) {
    description = description.slice(0, 157).trimEnd() + "...";
  } else if (description.length < 120) {
    description = tour.description.length >= 120 && tour.description.length <= 160
      ? tour.description
      : description;
  }

  return {
    title: `${titleName}${suffix}`,
    description,
    alternates: {
      canonical: `https://proaviainc.com/services/tours/${slug}`,
    },
    openGraph: {
      title: `${titleName}${suffix}`,
      description,
      url: `https://proaviainc.com/services/tours/${slug}`,
      images: tour.images.length > 0 ? [tour.images[0]] : [],
    },
  };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  return (
    <div className="bg-white">
      {/* Back Link */}
      <section className="pt-36 md:pt-44 pb-4 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <Link
            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase opacity-45 hover:opacity-70 transition-opacity duration-300"
            href="/services/tours"
          >
            <ArrowLeft className="w-3 h-3" />
            All Tours
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-4">{tour.category.toUpperCase()}</span>
            <h1 className="editorial-headline text-5xl md:text-7xl lg:text-8xl text-ink mb-4">{tour.name}</h1>
            <p className="text-lg md:text-xl text-ink/50 max-w-[700px] leading-relaxed">{tour.tagline}</p>
          </div>

          <div className="double-bezel-outer">
            <div className="double-bezel-inner overflow-hidden relative aspect-[21/9] md:aspect-[3/1]">
              <Image
                alt={tour.name}
                width={1920}
                height={640}
                className="object-cover w-full h-full"
                sizes="100vw"
                src={tour.images[0]}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="editorial-headline text-3xl md:text-4xl text-ink">
                About this{" "}
                <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                  expedition
                </span>
              </h2>
              <div className="space-y-4 text-ink/55 leading-relaxed text-lg">
                <p>{tour.longDescription}</p>
              </div>

              {/* Highlights */}
              <div className="pt-8">
                <h3 className="text-xl font-serif text-ink mb-4">Highlights</h3>
                <ul className="space-y-3">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-ink/60">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              {tour.gallery.length > 1 && (
                <div className="pt-8">
                  <h3 className="text-xl font-serif text-ink mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tour.gallery.map((img, i) => (
                      <div key={i} className="double-bezel-outer">
                        <div className="double-bezel-inner overflow-hidden">
                          <div className="relative aspect-[4/3]">
                            <Image alt={img.alt} width={400} height={300} className="object-cover w-full h-full" sizes="(max-width: 768px) 50vw, 33vw" src={img.src} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="double-bezel-outer proavia-card sticky top-32">
                <div className="double-bezel-inner p-6 md:p-8">
                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-ink/50 block mb-1">Starting from</span>
                    <span className="text-3xl font-bold text-ink">
                      ${tour.price} <span className="text-sm font-normal text-ink/50">(USD)</span>
                    </span>
                    <span className="text-sm text-ink/40 block mt-1">{tour.priceLabel}</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-sm text-ink/60">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="text-sm text-ink/60">Small groups available</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-serif text-ink mb-3">What&apos;s Included</h4>
                    <ul className="space-y-2">
                      {tour.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink/50">
                          <CheckCircle2 className="w-4 h-4 text-gold/60 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/264818109185?text=${encodeURIComponent(`Hello ProAvia, I'm interested in the ${tour.name} tour.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-gold rounded-xl text-ink font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-sm btn-magnetic"
                  >
                    <Phone className="w-4 h-4" />
                    Book This Tour
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-ink/30 text-[11px] text-center mt-3">Opens WhatsApp — we respond within minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
