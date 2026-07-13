# ProAvia Travel & Tours | Namibia, done right.

Production website for ProAvia Travel & Tours, a Namibian travel company offering premium transfers, curated coastal tours, bespoke car hire, and luxury accommodation in Walvis Bay. Built and maintained by [Tangison Studio](https://tangison.com).

**Live site:** [proaviainc.com](https://proaviainc.com)

---

## Tech Stack

- **Next.js 15**, App Router, static generation, server components
- **TypeScript 5**, full type safety across the codebase
- **Tailwind CSS 4**, utility-first styling
- **shadcn/ui**, accessible component library on Radix UI
- **Lucide React**, icon library

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home
│   ├── about/              # About page
│   ├── accommodation/      # Accommodation page
│   ├── booking/            # Booking form
│   ├── contact/            # Contact page
│   ├── gallery/            # Image gallery
│   ├── insights/           # Blog / insights index
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── services/
│   │   ├── car-hire/       # Car hire page
│   │   ├── tours/          # Tour index + [slug] detail pages
│   │   └── transfers/      # Transfers page
│   ├── api/                # API routes
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Search engine directives
├── components/
│   ├── proavia/            # Brand components (Navigation, Footer, PageHeader, ScrollToTop)
│   └── ui/                 # shadcn/ui primitives (Input, Label, Select, Textarea)
├── data/
│   └── tours.ts            # Tour data (8 signature tours)
├── hooks/
│   └── use-reveal.ts       # Intersection Observer scroll-reveal hook
└── lib/
    ├── constants/
    │   └── images.ts       # Centralised image path constants
    └── utils.ts            # cn() utility
```

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Deployment

This project is deployed on [Vercel](https://vercel.com) and auto-deploys from the `main` branch.

Production domain: [proaviainc.com](https://proaviainc.com)

---

## Ownership

- **Client:** ProAvia Travel & Tours
- **Development & Maintenance:** [Tangison Studio](https://tangison.com)

---

<!-- Tangison Studio, tangison.com -->
