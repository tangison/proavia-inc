import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shuttle Services | ProAvia Travel & Tours",
  description:
    "Scheduled and on-demand shuttles between Walvis Bay, Swakopmund, and Windhoek. Reliable, shared, and affordable transport.",
  alternates: {
    canonical: "https://proaviainc.com/services/shuttles",
  },
  openGraph: {
    title: "Shuttle Services | ProAvia Travel & Tours",
    description:
      "Scheduled and on-demand shuttles between Walvis Bay, Swakopmund, and Windhoek. Reliable, shared, and affordable transport.",
    url: "https://proaviainc.com/services/shuttles",
    images: ["/images/vehicles/proavia-fleet-toyota-minivan-airport.webp"],
  },
};

export default function ShuttlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
