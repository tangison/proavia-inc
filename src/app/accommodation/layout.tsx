import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Accommodation | ProAvia Travel & Tours",
  description:
    "Curated residential properties in Walvis Bay and Swakopmund. Fully equipped, elegantly appointed, and positioned for exploration.",
  alternates: {
    canonical: "https://proaviainc.com/accommodation",
  },
  openGraph: {
    title: "Luxury Accommodation | ProAvia Travel & Tours",
    description:
      "Curated residential properties in Walvis Bay and Swakopmund. Fully equipped, elegantly appointed, and positioned for exploration.",
    url: "https://proaviainc.com/accommodation",
    images: ["/images/accommodation/proavia-service-hotel-accommodation.webp"],
  },
};

export default function AccommodationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
