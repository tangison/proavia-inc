import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | ProAvia Travel & Tours",
  description: "Explore our gallery of Namibian experiences — from Sandwich Harbour dunes to marine wildlife encounters.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
