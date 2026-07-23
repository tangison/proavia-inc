import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa and Immigration Services | ProAvia Travel & Tours",
  description:
    "Visa and immigration services for all nationalities. We handle inbound Namibian visas and outbound international visas worldwide, including Schengen, US, UK, and Australian visas.",
  alternates: {
    canonical: "https://proaviainc.com/services/visa-handling",
  },
  openGraph: {
    title: "Visa and Immigration Services | ProAvia Travel & Tours",
    description:
      "Visa and immigration services for all nationalities. We handle inbound Namibian visas and outbound international visas worldwide, including Schengen, US, UK, and Australian visas.",
    url: "https://proaviainc.com/services/visa-handling",
    images: ["/images/airports/proavia-travel-docs-passport-boarding-pass.webp"],
  },
};

export default function VisaHandlingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
