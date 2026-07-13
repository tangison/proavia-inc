import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import { tours } from "@/data/tours";
import { companyContact } from "@/lib/constants/contact";

export default function FooterSection() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-5 max-w-[360px]">
            <Image
              alt="ProAvia Travel & Tours"
              width={180}
              height={90}
              className="h-20 md:h-24 w-auto"
              src="/images/proavia-logo-light.webp"
              loading="lazy"
            />
            <p className="text-sm opacity-50 leading-relaxed">
              Namibia, done right. Transfers, tours, and car hire from Walvis Bay.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ProaviaHoldingsNamibia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/8 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-gold/30 hover:text-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyContact.mobile.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-black/8 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-gold/30 hover:text-gold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <a
              href="https://www.facebook.com/ProaviaHoldingsNamibia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-gold/70 hover:text-gold transition-colors duration-300"
            >
              <Facebook className="w-3.5 h-3.5" />
              Follow us for tour itineraries and updates
            </a>
            {/* Compact operating hours. Full schedule on /contact. */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase opacity-40 mb-2">
                <Clock className="w-3 h-3" /> Operating Hours
              </div>
              <ul className="text-xs opacity-55 leading-relaxed space-y-0.5">
                <li>{companyContact.operatingHours.weekdays.label}: {companyContact.operatingHours.weekdays.display}</li>
                <li>{companyContact.operatingHours.saturday.label}: {companyContact.operatingHours.saturday.display}</li>
                <li>{companyContact.operatingHours.sunday.label}: {companyContact.operatingHours.sunday.display}</li>
              </ul>
              <p className="text-[10px] opacity-45 mt-1.5">{companyContact.operatingHours.emergency.display}.</p>
              <a href="/contact#operating-hours" className="text-[10px] tracking-widest uppercase text-gold/70 hover:text-gold transition-colors mt-2 inline-block">Full hours</a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-35">Company</h4>
              <ul className="text-sm space-y-2.5 font-medium">
                <li>
                  <a className="opacity-55 hover:opacity-100 transition-opacity duration-300" href="/booking">
                    Book
                  </a>
                </li>
                <li>
                  <a className="opacity-55 hover:opacity-100 transition-opacity duration-300" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="opacity-55 hover:opacity-100 transition-opacity duration-300" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-35 pt-2">Legal</h4>
              <ul className="text-sm space-y-2.5 font-medium">
                <li>
                  <a className="opacity-55 hover:opacity-100 transition-opacity duration-300" href="/terms">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a className="opacity-55 hover:opacity-100 transition-opacity duration-300" href="/cancellation-policy">
                    Cancellation and Refund Policy
                  </a>
                </li>
                <li>
                  <a className="opacity-55 hover:opacity-100 transition-opacity duration-300" href="/privacy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 md:col-span-1 lg:col-span-1">
              <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-35">Signature Tours</h4>
              <ul className="text-sm space-y-2.5 font-medium">
                {tours.map((tour) => (
                  <li key={tour.slug}>
                    <Link
                      className="opacity-55 hover:opacity-100 hover:text-gold transition-colors duration-300 line-clamp-1"
                      href={`/services/tours/${tour.slug}`}
                    >
                      {tour.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-35">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-3 h-3 text-gold flex-shrink-0 mt-1" />
                  <div className="flex flex-col gap-0.5">
                    <a
                      href={companyContact.officePhone.href}
                      className="text-sm opacity-55 hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="text-[9px] uppercase tracking-widest opacity-60 block">{companyContact.officePhone.label}</span>
                      {companyContact.officePhone.display}
                    </a>
                    <a
                      href={companyContact.mobile.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm opacity-55 hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="text-[9px] uppercase tracking-widest opacity-60 block">{companyContact.mobile.label}</span>
                      {companyContact.mobile.display}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-3 h-3 text-gold flex-shrink-0 mt-1" />
                  <a
                    href={companyContact.email.href}
                    className="text-sm opacity-55 hover:opacity-100 transition-opacity duration-300"
                  >
                    {companyContact.email.display}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3 h-3 text-gold flex-shrink-0 mt-1" />
                  <div className="flex flex-col gap-1.5">
                    <a
                      href={companyContact.locations.walvisBay.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm opacity-55 hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="text-[9px] uppercase tracking-widest opacity-60 block">{companyContact.locations.walvisBay.classification}</span>
                      {companyContact.locations.walvisBay.address}
                    </a>
                    <a
                      href={companyContact.locations.windhoek.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm opacity-55 hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="text-[9px] uppercase tracking-widest opacity-60 block">{companyContact.locations.windhoek.classification}</span>
                      {companyContact.locations.windhoek.address}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-black/5 flex flex-wrap items-center justify-center gap-8 md:gap-14">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-ink/20 w-full text-center mb-1">
            Accredited & Recognised
          </span>
          <Image
            alt="ATTA, African Travel and Tourism Association"
            width={64}
            height={64}
            className="h-8 md:h-9 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300"
            src="/images/atta-logo.webp"
            loading="lazy"
          />
          <Image
            alt="NIPDB, Namibia Investment Promotion and Development Board"
            width={64}
            height={64}
            className="h-8 md:h-9 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300"
            src="/images/nipdb-logo.webp"
            loading="lazy"
          />
          <Image
            alt="NTB, Namibia Tourism Board"
            width={64}
            height={64}
            className="h-8 md:h-9 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300"
            src="/images/ntb-logo.webp"
            loading="lazy"
          />
        </div>

        <div className="mt-10 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-30">
            © 2026 ProAvia Travel & Tours. All Rights Reserved.
          </span>
          <a
            href="https://studio.tangison.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.15em] uppercase opacity-25 hover:opacity-50 transition-opacity duration-300"
          >
            Designed by Tangison Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
