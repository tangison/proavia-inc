import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Instrument_Serif } from "next/font/google";
import Navigation from "@/components/proavia/navigation";
import FooterSection from "@/components/proavia/footer-section";
import ScrollToTop from "@/components/proavia/scroll-to-top";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "ProAvia Travel & Tours — Namibia, done right.",
  description:
    "Premium transfers, curated coastal tours, and bespoke car hire services in Walvis Bay and across Namibia. Experience sophisticated exploration with ProAvia. +264 81 810 9185.",
  keywords: "ProAvia,Namibia,transfers,tours,Walvis Bay,Sandwich Harbour,car hire,airport transfers,Windhoek,Swakopmund",
  authors: [{ name: "ProAvia Travel & Tours" }],
  openGraph: {
    title: "ProAvia Travel & Tours — Namibia, done right.",
    description: "Transfers, tours, and car hire from Walvis Bay.",
    url: "https://proaviainc.com",
    locale: "en_NA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ProAvia Travel & Tours — Namibia, done right.",
    description: "Transfers, tours, and car hire from Walvis Bay.",
  },
  icons: {
    icon: "/images/icon.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${playfairDisplay.variable} ${instrumentSerif.variable} antialiased bg-canvas text-ink font-sans`}
      >
        <div className="noise-overlay" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-5 focus:py-3 focus:bg-gold focus:text-ink focus:rounded-full focus:text-sm focus:font-bold focus:tracking-widest focus:uppercase focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <FooterSection />
        <ScrollToTop />
      </body>
    </html>
  );
}
