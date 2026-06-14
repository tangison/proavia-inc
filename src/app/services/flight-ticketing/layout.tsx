import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight Ticketing | ProAvia Travel & Tours",
  description:
    "Domestic and regional flight bookings handled end-to-end. We secure your seats across Namibia and Southern Africa via WhatsApp.",
  alternates: {
    canonical: "https://proaviainc.com/services/flight-ticketing",
  },
  openGraph: {
    title: "Flight Ticketing | ProAvia Travel & Tours",
    description:
      "Domestic and regional flight bookings handled end-to-end. We secure your seats across Namibia and Southern Africa via WhatsApp.",
    url: "https://proaviainc.com/services/flight-ticketing",
    images: ["/images/airports/proavia-airport-airlink-plane.webp"],
  },
};

export default function FlightTicketingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
