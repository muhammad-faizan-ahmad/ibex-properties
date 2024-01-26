import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibex Properties | Buy Properties | UAE Dubai",
  description:
    "Find your dream home in Dubai with Ibex Properties. Discover exclusive properties in the vibrant UAE Dubai real estate market.",
};

export default function BuyPropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
