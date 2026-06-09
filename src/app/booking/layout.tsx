import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Journey | ProAvia Travel & Tours",
  description: "Secure your premium airport transfer, Sandwich Harbour expedition, car hire, or luxury accommodation with ProAvia Travel & Tours.",
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
