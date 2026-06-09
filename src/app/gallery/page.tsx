import Image from "next/image";
import PageHeader from "@/components/proavia/page-header";

const galleryImages = [
  { src: "/images/experiences/experience-tour-photo-1.webp", alt: "Desert adventure" },
  { src: "/images/experiences/experience-tour-photo-2.webp", alt: "Coastal scenery" },
  { src: "/images/experiences/experience-tour-photo-3.webp", alt: "4x4 dune driving" },
  { src: "/images/experiences/experience-tour-photo-4.webp", alt: "Wildlife encounter" },
  { src: "/images/experiences/experience-tour-photo-5.webp", alt: "Sunset over Namibia" },
  { src: "/images/experiences/experience-tour-photo-6.webp", alt: "Sandwich Harbour" },
  { src: "/images/experiences/experience-tour-photo-7.webp", alt: "Desert landscapes" },
  { src: "/images/experiences/experience-tour-photo-8.webp", alt: "Marine life" },
  { src: "/images/experiences/experience-tour-photo-9.webp", alt: "Walvis Bay" },
  { src: "/images/experiences/experience-tour-photo-10.webp", alt: "Dune adventure" },
  { src: "/images/experiences/experience-tour-photo-11.webp", alt: "Coastal tour" },
  { src: "/images/experiences/experience-tour-photo-12.webp", alt: "Catamaran cruise" },
  { src: "/images/experiences/experience-tour-photo-13.webp", alt: "Desert sunset" },
  { src: "/images/experiences/experience-tour-photo-14.webp", alt: "Skeleton Coast" },
  { src: "/images/experiences/experience-tour-photo-15.webp", alt: "Spitzkoppe" },
  { src: "/images/experiences/experience-tour-photo-16.webp", alt: "Safari wildlife" },
  { src: "/images/experiences/experience-tour-photo-17.webp", alt: "Swakopmund" },
  { src: "/images/experiences/experience-tour-photo-18.webp", alt: "Moon Valley" },
  { src: "/images/experiences/experience-dune-top-namibia-flag.webp", alt: "Namibia flag on dune" },
  { src: "/images/experiences/experience-sandboarding-beach.webp", alt: "Sandboarding" },
  { src: "/images/experiences/experience-pelican-boat-tour.webp", alt: "Pelican boat tour" },
  { src: "/images/experiences/experience-4x4-dune-tracks.webp", alt: "4x4 dune tracks" },
  { src: "/images/experiences/proavia-tour-safari-elephant.webp", alt: "Elephant safari" },
  { src: "/images/experiences/proavia-tour-safari-giraffe.webp", alt: "Giraffe safari" },
  { src: "/images/experiences/proavia-tour-desert-suv.webp", alt: "Desert SUV" },
  { src: "/images/experiences/proavia-tour-pink-lake-experience.webp", alt: "Pink lake" },
  { src: "/images/experiences/proavia-tour-marine-catamaran.webp", alt: "Marine catamaran" },
  { src: "/images/experiences/proavia-tour-wildlife-elephant-zebras.webp", alt: "Wildlife elephants and zebras" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="GALLERY"
        title="VisualStories"
        italicWord="Stories"
        description="A curated collection of moments from our expeditions, transfers, and the landscapes that define Namibia."
      />

      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="double-bezel-outer proavia-card">
                  <div className="double-bezel-inner overflow-hidden">
                    <div className="relative group">
                      <Image
                        alt={img.alt}
                        width={800}
                        height={i % 3 === 0 ? 1000 : i % 3 === 1 ? 600 : 800}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        src={img.src}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
