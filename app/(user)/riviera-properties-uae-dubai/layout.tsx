import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibex Properties | Riviera Properties | UAE Dubai",
  description:
    "Find your dream home in Dubai with Ibex Properties. Discover exclusive properties by Riviera Properties in the vibrant UAE Dubai real estate market.",
};

export default function RivieraPropertiesLayout({
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
