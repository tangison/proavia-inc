import Image from "next/image";
import PageHeader from "@/components/proavia/page-header";

const galleryImages = [
  // Retained original gallery images
  { src: "/images/experiences/experience-tour-photo-1.webp", alt: "Desert adventure" },
  { src: "/images/experiences/experience-tour-photo-2.webp", alt: "Coastal scenery" },
  { src: "/images/experiences/experience-tour-photo-3.webp", alt: "4x4 dune driving" },
  { src: "/images/experiences/experience-tour-photo-6.webp", alt: "Sandwich Harbour" },
  { src: "/images/experiences/experience-tour-photo-11.webp", alt: "Coastal tour" },
  { src: "/images/experiences/experience-tour-photo-12.webp", alt: "Catamaran cruise" },
  // Client images
  { src: "/images/experiences/client-deadvlei-woman-white-dress.webp", alt: "Woman in white dress at Deadvlei" },
  { src: "/images/experiences/client-cape-fur-seals-colony.webp", alt: "Cape fur seals colony" },
  { src: "/images/experiences/client-sossusvlei-dune-ridge-group.webp", alt: "Group on Sossusvlei dune ridge" },
  { src: "/images/experiences/client-etosha-elephant-zebra-waterhole.webp", alt: "Elephant and zebra at Etosha waterhole" },
  { src: "/images/experiences/client-deadvlei-woman-hat-wide.webp", alt: "Woman in hat at Deadvlei" },
  { src: "/images/experiences/client-sandwich-harbour-woman-dunes-ocean.webp", alt: "Woman on dunes overlooking ocean at Sandwich Harbour" },
  { src: "/images/experiences/client-sandwich-harbour-man-overlook.webp", alt: "Man overlooking Sandwich Harbour" },
  { src: "/images/experiences/client-spitzkoppe-rock-arch-man.webp", alt: "Man at Spitzkoppe rock arch" },
  { src: "/images/experiences/client-pink-lake-man-hat.webp", alt: "Man in hat at the Pink Lake" },
  { src: "/images/experiences/client-sandwich-harbour-dunes-aerial.webp", alt: "Aerial view of Sandwich Harbour dunes" },
  { src: "/images/experiences/client-spitzkoppe-sunset-man-sitting.webp", alt: "Man sitting at Spitzkoppe sunset" },
  { src: "/images/experiences/client-sossusvlei-dune-two-men.webp", alt: "Two men on Sossusvlei dune" },
  { src: "/images/experiences/client-skeleton-coast-shipwreck.webp", alt: "Shipwreck on the Skeleton Coast" },
  { src: "/images/experiences/client-sandboarding-woman-standing.webp", alt: "Woman standing with sandboard" },
  { src: "/images/experiences/client-fat-bike-dunes-group.webp", alt: "Fat biking group on the dunes" },
  { src: "/images/experiences/client-desert-dinner-sunset-women.webp", alt: "Women at desert dinner during sunset" },
  { src: "/images/experiences/client-lodge-firepit-sunset.webp", alt: "Lodge firepit at sunset" },
  { src: "/images/experiences/client-lodge-sundowner-deck.webp", alt: "Sundowner deck at the lodge" },
  { src: "/images/experiences/client-hot-air-balloon-namib.webp", alt: "Hot air balloon over the Namib Desert" },
  { src: "/images/experiences/client-moon-valley-sunset-group.webp", alt: "Group at Moon Valley sunset" },
  { src: "/images/experiences/client-sossusvlei-guide-tourists-dune.webp", alt: "Guide with tourists on Sossusvlei dune" },
  { src: "/images/experiences/client-sandwich-harbour-woman-arms-up.webp", alt: "Woman with arms up at Sandwich Harbour" },
  { src: "/images/experiences/client-swakopmund-jetty-sunset.webp", alt: "Swakopmund jetty at sunset" },
  { src: "/images/experiences/client-spitzkoppe-lodge-coffee-deck.webp", alt: "Coffee deck at Spitzkoppe lodge" },
  { src: "/images/experiences/client-safari-lodge-interior.webp", alt: "Safari lodge interior" },
  { src: "/images/experiences/client-luxury-tent-bathtub-desert.webp", alt: "Luxury tent bathtub with desert view" },
  { src: "/images/experiences/client-luxury-tent-bed-view.webp", alt: "Luxury tent bed with desert view" },
  { src: "/images/experiences/client-infinity-pool-meditation-desert.webp", alt: "Infinity pool meditation in the desert" },
  { src: "/images/experiences/client-namib-dune-woman-sitting.webp", alt: "Woman sitting on a Namib dune" },
  { src: "/images/experiences/client-etosha-lodge-exterior-sunset.webp", alt: "Etosha lodge exterior at sunset" },
  { src: "/images/experiences/client-pink-lake-women-group.webp", alt: "Group of women at the Pink Lake" },
  { src: "/images/experiences/client-dunes-women-group-colourful.webp", alt: "Colourful group of women on the dunes" },
  { src: "/images/experiences/client-catamaran-women-group-harbour.webp", alt: "Women group on catamaran at harbour" },
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

      <section className="pb-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto space-y-5 text-ink/55 leading-relaxed">
          <p>
            These are real photos from real trips. Our guides take these on the road: dune sunsets in Sandwich Harbour, dolphins alongside the catamaran, elephant herds in Etosha, and the quiet moments in between. No stock photography, no filters that change the landscape into something it isn&apos;t. What you see here is what you&apos;ll see out there.
          </p>
          <p>
            Scroll through and get a feel for what a ProAvia trip looks like. When you&apos;re ready to see it in person, we&apos;ll be here.
          </p>
        </div>
      </section>

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
