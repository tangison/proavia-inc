import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | ProAvia Travel & Tours",
  description:
    "Travel tips, destination guides, and insights from ProAvia's team of Namibian travel experts.",
  alternates: {
    canonical: "https://proaviainc.com/insights",
  },
  openGraph: {
    title: "Insights | ProAvia Travel & Tours",
    description:
      "Travel tips, destination guides, and insights from ProAvia's team of Namibian travel experts.",
    url: "https://proaviainc.com/insights",
    images: ["/images/destinations/destination-sandwich-harbour-ocean-view.webp"],
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
