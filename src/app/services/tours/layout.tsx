import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandwich Harbour Expeditions | ProAvia Travel & Tours",
  description: "Witness the rare convergence of sand and sea. Join our Sandwich Harbour 4x4 expeditions from Walvis Bay, Namibia.",
};

export default function ToursLayout({ children }: { children: React.ReactNode }) {
  return children;
}
