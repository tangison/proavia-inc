import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display, Instrument_Serif } from "next/font/google";
import Navigation from "@/components/proavia/navigation";
import FooterSection from "@/components/proavia/footer-section";
import ScrollToTop from "@/components/proavia/scroll-to-top";
import { companyContact, buildOpeningHoursSpec } from "@/lib/constants/contact";
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
  metadataBase: new URL("https://proaviainc.com"),
  title: "ProAvia Travel & Tours | Namibia, Done Right.",
  description:
    "Premium Namibian travel experiences. Book tours, transfers, car hire, and accommodation in Walvis Bay and beyond.",
  keywords: "ProAvia,Namibia,transfers,tours,Walvis Bay,Sandwich Harbour,car hire,airport transfers,Windhoek,Swakopmund",
  authors: [{ name: "ProAvia Travel & Tours" }],
  alternates: {
    canonical: "https://proaviainc.com",
  },
  openGraph: {
    title: "ProAvia Travel & Tours | Namibia, Done Right.",
    description: "Premium Namibian travel experiences. Book tours, transfers, car hire, and accommodation in Walvis Bay and beyond.",
    url: "https://proaviainc.com",
    locale: "en_NA",
    type: "website",
    images: ["/images/destinations/destination-sandwich-harbour-ocean-view.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProAvia Travel & Tours | Namibia, Done Right.",
    description: "Premium Namibian travel experiences. Book tours, transfers, car hire, and accommodation in Walvis Bay and beyond.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/images/icon.svg", type: "image/svg+xml" },
      { url: "/images/icon.webp", type: "image/webp", sizes: "64x64" },
      { url: "/images/icon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0f2746",
};

/**
 * LocalBusiness JSON-LD. Encodes the official contact details, both
 * office locations, and the standard opening hours. Public-holiday
 * hours are kept on the visible contact page only, because the schema
 * cannot represent "or by appointment" qualifications accurately.
 */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "ProAvia Travel & Tours",
  description:
    "Premium Namibian travel experiences. Book tours, transfers, car hire, and accommodation in Walvis Bay and beyond.",
  url: "https://proaviainc.com",
  email: companyContact.email.display,
  telephone: companyContact.officePhone.display,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: companyContact.officePhone.href.replace("tel:", ""),
      email: companyContact.email.display,
      areaServed: "Namibia",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: companyContact.mobile.telephoneHref.replace("tel:", ""),
      email: companyContact.email.display,
      areaServed: "Namibia",
      availableLanguage: ["English"],
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      name: companyContact.locations.walvisBay.label,
      streetAddress: "154 Sam Nujoma Avenue",
      addressLocality: "Walvis Bay",
      addressRegion: "Erongo",
      addressCountry: "Namibia",
    },
    {
      "@type": "PostalAddress",
      name: companyContact.locations.windhoek.label,
      streetAddress:
        "Corner of Dr. Frans Indongo Street and John Meinert Street, Windhoek West",
      addressLocality: "Windhoek",
      addressRegion: "Khomas",
      addressCountry: "Namibia",
    },
  ],
  areaServed: "Namibia",
  openingHoursSpecification: buildOpeningHoursSpec(),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
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
