import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Handling | ProAvia Travel & Tours",
  description:
    "Stress-free visa application support for all nationalities. We manage documentation, submission, and follow-up on your behalf.",
  alternates: {
    canonical: "https://proaviainc.com/services/visa-handling",
  },
  openGraph: {
    title: "Visa Handling | ProAvia Travel & Tours",
    description:
      "Stress-free visa application support for all nationalities. We manage documentation, submission, and follow-up on your behalf.",
    url: "https://proaviainc.com/services/visa-handling",
    images: ["/images/airports/proavia-airport-walvis-bay-exterior.webp"],
  },
};

export default function VisaHandlingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
