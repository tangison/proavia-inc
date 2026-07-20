import type { Metadata } from "next";
import Link from "next/link";
import { companyContact, buildWhatsAppLink } from "@/lib/constants/contact";

export const metadata: Metadata = {
  title: "Cancellation and Refund Policy | ProAvia Travel & Tours",
  description:
    "How to cancel a ProAvia booking, how cancellation dates are determined, and how refunds, supplier fees, no-shows, weather changes and force majeure are handled.",
  alternates: {
    canonical: "https://proaviainc.com/cancellation-policy",
  },
  openGraph: {
    title: "Cancellation and Refund Policy | ProAvia Travel & Tours",
    description:
      "How to cancel a ProAvia booking, how cancellation dates are determined, and how refunds, supplier fees, no-shows, weather changes and force majeure are handled.",
    url: "https://proaviainc.com/cancellation-policy",
    images: ["/images/destinations/destination-sandwich-harbour-ocean-view.webp"],
  },
};

export default function CancellationPolicyPage() {
  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[900px] mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-6">LEGAL</span>
        <h1 className="editorial-headline text-5xl md:text-7xl text-ink mb-12">
          Cancellation and{" "}
          <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
            Refund Policy
          </span>
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-ink/60 leading-relaxed">
          <p className="text-lg">Last updated: July 2026</p>

          <p>
            This policy explains how cancellations and refunds are handled at ProAvia Travel &amp; Tours.
            Cancellation conditions vary by service, supplier and travel date. The conditions that apply to a
            specific booking will be stated in your quotation or booking confirmation before payment.
            Customers should review and accept those conditions before confirming a booking.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">1. How to submit a cancellation request</h2>
          <p>
            Cancellations should be made in writing so we have a clear record of the request and the date it
            was received. Use one of the official cancellation channels below.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Email:{" "}
              <a href={companyContact.email.href} className="text-gold hover:text-gold/80 transition-colors">
                {companyContact.email.display}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href={buildWhatsAppLink("Hello ProAvia, I need to cancel a booking.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                {companyContact.mobile.display}
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-serif text-ink mt-10">2. How the cancellation date is determined</h2>
          <p>
            The cancellation date is the date ProAvia receives your written request, not the date you sent it.
            If you cancel by email, the cancellation date is the date the message is received in our inbox. If
            you cancel by WhatsApp, it is the date we receive and read the message during operating hours.
            Requests received outside operating hours are dated to the next operating day.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">3. Service-specific quotation terms may apply</h2>
          <p>
            Different services have different cancellation conditions because each is governed by its own
            supplier rules. Tours, transfers, car hire, accommodation, flights and visas can each carry
            different fees and timing. The conditions that apply to your booking will be stated in your
            quotation or booking confirmation. Where a quotation or confirmed service agreement contains
            terms that are more specific than these general website terms, the service-specific terms in the
            accepted quotation or confirmation will apply to that booking.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">4. Supplier cancellation fees may apply</h2>
          <p>
            ProAvia works with hotels, lodges, airlines, vehicle rental companies, ground operators and other
            suppliers. Each supplier has its own cancellation rules, and those rules are passed through to
            you. In some cases the supplier may charge a fee, retain a deposit, or refuse a refund altogether
            if the cancellation falls within their penalty window. We will disclose any supplier cancellation
            conditions we know about in your quotation or confirmation.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">5. Non-refundable components</h2>
          <p>
            Some services are non-refundable. This may apply to third-party tickets, permits, visa fees,
            park entrance fees, prepaid accommodation, or peak-season bookings. Any non-refundable components
            in your booking will be disclosed before payment is taken. Please review your quotation carefully
            before accepting.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">6. Approved refunds</h2>
          <p>
            Approved refunds depend on the payment method used and the supplier&rsquo;s own refund process.
            Refunds to credit or debit cards typically take longer to appear on your statement than the time
            it takes us to authorise them, because the card network controls the final settlement timing.
            Bank transfers may take several business days. We will confirm the expected timeline when we
            authorise a refund.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">7. Changes requested by the customer</h2>
          <p>
            If you ask to change a booking rather than cancel it, we will do our best to accommodate the
            change subject to availability and the supplier&rsquo;s change rules. Changes may incur a fee,
            may require a new quotation, and may not be possible for services close to their travel date.
            Contact us as early as possible.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">8. No-shows</h2>
          <p>
            A no-show is when a customer does not arrive for a booked service and does not cancel in advance
            in writing. No-shows are generally treated as a cancellation on the day of service and are
            usually non-refundable, because the supplier may have committed resources, turned away other
            customers, or prepaid costs that cannot be recovered.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">9. Late arrivals</h2>
          <p>
            If you arrive late for a service, we will try to help where possible. For tours and transfers,
            late arrival may shorten or cancel your service, and may be treated as a no-show if the supplier
            cannot accommodate a delayed start. For flights, late arrival at the airport is governed by
            airline check-in rules. For accommodation, late check-in is usually possible if arranged in
            advance.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">10. When ProAvia cancels</h2>
          <p>
            If ProAvia cannot provide a confirmed service, we will contact the customer as soon as reasonably
            possible and explain the available options. Depending on the circumstances and the applicable
            supplier conditions, these may include rescheduling, an alternative service, a credit or a refund.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">11. Weather and operational changes</h2>
          <p>
            Some tours and transport services depend on weather, road and safety conditions. Where operating
            would be unsafe, ProAvia may delay, reschedule, modify or cancel the affected service. The
            available remedy will depend on the circumstances and any supplier conditions disclosed during
            booking. Where a tour is cancelled by the operator for safety reasons, the supplier&rsquo;s
            rescheduling or refund policy will apply.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">12. Force majeure and events outside reasonable control</h2>
          <p>
            ProAvia is not liable for failure to perform a service where the failure is caused by an event
            outside our reasonable control. This includes natural disasters, severe weather, road closures,
            pandemic measures, government action, civil unrest, strikes, airline schedule changes, supplier
            failure, and similar events. In such cases we will work with you to find the best available
            alternative, but cannot guarantee a full refund where supplier costs have already been incurred.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">13. Service-type differences</h2>
          <p>
            Different services are governed by different supplier rules. The following differences commonly
            apply, but the specific conditions for your booking are those stated in your quotation.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Flights.</strong> Airline fare rules control changes, refunds and name changes. Some
              fares are non-refundable. Airline schedule changes may occur at short notice.
            </li>
            <li>
              <strong>Accommodation.</strong> Lodges and hotels apply their own cancellation windows and
              may retain deposits or charge for late cancellation, especially in peak season.
            </li>
            <li>
              <strong>Vehicle rental.</strong> Rental companies apply their own cancellation and
              early-return rules. Deposits, insurance excess and one-way fees may be non-refundable.
            </li>
            <li>
              <strong>Tours.</strong> Tour operators may charge per-person cancellation fees based on the
              number of days remaining before departure.
            </li>
          </ul>

          <h2 className="text-2xl font-serif text-ink mt-10">14. Ask before you pay</h2>
          <p>
            We want you to book with confidence. If anything in your quotation or booking confirmation is
            unclear, please contact us before paying. We are happy to explain the cancellation conditions,
            non-refundable components, supplier rules and any other terms that apply to your service.
          </p>
          <p>
            Email{" "}
            <a href={companyContact.email.href} className="text-gold hover:text-gold/80 transition-colors">
              {companyContact.email.display}
            </a>{" "}
            or WhatsApp{" "}
            <a
              href={buildWhatsAppLink("Hello ProAvia, I have a question about cancellation terms.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              {companyContact.mobile.display}
            </a>
            .
          </p>

          <p className="text-sm text-ink/40 mt-10">
            See also our{" "}
            <Link href="/terms" className="text-gold hover:text-gold/80 transition-colors">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-gold hover:text-gold/80 transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
