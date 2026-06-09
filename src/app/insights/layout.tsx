import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | ProAvia Travel & Tours",
  description: "Travel tips, destination guides, and insights from ProAvia's team of Namibian travel experts.",
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
