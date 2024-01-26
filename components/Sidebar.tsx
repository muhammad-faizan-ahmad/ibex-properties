"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SHEET_SIDES = ["right"] as const;

export function Sidebar() {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <MenuIcon className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent side={side}>
            <div className="flex flex-col">
              <Link href="/buy-properties-uae">Buy</Link>
              <Link href="/rent-properties-uae">Rent</Link>
              <Link href="/list-properties-uae">List Properties</Link>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
