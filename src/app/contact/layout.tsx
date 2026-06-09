import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ProAvia Travel & Tours Namibia",
  description: "Get in touch with ProAvia Travel & Tours. We are based in Walvis Bay, Erongo, Namibia, and ready to assist you with premium travel and accommodation services.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
