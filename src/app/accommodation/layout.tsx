import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Accommodation | ProAvia Travel & Tours",
  description: "Curated residential properties in Walvis Bay and Swakopmund. Fully equipped, elegantly appointed, and positioned for exploration.",
};

export default function AccommodationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
