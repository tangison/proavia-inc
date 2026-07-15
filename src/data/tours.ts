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
      "Drive through the dunes where the Namib meets the Atlantic. A 4x4 tour to one of the most isolated lagoons on Earth, a UNESCO World Heritage Site candidate.",
    longDescription:
      "Where the towering sand dunes of the Namib Desert plunge into the Atlantic Ocean, Sandwich Harbour stands as one of Earth's most dramatic convergence points. Our expert-guided 4x4 expedition traverses the Walvis Bay Lagoon, skirts the pink salt pans, and scales 100-metre dunes to reach this UNESCO World Heritage Site candidate. This is not merely a tour, it is an immersion into one of the planet's most surreal landscapes, where desert and ocean have negotiated an uneasy truce for millennia.",
    duration: "Half Day (~4-5 hours)",
    price: 179,
    priceLabel: "per person",
    category: "4x4 Desert & Coastal Adventure",
    highlights: [
      "Drive through the world's oldest desert where dunes meet the Atlantic",
      "Scale 100-metre sand dunes with expert 4x4 drivers",
      "Visit the Walvis Bay Lagoon, a RAMSAR Wetland of International Importance",
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
    images: ["/images/experiences/client-sandwich-harbour-woman-dunes-ocean.webp", "/images/experiences/client-sandwich-harbour-man-overlook.webp", "/images/experiences/client-sandwich-harbour-woman-arms-up.webp", "/images/experiences/client-sandwich-harbour-dunes-aerial.webp"],
    gallery: [
      { src: "/images/experiences/client-sandwich-harbour-woman-dunes-ocean.webp", alt: "Woman at Sandwich Harbour where dunes meet ocean" },
      { src: "/images/experiences/client-sandwich-harbour-man-overlook.webp", alt: "Man overlooking Sandwich Harbour lagoon" },
      { src: "/images/experiences/client-sandwich-harbour-woman-arms-up.webp", alt: "Woman with arms raised atop Sandwich Harbour dune" },
      { src: "/images/experiences/client-sandwich-harbour-dunes-aerial.webp", alt: "Aerial view of Sandwich Harbour dunes" },
    ],
  },
  {
    slug: "catamaran-dolphin-cruise",
    name: "Atlantic Catamaran Cruise",
    tagline: "Namibia's Marine Big 5: Dolphins, Seals, Whales, Mola Mola & Leatherback Turtles",
    description:
      "Sail the Atlantic aboard a luxury catamaran. Encounter dolphins, seals, whales, and pelicans on Namibia's premier marine experience.",
    longDescription:
      "Set sail from Walvis Bay harbour aboard a luxury catamaran and enter the rich Benguela Current ecosystem. This premier marine safari brings you face-to-face with Namibia's Marine Big 5: playful Heaviside's and bottlenose dolphins, thousands of Cape fur seals, seasonal whale sightings, the mysterious Mola Mola (sunfish), and the rare leatherback turtle. Fresh oysters and sparkling wine are served on board as you glide past Pelican Point, a refined expedition on the Atlantic.",
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
    images: ["/images/experiences/client-catamaran-women-group-harbour.webp", "/images/experiences/client-cape-fur-seals-colony.webp", "/images/experiences/client-swakopmund-jetty-sunset.webp"],
    gallery: [
      { src: "/images/experiences/client-catamaran-women-group-harbour.webp", alt: "Women aboard catamaran at Walvis Bay harbour" },
      { src: "/images/experiences/client-cape-fur-seals-colony.webp", alt: "Cape fur seal colony along the coast" },
      { src: "/images/experiences/client-swakopmund-jetty-sunset.webp", alt: "Swakopmund jetty at sunset" },
    ],
  },
  {
    slug: "spitzkoppe-adventure",
    name: "Spitzkoppe Adventure Drive",
    tagline: "The Matterhorn of Namibia: Ancient Granite, 2000-Year-Old Rock Art & Desert Silence",
    description:
      "Journey to the Matterhorn of Namibia. Discover 2000-year-old Bushman rock art, ancient granite peaks, and desert silence at Spitzkoppe.",
    longDescription:
      "Rising sharply from the desert floor, the Spitzkoppe massif, known as the Matterhorn of Namibia, has drawn explorers and artists for millennia. Our adventure drive takes you through dramatic desert landscapes to discover 2000-year-old Bushman rock art, navigate ancient granite formations, and experience the profound silence of one of Namibia's most spiritually resonant landscapes. This is where geology meets mythology.",
    duration: "Full Day (~8-10 hours)",
    price: 139,
    priceLabel: "per person",
    category: "Desert & Cultural Adventure",
    highlights: [
      "Explore the Matterhorn of Namibia, 700-million-year-old granite",
      "Discover 2000-year-old Bushman rock art",
      "Walk through the rock arch, a natural granite bridge",
      "Experience profound desert silence",
      "Cultural insights from local Damara guides",
    ],
    included: [
      "Professional guide & 4x4 vehicle",
      "Light lunch & refreshments",
      "Park entrance fees",
      "Hotel pick-up & drop-off",
    ],
    images: ["/images/experiences/client-spitzkoppe-rock-arch-man.webp", "/images/experiences/client-spitzkoppe-sunset-man-sitting.webp", "/images/experiences/client-spitzkoppe-lodge-coffee-deck.webp", "/images/experiences/client-spitzkoppe-rock-arch-man.webp"],
    gallery: [
      { src: "/images/experiences/client-spitzkoppe-rock-arch-man.webp", alt: "Man standing beneath Spitzkoppe rock arch" },
      { src: "/images/experiences/client-spitzkoppe-sunset-man-sitting.webp", alt: "Man sitting at Spitzkoppe sunset" },
      { src: "/images/experiences/client-spitzkoppe-lodge-coffee-deck.webp", alt: "Coffee deck at Spitzkoppe lodge" },
      { src: "/images/experiences/client-spitzkoppe-rock-arch-man.webp", alt: "Spitzkoppe granite arch" },
      { src: "/images/experiences/client-spitzkoppe-sunset-man-sitting.webp", alt: "Spitzkoppe sunset" },
    ],
  },
  {
    slug: "skeleton-coast",
    name: "Skeleton Coast Expedition",
    tagline: "Shipwrecks, Seals & the World's Most Haunting Coastline",
    description:
      "Explore shipwrecks and vast seal colonies along the world's most haunting coastline, the Skeleton Coast of Namibia.",
    longDescription:
      "The Skeleton Coast, where the bones of ships and whales litter a shoreline shrouded in perpetual fog. Our expedition navigates this haunting coastline, visiting the remains of shipwrecks that stretch back centuries, vast Cape fur seal colonies at Cape Cross, and the stark beauty of one of Earth's most desolate landscapes. This is nature at its most indifferent, and its most magnificent.",
    duration: "Full Day (~8-10 hours)",
    price: 79,
    priceLabel: "per person",
    category: "Coastal Adventure & Wildlife",
    highlights: [
      "Visit century-old shipwrecks along the coast",
      "Witness the massive Cape Cross seal colony (up to 200,000 seals)",
      "Drive the legendary Skeleton Coast",
      "See the Zeila shipwreck, one of the coast's most photographed",
      "Experience the fog-shrouded coastline",
    ],
    included: [
      "Professional guide & 4x4 vehicle",
      "Light lunch & refreshments",
      "Park entrance fees",
      "Hotel pick-up & drop-off",
    ],
    images: ["/images/experiences/client-skeleton-coast-shipwreck.webp", "/images/experiences/client-cape-fur-seals-colony.webp", "/images/experiences/client-skeleton-coast-shipwreck.webp"],
    gallery: [
      { src: "/images/experiences/client-skeleton-coast-shipwreck.webp", alt: "Shipwreck on the Skeleton Coast" },
      { src: "/images/experiences/client-cape-fur-seals-colony.webp", alt: "Cape fur seal colony at Cape Cross" },
      { src: "/images/experiences/client-skeleton-coast-shipwreck.webp", alt: "Coastal fog and shipwreck remains" },
      { src: "/images/experiences/client-skeleton-coast-shipwreck.webp", alt: "Desert coastline" },
      { src: "/images/experiences/client-skeleton-coast-shipwreck.webp", alt: "Zeila shipwreck" },
    ],
  },
  {
    slug: "moon-valley-welwitschia",
    name: "Moon Valley & Welwitschia Plains",
    tagline: "500 Million Years of Desert History in a Single Day",
    description:
      "Walk through Moon Valley's otherworldly landscape and encounter the ancient Welwitschia mirabilis, a living fossil over 2,000 years old.",
    longDescription:
      "The Moon Valley landscape, so named for its extraterrestrial appearance, is the result of 500 million years of geological erosion. Our expedition traverses this surreal terrain to reach the Welwitschia Plains, home to the Welwitschia mirabilis: a living fossil that can survive for over 2,000 years in one of Earth's harshest environments. Along the way, discover the Swakop River canyon, the intriguing Liebfrauenhöhle cave, and landscapes that have served as stand-ins for other planets in major motion pictures.",
    duration: "Half Day (~4-5 hours)",
    price: 169,
    priceLabel: "per person",
    category: "Desert Geology & Natural Wonders",
    highlights: [
      "Walk through Moon Valley's 500-million-year-old landscape",
      "See the 2,000-year-old Welwitschia mirabilis, a living fossil",
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
    images: ["/images/experiences/client-moon-valley-sunset-group.webp", "/images/experiences/client-desert-dinner-sunset-women.webp", "/images/experiences/client-moon-valley-sunset-group.webp"],
    gallery: [
      { src: "/images/experiences/client-moon-valley-sunset-group.webp", alt: "Group watching sunset in Moon Valley" },
      { src: "/images/experiences/client-desert-dinner-sunset-women.webp", alt: "Desert dinner at sunset" },
      { src: "/images/experiences/client-moon-valley-sunset-group.webp", alt: "Desert canyon at golden hour" },
      { src: "/images/experiences/client-moon-valley-sunset-group.webp", alt: "Rock formations" },
      { src: "/images/experiences/client-desert-dinner-sunset-women.webp", alt: "Geological layers at sunset" },
    ],
  },
  {
    slug: "swakopmund-town-tour",
    name: "Swakopmund Heritage & Town Tour",
    tagline: "German Colonial Architecture Meets Coastal Charm in Namibia's Adventure Capital",
    description:
      "Discover Swakopmund's German colonial heritage, vibrant culture, and coastal charm on this guided town tour.",
    longDescription:
      "Swakopmund, Namibia's adventure capital, is a town where German colonial architecture meets Atlantic coastal charm. Our heritage tour reveals the stories behind the ornate Jugendstil buildings, the historic Mole seawall, and the iconic Jetty. From the bustling craft markets to the serene lighthouse, this tour provides an intimate portrait of a town that has been a coastal sanctuary since 1892.",
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
    images: ["/images/experiences/client-swakopmund-jetty-sunset.webp", "/images/experiences/client-fat-bike-dunes-group.webp"],
    gallery: [
      { src: "/images/experiences/client-swakopmund-jetty-sunset.webp", alt: "Swakopmund jetty at sunset" },
      { src: "/images/experiences/client-fat-bike-dunes-group.webp", alt: "Fat bike tour near Swakopmund dunes" },
    ],
  },
  {
    slug: "classic-namibia-safari",
    name: "Classic Namibia, The Full Journey",
    tagline: "From Walvis Bay to Etosha, Namibia's Best in One Safari",
    description:
      "Experience Namibia's greatest destinations in one epic multi-day safari, from the coast to Etosha, Sossusvlei to Damaraland.",
    longDescription:
      "Our signature multi-day safari covers Namibia's best-known destinations in one trip. From the coastal dunes of Walvis Bay and Sandwich Harbour to the red dunes of Sossusvlei, the ancient rock art of Damaraland, and the wildlife of Etosha, this is Namibia done properly. Every detail is handled: accommodation, expert guides, and transport, so you can focus on the experience.",
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
    images: ["/images/experiences/client-etosha-elephant-zebra-waterhole.webp", "/images/experiences/client-deadvlei-woman-white-dress.webp", "/images/experiences/client-sossusvlei-dune-ridge-group.webp"],
    gallery: [
      { src: "/images/experiences/client-etosha-elephant-zebra-waterhole.webp", alt: "Elephant and zebra at Etosha waterhole" },
      { src: "/images/experiences/client-deadvlei-woman-white-dress.webp", alt: "Woman in white dress at Deadvlei" },
      { src: "/images/experiences/client-sossusvlei-dune-ridge-group.webp", alt: "Group on Sossusvlei dune ridge" },
      { src: "/images/experiences/client-etosha-lodge-exterior-sunset.webp", alt: "Etosha lodge at sunset" },
      { src: "/images/experiences/client-lodge-firepit-sunset.webp", alt: "Luxury lodge firepit at sunset" },
    ],
  },
  {
    slug: "sandwich-harbour-catamaran-combo",
    name: "Ultimate Walvis Bay Day, Catamaran + Sandwich Harbour",
    tagline: "Two Unmissable Experiences, One Day: Atlantic and Desert Combined",
    description:
      "The ultimate Walvis Bay day: a morning catamaran cruise followed by an afternoon Sandwich Harbour 4x4 expedition.",
    longDescription:
      "For those who refuse to choose, our Ultimate Walvis Bay Day combines two of Namibia's most celebrated experiences into one day. Begin with a morning catamaran cruise (dolphins, seals, oysters, and the Atlantic breeze) before transitioning to an afternoon 4x4 expedition to Sandwich Harbour, where the world's oldest desert meets the ocean. A light lunch connects the two experiences, and by sunset you'll have seen Walvis Bay from both its perspectives: the sea and the sand.",
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
    images: ["/images/experiences/client-catamaran-women-group-harbour.webp", "/images/experiences/client-sandwich-harbour-woman-dunes-ocean.webp"],
    gallery: [
      { src: "/images/experiences/client-catamaran-women-group-harbour.webp", alt: "Catamaran cruise morning" },
      { src: "/images/experiences/client-sandwich-harbour-woman-dunes-ocean.webp", alt: "Sandwich Harbour afternoon" },
    ],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
