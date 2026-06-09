export interface Tour {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  duration: string;
  price: number;
  priceLabel: string;
  category: string;
  highlights: string[];
  included: string[];
  images: string[];
  gallery: { src: string; alt: string }[];
}

export const tours: Tour[] = [
  {
    slug: "sandwich-harbour",
    name: "Sandwich Harbour Expedition",
    tagline: "Where the World's Oldest Desert Meets the Atlantic Ocean",
    description:
      "Drive through the dunes where the Namib meets the Atlantic. A 4x4 tour to one of the most isolated lagoons on Earth — a UNESCO World Heritage Site candidate.",
    longDescription:
      "Where the towering sand dunes of the Namib Desert plunge into the Atlantic Ocean, Sandwich Harbour stands as one of Earth's most dramatic convergence points. Our expert-guided 4x4 expedition traverses the Walvis Bay Lagoon, skirts the pink salt pans, and scales 100-metre dunes to reach this UNESCO World Heritage Site candidate. This is not merely a tour — it is an immersion into one of the planet's most surreal landscapes, where desert and ocean have negotiated an uneasy truce for millennia.",
    duration: "Half Day (~4-5 hours)",
    price: 179,
    priceLabel: "per person",
    category: "4x4 Desert & Coastal Adventure",
    highlights: [
      "Drive through the world's oldest desert where dunes meet the Atlantic",
      "Scale 100-metre sand dunes with expert 4x4 drivers",
      "Visit the Walvis Bay Lagoon — RAMSAR Wetland of International Importance",
      "Witness the surreal pink salt pans from panoramic viewpoints",
      "Enjoy fresh oysters and sparkling wine atop the dunes",
    ],
    included: [
      "Professional guide & 4x4 vehicle",
      "Fresh oysters & sparkling wine",
      "Water & soft drinks",
      "Hotel pick-up & drop-off",
      "Park entrance fees",
    ],
    images: ["/images/tours/sandwich-harbour-1.webp", "/images/tours/sandwich-harbour-2.webp", "/images/tours/sandwich-harbour-3.webp", "/images/tours/sandwich-harbour-4.webp"],
    gallery: [
      { src: "/images/tours/sandwich-harbour-1.webp", alt: "Sandwich Harbour dunes" },
      { src: "/images/tours/sandwich-harbour-2.webp", alt: "Sandwich Harbour lagoon" },
      { src: "/images/tours/sandwich-harbour-3.webp", alt: "Sandwich Harbour 4x4" },
      { src: "/images/tours/sandwich-harbour-4.webp", alt: "Sandwich Harbour ocean view" },
    ],
  },
  {
    slug: "catamaran-dolphin-cruise",
    name: "Atlantic Catamaran Cruise",
    tagline: "Namibia's Marine Big 5 — Dolphins, Seals, Whales, Mola Mola & Leatherback Turtles",
    description:
      "Sail the Atlantic aboard a luxury catamaran. Encounter dolphins, seals, whales, and pelicans on Namibia's premier marine experience.",
    longDescription:
      "Set sail from Walvis Bay harbour aboard a luxury catamaran and enter the rich Benguela Current ecosystem. This premier marine safari brings you face-to-face with Namibia's Marine Big 5: playful Heaviside's and bottlenose dolphins, thousands of Cape fur seals, seasonal whale sightings, the mysterious Mola Mola (sunfish), and the rare leatherback turtle. Fresh oysters and sparkling wine are served on board as you glide past Pelican Point — a refined expedition on the Atlantic.",
    duration: "Half Day (~3.5-4 hours)",
    price: 69,
    priceLabel: "per person",
    category: "Marine Wildlife Experience",
    highlights: [
      "Encounter dolphins, seals, and seasonal whales up close",
      "Fresh oysters and sparkling wine served on board",
      "Visit Pelican Point and its iconic lighthouse",
      "Spot Mola Mola (sunfish) and leatherback turtles",
      "Champagne breakfast on the Atlantic",
    ],
    included: [
      "Luxury catamaran cruise",
      "Fresh oysters & sparkling wine",
      "Light breakfast & snacks",
      "Professional crew & guide",
    ],
    images: ["/images/tours/catamaran-dolphin-cruise-1.webp", "/images/tours/catamaran-dolphin-cruise-2.webp", "/images/tours/catamaran-dolphin-cruise-3.webp"],
    gallery: [
      { src: "/images/tours/catamaran-dolphin-cruise-1.webp", alt: "Catamaran cruise departure" },
      { src: "/images/tours/catamaran-dolphin-cruise-2.webp", alt: "Dolphins alongside" },
      { src: "/images/tours/catamaran-dolphin-cruise-3.webp", alt: "Seals on rocks" },
    ],
  },
  {
    slug: "spitzkoppe-adventure",
    name: "Spitzkoppe Adventure Drive",
    tagline: "The Matterhorn of Namibia — Ancient Granite, 2000-Year-Old Rock Art & Desert Silence",
    description:
      "Journey to the Matterhorn of Namibia. Discover 2000-year-old Bushman rock art, ancient granite peaks, and desert silence at Spitzkoppe.",
    longDescription:
      "Rising sharply from the desert floor, the Spitzkoppe massif — known as the Matterhorn of Namibia — has drawn explorers and artists for millennia. Our adventure drive takes you through dramatic desert landscapes to discover 2000-year-old Bushman rock art, navigate ancient granite formations, and experience the profound silence of one of Namibia's most spiritually resonant landscapes. This is where geology meets mythology.",
    duration: "Full Day (~8-10 hours)",
    price: 139,
    priceLabel: "per person",
    category: "Desert & Cultural Adventure",
    highlights: [
      "Explore the Matterhorn of Namibia — 700-million-year-old granite",
      "Discover 2000-year-old Bushman rock art",
      "Walk through the rock arch — a natural granite bridge",
      "Experience profound desert silence",
      "Cultural insights from local Damara guides",
    ],
    included: [
      "Professional guide & 4x4 vehicle",
      "Light lunch & refreshments",
      "Park entrance fees",
      "Hotel pick-up & drop-off",
    ],
    images: ["/images/tours/spitzkoppe-adventure-1.webp", "/images/tours/spitzkoppe-adventure-2.webp", "/images/tours/spitzkoppe-adventure-3.webp", "/images/tours/spitzkoppe-adventure-4.webp"],
    gallery: [
      { src: "/images/tours/spitzkoppe-adventure-1.webp", alt: "Spitzkoppe peaks" },
      { src: "/images/tours/spitzkoppe-adventure-2.webp", alt: "Rock art" },
      { src: "/images/tours/spitzkoppe-adventure-3.webp", alt: "Granite arch" },
      { src: "/images/tours/spitzkoppe-adventure-4.webp", alt: "Desert landscape" },
      { src: "/images/tours/spitzkoppe-adventure-5.webp", alt: "Spitzkoppe sunset" },
    ],
  },
  {
    slug: "skeleton-coast",
    name: "Skeleton Coast Expedition",
    tagline: "Shipwrecks, Seals & the World's Most Haunting Coastline",
    description:
      "Explore shipwrecks and vast seal colonies along the world's most haunting coastline — the Skeleton Coast of Namibia.",
    longDescription:
      "The Skeleton Coast — where the bones of ships and whales litter a shoreline shrouded in perpetual fog. Our expedition navigates this haunting coastline, visiting the remains of shipwrecks that stretch back centuries, vast Cape fur seal colonies at Cape Cross, and the stark beauty of one of Earth's most desolate landscapes. This is nature at its most indifferent, and its most magnificent.",
    duration: "Full Day (~8-10 hours)",
    price: 79,
    priceLabel: "per person",
    category: "Coastal Adventure & Wildlife",
    highlights: [
      "Visit century-old shipwrecks along the coast",
      "Witness the massive Cape Cross seal colony (up to 200,000 seals)",
      "Drive the legendary Skeleton Coast",
      "See the Zeila shipwreck — one of the coast's most photographed",
      "Experience the fog-shrouded coastline",
    ],
    included: [
      "Professional guide & 4x4 vehicle",
      "Light lunch & refreshments",
      "Park entrance fees",
      "Hotel pick-up & drop-off",
    ],
    images: ["/images/tours/skeleton-coast-1.webp", "/images/tours/skeleton-coast-2.webp", "/images/tours/skeleton-coast-3.webp"],
    gallery: [
      { src: "/images/tours/skeleton-coast-1.webp", alt: "Skeleton Coast shipwreck" },
      { src: "/images/tours/skeleton-coast-2.webp", alt: "Seal colony" },
      { src: "/images/tours/skeleton-coast-3.webp", alt: "Coastal fog" },
      { src: "/images/tours/skeleton-coast-4.webp", alt: "Desert coastline" },
      { src: "/images/tours/skeleton-coast-5.webp", alt: "Zeila shipwreck" },
    ],
  },
  {
    slug: "moon-valley-welwitschia",
    name: "Moon Valley & Welwitschia Plains",
    tagline: "500 Million Years of Desert History in a Single Day",
    description:
      "Walk through Moon Valley's otherworldly landscape and encounter the ancient Welwitschia mirabilis — a living fossil over 2,000 years old.",
    longDescription:
      "The Moon Valley landscape — so named for its extraterrestrial appearance — is the result of 500 million years of geological erosion. Our expedition traverses this surreal terrain to reach the Welwitschia Plains, home to the Welwitschia mirabilis: a living fossil that can survive for over 2,000 years in one of Earth's harshest environments. Along the way, discover the Swakop River canyon, the intriguing Liebfrauenhöhle cave, and landscapes that have served as stand-ins for other planets in major motion pictures.",
    duration: "Half Day (~4-5 hours)",
    price: 169,
    priceLabel: "per person",
    category: "Desert Geology & Natural Wonders",
    highlights: [
      "Walk through Moon Valley's 500-million-year-old landscape",
      "See the 2,000-year-old Welwitschia mirabilis — a living fossil",
      "Visit the Swakop River canyon",
      "Discover landscapes used in Hollywood films",
      "Expert geological commentary throughout",
    ],
    included: [
      "Professional guide & 4x4 vehicle",
      "Refreshments & snacks",
      "Park entrance fees",
      "Hotel pick-up & drop-off",
    ],
    images: ["/images/tours/moon-valley-welwitschia-1.webp", "/images/tours/moon-valley-welwitschia-2.webp", "/images/tours/moon-valley-welwitschia-3.webp"],
    gallery: [
      { src: "/images/tours/moon-valley-welwitschia-1.webp", alt: "Moon Valley landscape" },
      { src: "/images/tours/moon-valley-welwitschia-2.webp", alt: "Welwitschia plant" },
      { src: "/images/tours/moon-valley-welwitschia-3.webp", alt: "Desert canyon" },
      { src: "/images/tours/moon-valley-welwitschia-4.webp", alt: "Rock formations" },
      { src: "/images/tours/moon-valley-welwitschia-5.webp", alt: "Geological layers" },
    ],
  },
  {
    slug: "swakopmund-town-tour",
    name: "Swakopmund Heritage & Town Tour",
    tagline: "German Colonial Architecture Meets Coastal Charm in Namibia's Adventure Capital",
    description:
      "Discover Swakopmund's German colonial heritage, vibrant culture, and coastal charm on this guided town tour.",
    longDescription:
      "Swakopmund — Namibia's adventure capital — is a town where German colonial architecture meets Atlantic coastal charm. Our heritage tour reveals the stories behind the ornate Jugendstil buildings, the historic Mole seawall, and the iconic Jetty. From the bustling craft markets to the serene lighthouse, this tour provides an intimate portrait of a town that has been a coastal sanctuary since 1892.",
    duration: "Half Day (~3-4 hours)",
    price: 59,
    priceLabel: "per person",
    category: "Cultural & Heritage Tour",
    highlights: [
      "Explore German colonial Jugendstil architecture",
      "Walk the historic Mole seawall and Jetty",
      "Visit the Swakopmund Lighthouse",
      "Browse craft markets for authentic souvenirs",
      "Learn about the town's 130-year history",
    ],
    included: [
      "Professional local guide",
      "Vehicle transport",
      "Hotel pick-up & drop-off",
    ],
    images: ["/images/tours/swakopmund-town-tour-1.webp", "/images/tours/swakopmund-town-tour-2.webp"],
    gallery: [
      { src: "/images/tours/swakopmund-town-tour-1.webp", alt: "Swakopmund architecture" },
      { src: "/images/tours/swakopmund-town-tour-2.webp", alt: "Swakopmund Jetty" },
    ],
  },
  {
    slug: "classic-namibia-safari",
    name: "Classic Namibia — The Full Journey",
    tagline: "From Walvis Bay to Etosha — Namibia's Greatest Hits in One Unforgettable Safari",
    description:
      "Experience Namibia's greatest destinations in one epic multi-day safari — from the coast to Etosha, Sossusvlei to Damaraland.",
    longDescription:
      "Our signature multi-day safari weaves together Namibia's most iconic destinations into a single, unforgettable journey. From the coastal dunes of Walvis Bay and Sandwich Harbour to the towering red dunes of Sossusvlei, the ancient rock art of Damaraland, and the wildlife-rich plains of Etosha — this is Namibia, done right. Every detail is handled: luxury accommodation, expert guides, and seamless logistics that allow you to focus entirely on the experience.",
    duration: "7-10 Days (Customisable)",
    price: 2490,
    priceLabel: "per person (7-day)",
    category: "Multi-Day Safari",
    highlights: [
      "Sandwich Harbour 4x4 expedition",
      "Sossusvlei's towering red dunes at sunrise",
      "Ancient rock art in Damaraland",
      "Etosha National Park game drives",
      "Luxury lodge accommodation throughout",
    ],
    included: [
      "Professional guide & 4x4 vehicle throughout",
      "All accommodation (luxury lodges)",
      "All meals & select beverages",
      "All park entrance fees",
      "Airport transfers",
    ],
    images: ["/images/tours/classic-namibia-safari-1.webp", "/images/tours/classic-namibia-safari-2.jpg", "/images/tours/classic-namibia-safari-3.jpg"],
    gallery: [
      { src: "/images/tours/classic-namibia-safari-1.webp", alt: "Namibian safari landscape" },
      { src: "/images/tours/classic-namibia-safari-2.jpg", alt: "Sossusvlei dunes" },
      { src: "/images/tours/classic-namibia-safari-3.jpg", alt: "Etosha wildlife" },
      { src: "/images/tours/classic-namibia-safari-4.jpg", alt: "Damaraland" },
      { src: "/images/tours/classic-namibia-safari-5.jpg", alt: "Luxury lodge" },
    ],
  },
  {
    slug: "sandwich-harbour-catamaran-combo",
    name: "Ultimate Walvis Bay Day — Catamaran + Sandwich Harbour",
    tagline: "Two Unmissable Experiences, One Extraordinary Day — Atlantic & Desert Combined",
    description:
      "The ultimate Walvis Bay day: a morning catamaran cruise followed by an afternoon Sandwich Harbour 4x4 expedition.",
    longDescription:
      "For those who refuse to choose, our Ultimate Walvis Bay Day combines two of Namibia's most celebrated experiences into one extraordinary day. Begin with a morning catamaran cruise — dolphins, seals, oysters, and the Atlantic breeze — before transitioning to an afternoon 4x4 expedition to Sandwich Harbour, where the world's oldest desert meets the ocean. A light lunch connects the two experiences, and by sunset you'll have seen Walvis Bay from both its perspectives: the sea and the sand.",
    duration: "Full Day (~8-10 hours)",
    price: 229,
    priceLabel: "per person",
    category: "Combo Experience",
    highlights: [
      "Morning catamaran cruise with dolphins & seals",
      "Fresh oysters & sparkling wine on the Atlantic",
      "Afternoon 4x4 expedition to Sandwich Harbour",
      "Light lunch between experiences",
      "Sunset over the dunes",
    ],
    included: [
      "Catamaran cruise & 4x4 expedition",
      "Fresh oysters, sparkling wine & light lunch",
      "Professional guides throughout",
      "All park entrance fees",
      "Hotel pick-up & drop-off",
    ],
    images: ["/images/tours/catamaran-dolphin-cruise-1.webp", "/images/tours/sandwich-harbour-1.webp"],
    gallery: [
      { src: "/images/tours/catamaran-dolphin-cruise-1.webp", alt: "Catamaran morning" },
      { src: "/images/tours/sandwich-harbour-1.webp", alt: "Sandwich Harbour afternoon" },
    ],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
