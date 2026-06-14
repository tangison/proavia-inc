import type { MetadataRoute } from "next";
import { tours } from "@/data/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://proaviainc.com";

  const staticPages = [
    "",
    "/about",
    "/accommodation",
    "/audit",
    "/booking",
    "/contact",
    "/gallery",
    "/insights",
    "/privacy",
    "/terms",
    "/services/transfers",
    "/services/tours",
    "/services/car-hire",
    "/services/flight-ticketing",
    "/services/visa-handling",
    "/services/airport-assistance",
    "/services/shuttles",
  ];

  const tourPages = tours.map((tour) => `/services/tours/${tour.slug}`);

  return [...staticPages, ...tourPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/services/tours/") ? 0.8 : 0.6,
  }));
}
