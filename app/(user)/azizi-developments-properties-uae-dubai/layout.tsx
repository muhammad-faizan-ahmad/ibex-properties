import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibex Properties | Azizi Devlopments | UAE Dubai",
  description:
    "Find your dream home in Dubai with Ibex Properties. Discover exclusive properties by Azizi Developments in the vibrant UAE Dubai real estate market.",
};

export default function AziziDevelopmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
