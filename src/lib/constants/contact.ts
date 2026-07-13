/**
 * ProAvia Travel & Tours — Official Contact Information
 *
 * Single source of truth for all contact details shown across the site.
 * Every component that renders a phone number, email, WhatsApp link, or
 * office address MUST import from this file rather than hard-coding the
 * values. This prevents drift between the footer, contact page, legal
 * pages, navigation, and structured data.
 *
 * Verified 2026-07-13 by Tangison Studio.
 */

export const companyContact = {
  /** Official booking email. Replaces the legacy proaviatravel@gmail.com. */
  email: {
    display: "bookings@proaviainc.com",
    href: "mailto:bookings@proaviainc.com",
  },

  /** Office landline — NOT a WhatsApp number. */
  officePhone: {
    label: "Office Telephone",
    display: "+264 83 675 9511",
    href: "tel:+264836759511",
  },

  /** Mobile number — also the only official WhatsApp number. */
  mobile: {
    label: "Mobile / WhatsApp",
    display: "+264 81 810 9185",
    telephoneHref: "tel:+264818109185",
    whatsappHref: "https://wa.me/264818109185",
  },

  /** Two official office locations. Walvis Bay is the primary base. */
  locations: {
    walvisBay: {
      label: "Walvis Bay Office",
      classification: "Primary Office",
      address: "154 Sam Nujoma Avenue, Walvis Bay, Erongo, Namibia",
      /** Verified existing Google Maps short link — Walvis Bay only. */
      mapsHref: "https://maps.app.goo.gl/V2TnUoufwFc9ypJx7",
    },
    windhoek: {
      label: "Windhoek Satellite Office",
      classification: "Satellite Office",
      address:
        "Corner of Dr. Frans Indongo Street and John Meinert Street, Windhoek West, Windhoek, Namibia",
      /**
       * No verified short link exists for Windhoek. Use a Google Maps
       * search URL built from the complete verified address. Do NOT
       * reuse the Walvis Bay mapsHref here.
       */
      mapsHref:
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(
          "Corner of Dr. Frans Indongo Street and John Meinert Street, Windhoek West, Windhoek, Namibia"
        ),
    },
  },
} as const;

/**
 * Build a WhatsApp deep link with a pre-filled message.
 * Always uses the official mobile number (+264 81 810 9185).
 * Never accepts the office landline — see companyContact.mobile.whatsappHref.
 */
export function buildWhatsAppLink(message: string): string {
  return `${companyContact.mobile.whatsappHref}?text=${encodeURIComponent(message)}`;
}
