/**
 * ProAvia Travel & Tours, Official Contact Information
 *
 * Single source of truth for all contact details shown across the site.
 * Every component that renders a phone number, email, WhatsApp link, or
 * office address MUST import from this file rather than hard-coding the
 * values. This prevents drift between the footer, contact page, legal
 * pages, navigation, and structured data.
 *
 * Verified 2026-07-13 by Tangison Studio.
 * Operating hours added 2026-07-14.
 */

export const companyContact = {
  /** Official booking email. Replaces the legacy proaviatravel@gmail.com. */
  email: {
    display: "bookings@proaviainc.com",
    href: "mailto:bookings@proaviainc.com",
  },

  /** Office landline. Not a WhatsApp number. */
  officePhone: {
    label: "Office Telephone",
    display: "+264 83 675 9511",
    href: "tel:+264836759511",
  },

  /** Mobile number. Also the only official WhatsApp number. */
  mobile: {
    label: "Mobile / WhatsApp",
    display: "+264 81 810 9185",
    telephoneHref: "tel:+264818109185",
    whatsappHref: "https://wa.me/264818109185",
  },

  /**
   * Official operating hours. Times are in Africa/Windhoek (CAT, UTC+2).
   * Public-holiday hours may vary or require an appointment, so they are
   * kept as a note rather than encoded as guaranteed hours in JSON-LD.
   */
  operatingHours: {
    timezone: "Africa/Windhoek",
    weekdays: {
      label: "Monday to Friday",
      display: "08:00 to 17:00",
      /** ISO opening-hours spec for schema.org. */
      opens: "08:00",
      closes: "17:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    saturday: {
      label: "Saturday",
      display: "08:00 to 14:00",
      opens: "08:00",
      closes: "14:00",
      days: ["Saturday"],
    },
    sunday: {
      label: "Sunday",
      display: "09:00 to 13:00",
      opens: "09:00",
      closes: "13:00",
      days: ["Sunday"],
    },
    publicHolidays: {
      label: "Public Holidays",
      display: "09:00 to 13:00 or by appointment",
    },
    emergency: {
      label: "Emergency Travel Assistance",
      display: "24/7 for active travellers and confirmed bookings",
    },
    /** Wording used wherever emergency support is mentioned. */
    emergencyNote:
      "Our offices operate according to the hours listed above. Emergency travel assistance remains available 24/7 for active travellers and confirmed bookings.",
  },

  /** Two official office locations. Walvis Bay is the primary base. */
  locations: {
    walvisBay: {
      label: "Walvis Bay Office",
      classification: "Primary Office",
      address: "154 Sam Nujoma Avenue, Walvis Bay, Erongo, Namibia",
      /** Verified existing Google Maps short link. Walvis Bay only. */
      mapsHref: "https://maps.app.goo.gl/V2TnUoufwFc9ypJx7",
    },
    windhoek: {
      label: "Windhoek Satellite Office",
      classification: "Satellite Office",
      address:
        "Corner of Dr. Frans Indongo Street and John Meinert Street, Windhoek West, Windhoek, Namibia",
      /**
       * No verified short link exists for Windhoek. Use a Google Maps
       * search URL built from the complete verified address. Do not
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
 * Never accepts the office landline. See companyContact.mobile.whatsappHref.
 */
export function buildWhatsAppLink(message: string): string {
  return `${companyContact.mobile.whatsappHref}?text=${encodeURIComponent(message)}`;
}

/**
 * Build the schema.org OpeningHoursSpecification array for LocalBusiness
 * JSON-LD. Public-holiday hours are intentionally omitted because the
 * schema cannot represent "or by appointment" qualifications accurately.
 */
export function buildOpeningHoursSpec() {
  const { weekdays, saturday, sunday } = companyContact.operatingHours;
  const dayMap: Record<string, string> = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
  };
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: weekdays.days.map((d) => dayMap[d]),
      opens: weekdays.opens,
      closes: weekdays.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: saturday.days.map((d) => dayMap[d]),
      opens: saturday.opens,
      closes: saturday.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: sunday.days.map((d) => dayMap[d]),
      opens: sunday.opens,
      closes: sunday.closes,
    },
  ];
}
