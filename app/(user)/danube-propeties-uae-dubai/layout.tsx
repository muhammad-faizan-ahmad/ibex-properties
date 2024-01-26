import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibex Properties | Danube Properties | UAE Dubai",
  description:
    "Find your dream home in Dubai with Ibex Properties. Discover exclusive properties by Danube Properties in the vibrant UAE Dubai real estate market.",
};

export default function DanubePropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
