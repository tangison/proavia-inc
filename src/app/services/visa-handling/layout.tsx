import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa and Immigration Services | ProAvia Travel & Tours",
  description:
    "Visa and immigration application support for all nationalities. We manage documentation, submission, and follow-up on your behalf.",
  alternates: {
    canonical: "https://proaviainc.com/services/visa-handling",
  },
  openGraph: {
    title: "Visa and Immigration Services | ProAvia Travel & Tours",
    description:
      "Visa and immigration application support for all nationalities. We manage documentation, submission, and follow-up on your behalf.",
    url: "https://proaviainc.com/services/visa-handling",
    images: ["/images/airports/proavia-airport-walvis-bay-exterior.webp"],
  },
};

export default function VisaHandlingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
