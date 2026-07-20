import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Accommodation | ProAvia Travel & Tours",
  description:
    "Hand-picked residential properties in Walvis Bay and Swakopmund. Fully equipped, well-located, and ready for your stay.",
  alternates: {
    canonical: "https://proaviainc.com/accommodation",
  },
  openGraph: {
    title: "Luxury Accommodation | ProAvia Travel & Tours",
    description:
      "Hand-picked residential properties in Walvis Bay and Swakopmund. Fully equipped, well-located, and ready for your stay.",
    url: "https://proaviainc.com/accommodation",
    images: ["/images/accommodation/proavia-accommodation-living-room-dining-hero.webp"],
  },
};

export default function AccommodationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
