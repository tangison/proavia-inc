import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4x4 Car Hire Namibia | ProAvia Travel & Tours",
  description: "Unrestricted freedom. Hire a 4x4 or sedan from ProAvia in Walvis Bay or Windhoek with unlimited kilometres to explore Namibia at your own pace.",
};

export default function CarHireLayout({ children }: { children: React.ReactNode }) {
  return children;
}
