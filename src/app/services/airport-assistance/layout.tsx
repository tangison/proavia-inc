import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Assistance | ProAvia Travel & Tours",
  description:
    "VIP meet-and-greet, check-in support, and luggage handling at Namibian airports. Available 24/7 for all travellers.",
  alternates: {
    canonical: "https://proaviainc.com/services/airport-assistance",
  },
  openGraph: {
    title: "Airport Assistance | ProAvia Travel & Tours",
    description:
      "VIP meet-and-greet, check-in support, and luggage handling at Namibian airports. Available 24/7 for all travellers.",
    url: "https://proaviainc.com/services/airport-assistance",
    images: ["/images/transfers/airport-meet-and-greet.webp"],
  },
};

export default function AirportAssistanceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
