import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ProAvia Travel & Tours",
  description: "Terms of service for ProAvia Travel & Tours.",
};

export default function TermsPage() {
  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[900px] mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-6">LEGAL</span>
        <h1 className="editorial-headline text-5xl md:text-7xl text-ink mb-12">
          Terms of{" "}
          <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
            Service
          </span>
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-ink/60 leading-relaxed">
          <p className="text-lg">Last updated: January 2025</p>

          <h2 className="text-2xl font-serif text-ink mt-8">1. Acceptance of Terms</h2>
          <p>
            By using the services of ProAvia Travel & Tours, you agree to these Terms of Service. If you do not agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">2. Services</h2>
          <p>
            ProAvia provides airport transfers, guided tours, car hire, and accommodation services in Namibia. All services are subject to availability and confirmed upon booking.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">3. Bookings and Payments</h2>
          <p>
            Bookings are confirmed upon receipt of payment or deposit. Prices are quoted in USD or NAD and may change without notice. Cancellation policies vary by service and will be communicated at the time of booking.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">4. Cancellations and Refunds</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cancellations made 48+ hours before the service: full refund minus administration fee</li>
            <li>Cancellations made 24-48 hours before: 50% refund</li>
            <li>Cancellations made less than 24 hours before: no refund</li>
            <li>No-shows: no refund</li>
          </ul>

          <h2 className="text-2xl font-serif text-ink mt-8">5. Liability</h2>
          <p>
            ProAvia acts as an intermediary for certain services and is not liable for the acts, errors, or omissions of third-party providers. Our liability is limited to the amount paid for the service in question.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">6. Travel Insurance</h2>
          <p>
            We strongly recommend comprehensive travel insurance covering cancellation, medical expenses, and personal belongings. ProAvia is not liable for losses not covered by insurance.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">7. Health and Safety</h2>
          <p>
            Participants in tours and activities must follow the instructions of guides at all times. ProAvia reserves the right to refuse service to anyone deemed to pose a safety risk.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">8. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Republic of Namibia. Any disputes shall be resolved in the courts of Namibia.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-8">9. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
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
