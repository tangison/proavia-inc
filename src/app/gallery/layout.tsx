import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | ProAvia Travel & Tours",
  description:
    "Explore our gallery of Namibian experiences — from Sandwich Harbour dunes to marine wildlife encounters.",
  alternates: {
    canonical: "https://proaviainc.com/gallery",
  },
  openGraph: {
    title: "Gallery | ProAvia Travel & Tours",
    description:
      "Explore our gallery of Namibian experiences — from Sandwich Harbour dunes to marine wildlife encounters.",
    url: "https://proaviainc.com/gallery",
    images: ["/images/experiences/experience-tour-photo-1.webp"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
