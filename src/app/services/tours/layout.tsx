import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandwich Harbour Expeditions | ProAvia Travel & Tours",
  description:
    "Witness the rare convergence of sand and sea. Join our Sandwich Harbour 4x4 expeditions from Walvis Bay, Namibia.",
  alternates: {
    canonical: "https://proaviainc.com/services/tours",
  },
  openGraph: {
    title: "Sandwich Harbour Expeditions | ProAvia Travel & Tours",
    description:
      "Witness the rare convergence of sand and sea. Join our Sandwich Harbour 4x4 expeditions from Walvis Bay, Namibia.",
    url: "https://proaviainc.com/services/tours",
    images: ["/images/destinations/destination-sandwich-harbour-coastal-dunes.webp"],
  },
};

export default function ToursLayout({ children }: { children: React.ReactNode }) {
  return children;
}
