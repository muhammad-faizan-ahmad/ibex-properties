import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibex Properties | Damac Properties | UAE Dubai",
  description:
    "Find your dream home in Dubai with Ibex Properties. Discover exclusive properties by Damac Properties in the vibrant UAE Dubai real estate market.",
};

export default function DamacPropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
