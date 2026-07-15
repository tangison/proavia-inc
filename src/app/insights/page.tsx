import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/proavia/page-header";

const articles = [
  {
    title: "The Complete Guide to Sandwich Harbour",
    excerpt: "Everything you need to know about visiting one of Namibia's most iconic destinations, from best times to visit to what to bring.",
    image: "/images/destinations/destination-sandwich-harbour-ocean-view.webp",
    category: "Destination Guide",
    date: "March 2025",
  },
  {
    title: "Namibia's Marine Big 5: What You'll See on the Catamaran",
    excerpt: "From playful dolphins to the mysterious Mola Mola, a guide to the marine wildlife you'll encounter on our Atlantic cruises.",
    image: "/images/experiences/proavia-tour-marine-catamaran.webp",
    category: "Wildlife",
    date: "February 2025",
  },
  {
    title: "Self-Drive vs Guided: Exploring Namibia by Car",
    excerpt: "We compare self-drive car hire with guided tours to help you choose the right Namibian adventure for your travel style.",
    image: "/images/vehicles/vw-tiguan-transfer-fleet.webp",
    category: "Travel Tips",
    date: "January 2025",
  },
  {
    title: "Spitzkoppe: 700 Million Years in the Making",
    excerpt: "The geological and cultural story behind the Matterhorn of Namibia, from ancient rock art to modern adventure tourism.",
    image: "/images/tours/spitzkoppe-adventure-1.webp",
    category: "Geology",
    date: "December 2024",
  },
  {
    title: "Airport Transfers: What to Expect at Hosea Kutako",
    excerpt: "A practical guide to arriving in Namibia, from customs and baggage to your ProAvia transfer waiting in arrivals.",
    image: "/images/airports/proavia-airport-walvis-bay-exterior.webp",
    category: "Travel Tips",
    date: "November 2024",
  },
  {
    title: "Classic Namibia Safari: Day by Day Itinerary",
    excerpt: "A detailed breakdown of our signature 7-day safari, from Walvis Bay to Etosha, and everything in between.",
    image: "/images/experiences/proavia-tour-safari-elephant.webp",
    category: "Safari Guide",
    date: "October 2024",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        label="INSIGHTS"
        title="TravelInsights"
        italicWord="Insights"
        description="Expert guides, practical tips, and stories from the road, curated by the ProAvia team in Walvis Bay."
      />

      <section className="pb-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto space-y-5 text-ink/55 leading-relaxed">
          <p>
            We spend every day on these roads and at these destinations, so we figured we should write some of it down. These articles come straight from our team: practical advice, destination breakdowns, and honest takes on what&apos;s worth your time and what isn&apos;t. No filler, no recycled content from travel blogs.
          </p>
          <p>
            Whether you&apos;re planning your first trip to Namibia or you&apos;ve been here before and want to dig deeper, these guides are written to help you make real decisions. We update them regularly as routes, prices, and conditions change.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.title} className="group">
                <div className="double-bezel-outer h-full proavia-card transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="double-bezel-inner h-full flex flex-col bg-white overflow-hidden relative">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image alt={article.title} width={400} height={300} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" sizes="100vw" src={article.image} />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-ink shadow-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <span className="text-ink/50 text-[10px] tracking-widest uppercase font-medium mb-3">{article.date}</span>
                      <h2 className="text-2xl font-serif text-ink mb-3 line-clamp-2">{article.title}</h2>
                      <p className="text-sm text-ink/60 mb-6 line-clamp-3">{article.excerpt}</p>
                      <div className="mt-auto">
                        <span className="text-gold text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                          Read More <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
