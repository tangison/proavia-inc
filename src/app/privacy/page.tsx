import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ProAvia Travel & Tours",
  description: "Privacy policy for ProAvia Travel & Tours. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://proaviainc.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | ProAvia Travel & Tours",
    description: "Privacy policy for ProAvia Travel & Tours. Learn how we collect, use, and protect your personal information.",
    url: "https://proaviainc.com/privacy",
    images: ["/images/destinations/destination-sandwich-harbour-ocean-view.webp"],
  },
};

export default function PrivacyPage() {
  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[900px] mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-6">LEGAL</span>
        <h1 className="editorial-headline text-5xl md:text-7xl text-ink mb-12">
          Privacy{" "}
          <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
            Policy
          </span>
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-ink/60 leading-relaxed">
          <p className="text-lg">Last updated: January 2025</p>

          <h2 className="text-2xl font-serif text-ink mt-8">1. Information We Collect</h2>
          <p>
            ProAvia Travel & Tours collects personal information that you voluntarily provide when using our services, booking transfers or tours, or contacting us via WhatsApp, email, or our website. This may include your name, email address, phone number, travel dates, and payment information.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and confirm your bookings</li>
            <li>Communicate with you about your services</li>
            <li>Provide customer support</li>
            <li>Send relevant travel information and updates (with your consent)</li>
            <li>Improve our services and website</li>
          </ul>

          <h2 className="text-2xl font-serif text-ink mt-8">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties except as required to provide our services (e.g., accommodation partners, transport providers) or as required by Namibian law.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">5. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some features may not function properly.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us at proaviatravel@gmail.com to exercise these rights.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">7. Contact</h2>
          <p>
            For privacy-related enquiries, contact us at{" "}
            <a href="mailto:proaviatravel@gmail.com" className="text-gold hover:text-gold/80 transition-colors">
              proaviatravel@gmail.com
            </a>{" "}
            or call +264 81 810 9185.
          </p>
        </div>
      </div>
    </section>
  );
}
