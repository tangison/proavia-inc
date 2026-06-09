import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Airport Transfers | ProAvia Travel & Tours",
  description: "Sanctuary-to-Sanctuary logistics. Premium, private airport transfers in Walvis Bay, Swakopmund, and Windhoek, Namibia. Available 24/7.",
};

export default function TransfersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
