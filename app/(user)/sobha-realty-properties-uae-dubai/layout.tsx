import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibex Properties | Sobha Realty | UAE Dubai",
  description:
    "Find your dream home in Dubai with Ibex Properties. Discover exclusive properties by Sobha Realty in the vibrant UAE Dubai real estate market.",
};

export default function SobhaRealtyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
