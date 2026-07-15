import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Airport Transfers | ProAvia Travel & Tours",
  description:
    "Sanctuary-to-Sanctuary logistics. Premium, private airport transfers in Walvis Bay, Swakopmund, and Windhoek, Namibia. Available 24/7.",
  alternates: {
    canonical: "https://proaviainc.com/services/transfers",
  },
  openGraph: {
    title: "Bespoke Airport Transfers | ProAvia Travel & Tours",
    description:
      "Sanctuary-to-Sanctuary logistics. Premium, private airport transfers in Walvis Bay, Swakopmund, and Windhoek, Namibia. Available 24/7.",
    url: "https://proaviainc.com/services/transfers",
    images: ["/images/vehicles/proavia-fleet-vw-tiguan-windhoek.webp"],
  },
};

export default function TransfersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
