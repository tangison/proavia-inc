import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ProAvia Travel & Tours Namibia",
  description:
    "Get in touch with ProAvia Travel & Tours. We are based in Walvis Bay, Erongo, Namibia, and ready to assist you with premium travel and accommodation services.",
  alternates: {
    canonical: "https://proaviainc.com/contact",
  },
  openGraph: {
    title: "Contact Us | ProAvia Travel & Tours Namibia",
    description:
      "Get in touch with ProAvia Travel & Tours. We are based in Walvis Bay, Erongo, Namibia, and ready to assist you with premium travel and accommodation services.",
    url: "https://proaviainc.com/contact",
    images: ["/images/destinations/destination-walvis-bay-salt-shore.webp"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
