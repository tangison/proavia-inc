import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ProAvia | Premium Namibian Travel & Tours in Walvis Bay",
  description:
    "Learn about ProAvia Travel & Tours, a premium, female-owned Namibian company providing airport transfers, 4x4 tours, car hire, and luxury residential accommodation.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
