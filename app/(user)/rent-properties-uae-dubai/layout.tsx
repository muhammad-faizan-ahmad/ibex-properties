import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibex Properties | Rent Properties | UAE Dubai",
  description:
    "Find your dream home in Dubai with Ibex Properties. Discover exclusive properties in the vibrant UAE Dubai real estate market.",
};

export default function RentPropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
