import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ProAvia | Premium Namibian Travel",
  description:
    "ProAvia Travel & Tours is a premium, female-owned Namibian company based in Walvis Bay offering bespoke travel and accommodation services across Namibia.",
  alternates: {
    canonical: "https://proaviainc.com/about",
  },
  openGraph: {
    title: "About ProAvia | Premium Namibian Travel",
    description:
      "ProAvia Travel & Tours is a premium, female-owned Namibian company based in Walvis Bay offering bespoke travel and accommodation services across Namibia.",
    url: "https://proaviainc.com/about",
    images: ["/images/destinations/destination-walvis-bay-salt-shore.webp"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
