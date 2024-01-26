import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibex Properties | Featured Properties | UAE Dubai",
  description:
    "Find your dream home in Dubai with Ibex Properties. Discover featured properties in the vibrant UAE Dubai real estate market.",
};

export default function FeaturedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
