import type { Metadata } from "next";
import Link from "next/link";
import { companyContact, buildWhatsAppLink } from "@/lib/constants/contact";

export const metadata: Metadata = {
  title: "Terms and Conditions | ProAvia Travel & Tours",
  description:
    "ProAvia Travel & Tours terms and conditions: bookings, quotations, deposits, customer responsibilities, travel documents, cancellations, refunds, liability and contact information.",
  alternates: {
    canonical: "https://proaviainc.com/terms",
  },
  openGraph: {
    title: "Terms and Conditions | ProAvia Travel & Tours",
    description:
      "ProAvia Travel & Tours terms and conditions: bookings, quotations, deposits, customer responsibilities, travel documents, cancellations, refunds, liability and contact information.",
    url: "https://proaviainc.com/terms",
    images: ["/images/destinations/destination-sandwich-harbour-ocean-view.webp"],
  },
};

export default function TermsPage() {
  return (
    <section className="pt-36 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[900px] mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold block text-gold mb-6">LEGAL</span>
        <h1 className="editorial-headline text-5xl md:text-7xl text-ink mb-12">
          Terms and{" "}
          <span className="italic text-gold" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
            Conditions
          </span>
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-ink/60 leading-relaxed">
          <p className="text-lg">Last updated: July 2026</p>

          <h2 className="text-2xl font-serif text-ink mt-10">1. Introduction</h2>
          <p>
            These Terms and Conditions govern the relationship between ProAvia Travel &amp; Tours
            (&ldquo;ProAvia&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and customers who enquire about,
            quote, or book travel services through our website, email, WhatsApp, telephone, or other
            channels. By requesting a quotation, accepting a quotation, or making a payment, you accept
            these terms.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">2. Scope of services</h2>
          <p>
            ProAvia provides airport transfers, guided tours, vehicle rental, accommodation booking, flight
            ticketing, visa and immigration assistance, airport assistance, and scheduled shuttle services in
            Namibia. We act as an intermediary for many third-party services, including airlines, lodges,
            vehicle rental companies, and tour operators. The exact scope of each service is described in the
            relevant quotation.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">3. Booking requests</h2>
          <p>
            Submitting a booking request, completing a form on this website, or sending an enquiry by email
            or WhatsApp does not constitute a confirmed booking. A booking becomes confirmed only after
            ProAvia provides written confirmation and any stated payment requirement has been satisfied.
            Availability may change before confirmation.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">4. Quotations</h2>
          <p>
            Quotations describe the proposed service, price, inclusions, exclusions, payment requirements
            and cancellation conditions for that specific booking. Quotations may have a validity period,
            after which the price and availability may change. Customers must review the quotation before
            accepting it, and must check that names, travel dates, destinations and service details are
            correct. Third-party supplier conditions may apply and will be disclosed in the quotation where
            known.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">5. Booking confirmation</h2>
          <p>
            A booking is confirmed only when ProAvia issues written confirmation, typically by email or
            WhatsApp, and any deposit or full payment required at the time of booking has been received.
            Until that point, the service remains subject to availability and may be booked by another
            customer.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">6. Pricing and currency</h2>
          <p>
            Prices are quoted in the currency stated on the quotation. Prices may include or exclude
            taxes, park fees, fuel, driver gratuities, and other items, as stated in the quotation. Prices
            may change due to supplier price changes, currency fluctuation, fuel surcharges, or changes in
            government taxes. A confirmed quotation locks the price for the validity period stated on it.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">7. Deposits and payments</h2>
          <p>
            The deposit and payment schedule for each booking is stated in the quotation. Some services
            require full payment at the time of booking. Others require a deposit with the balance due
            before travel. Where a third-party supplier demands early payment or full prepayment, that
            requirement is passed through to the customer. Receipt of payment is confirmed by ProAvia in
            writing.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">8. Customer responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate passenger names, contact details, and travel document information.</li>
            <li>Review the quotation and booking confirmation carefully before paying.</li>
            <li>Disclose any mobility, health, dietary, or accessibility requirements before confirmation.</li>
            <li>Hold valid travel documents, including passports, visas, and permits required for the trip.</li>
            <li>Arrive on time for transfers, tours, and flights.</li>
            <li>Follow reasonable safety instructions from ProAvia staff, drivers, and guides.</li>
            <li>Pay any supplier charges incurred due to changes, damage, or misconduct.</li>
          </ul>

          <h2 className="text-2xl font-serif text-ink mt-10">9. Travel documents and visas</h2>
          <p>
            Customers are responsible for holding valid passports, visas, vaccination certificates, and
            other documents required for their trip. ProAvia can assist with visa applications as an
            administrative service, but visa decisions are made by the responsible authority and cannot be
            guaranteed. Customers should confirm entry requirements with the relevant embassy or consulate
            before travel.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">10. Third-party suppliers</h2>
          <p>
            ProAvia acts as an intermediary for many services, including airlines, lodges, hotels, vehicle
            rental companies, and ground operators. Each supplier has its own terms and conditions, which
            are incorporated into your booking by reference. ProAvia is not liable for the acts, errors, or
            omissions of third-party suppliers, but will assist customers in resolving issues that arise
            during a service.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">11. Changes to bookings</h2>
          <p>
            Customer-requested changes are subject to availability and to the supplier&rsquo;s change rules.
            Changes may incur a fee, may require a new quotation, and may not be possible close to the
            travel date. ProAvia may need to change a booking due to supplier changes, operational reasons,
            or force majeure. Where we initiate a change, we will inform the customer as soon as reasonably
            possible and offer the best available alternative.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">12. Cancellations and refunds</h2>
          <p>
            Cancellation conditions vary by service, supplier and travel date. The applicable conditions
            will be stated in your quotation or booking confirmation before payment. Customers should
            review and accept those conditions before confirming a booking. Full details are set out in our{" "}
            <Link href="/cancellation-policy" className="text-gold hover:text-gold/80 transition-colors">
              Cancellation and Refund Policy
            </Link>
            .
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">13. No-shows and late arrivals</h2>
          <p>
            A no-show is treated as a cancellation on the day of service and is generally non-refundable.
            Late arrivals may shorten or cancel the affected service. For flights, late arrival at the
            airport is governed by airline check-in rules. Customers should contact ProAvia immediately if
            they expect to arrive late.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">14. Weather and operational changes</h2>
          <p>
            Some tours and transport services depend on weather, road and safety conditions. Where
            operating would be unsafe, ProAvia may delay, reschedule, modify or cancel the affected
            service. The available remedy will depend on the circumstances and any supplier conditions
            disclosed during booking.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">15. Force majeure and events outside reasonable control</h2>
          <p>
            ProAvia is not liable for failure to perform a service where the failure is caused by an event
            outside our reasonable control. This includes natural disasters, severe weather, road closures,
            pandemic measures, government action, civil unrest, strikes, airline schedule changes, supplier
            failure, and similar events. In such cases we will work with you to find the best available
            alternative.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">16. Car-hire-specific conditions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Driver eligibility and document requirements apply, including minimum age and valid licence.</li>
            <li>
              Deposits, insurance excess, fuel rules, vehicle-use restrictions and cancellation terms are
              disclosed in the quotation or rental agreement.
            </li>
            <li>Vehicles are not confirmed until written confirmation is issued.</li>
            <li>The customer is responsible for traffic fines, damage, and unauthorised use of the vehicle.</li>
          </ul>

          <h2 className="text-2xl font-serif text-ink mt-10">17. Accommodation-specific conditions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Check-in and check-out times may vary by property.</li>
            <li>Occupancy limits, security deposits, house rules and cancellation terms are stated in the quotation or confirmation.</li>
            <li>ProAvia is not the operator of the accommodation and passes through the property&rsquo;s terms.</li>
          </ul>

          <h2 className="text-2xl font-serif text-ink mt-10">18. Flight-ticketing conditions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Airlines control schedules, baggage rules, changes and refunds.</li>
            <li>Passenger names must match official travel documents exactly.</li>
            <li>Airline fare rules are communicated during quotation or booking.</li>
            <li>ProAvia cannot guarantee visa approval or airline schedule stability.</li>
          </ul>

          <h2 className="text-2xl font-serif text-ink mt-10">19. Tour participation and safety</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Booking is subject to availability.</li>
            <li>Routes may change due to weather, road or safety conditions.</li>
            <li>Customers must disclose relevant mobility, health, dietary or accessibility requirements before confirmation.</li>
            <li>Customers must follow reasonable safety instructions from guides and drivers.</li>
          </ul>

          <h2 className="text-2xl font-serif text-ink mt-10">20. Liability limitations</h2>
          <p>
            ProAvia acts as an intermediary for many third-party services and is not liable for the acts,
            errors, or omissions of third-party providers. Our liability for services we provide directly is
            limited to the amount paid to ProAvia for the affected service. We are not liable for indirect
            or consequential losses, including missed flights, lost holiday time, or additional expenses
            arising from third-party failures.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">21. Personal information and privacy</h2>
          <p>
            We handle personal information in line with our{" "}
            <Link href="/privacy" className="text-gold hover:text-gold/80 transition-colors">
              Privacy Policy
            </Link>
            . Please read that policy for details on what information we collect, how we use it, and your
            rights.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">22. Complaints and dispute resolution</h2>
          <p>
            If something goes wrong during a service, please contact us as soon as possible so we can try to
            put it right while you are still travelling. Complaints should be sent in writing to{" "}
            <a href={companyContact.email.href} className="text-gold hover:text-gold/80 transition-colors">
              {companyContact.email.display}
            </a>
            . We will acknowledge complaints within a reasonable time and aim to resolve them through
            direct discussion. Where a complaint cannot be resolved, the laws of the Republic of Namibia
            apply.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">23. Applicable quotation terms</h2>
          <p>
            Specific prices, payment requirements, cancellation conditions, supplier rules and service
            inclusions may be provided in your quotation or booking confirmation. Where a quotation or
            confirmed service agreement contains terms that are more specific than these general website
            terms, the service-specific terms in the accepted quotation or confirmation will apply to that
            booking.
          </p>
          <p>
            Website enquiries are not automatically confirmed bookings. A booking becomes confirmed only
            after ProAvia provides written confirmation and any stated payment requirement has been
            satisfied. Quotations may have a validity period. Availability may change before confirmation.
            The customer must review the quotation before accepting it, and must check names, travel dates,
            destinations and service details. Third-party supplier conditions may apply. The final
            quotation must state the important payment and cancellation requirements for that service.
          </p>
          <p>
            Material terms, including any non-refundable components, cancellation fees and supplier rules,
            are disclosed before booking confirmation or payment. No hidden conditions are introduced after
            the customer has paid.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">24. Updates to these terms</h2>
          <p>
            We may update these Terms and Conditions from time to time. The &ldquo;Last updated&rdquo; date
            at the top of this page reflects the most recent revision. Bookings already confirmed before an
            update are governed by the terms in force at the time of confirmation.
          </p>

          <h2 className="text-2xl font-serif text-ink mt-10">25. Contact information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Email:{" "}
              <a href={companyContact.email.href} className="text-gold hover:text-gold/80 transition-colors">
                {companyContact.email.display}
              </a>
            </li>
            <li>
              Office telephone:{" "}
              <a href={companyContact.officePhone.href} className="text-gold hover:text-gold/80 transition-colors">
                {companyContact.officePhone.display}
              </a>
            </li>
            <li>
              Mobile and WhatsApp:{" "}
              <a
                href={buildWhatsAppLink("Hello ProAvia, I have a question about your terms.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                {companyContact.mobile.display}
              </a>
            </li>
            <li>Walvis Bay primary office: {companyContact.locations.walvisBay.address}</li>
            <li>Windhoek satellite office: {companyContact.locations.windhoek.address}</li>
          </ul>
          <p className="mt-4">
            See also our{" "}
            <Link href="/cancellation-policy" className="text-gold hover:text-gold/80 transition-colors">
              Cancellation and Refund Policy
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
