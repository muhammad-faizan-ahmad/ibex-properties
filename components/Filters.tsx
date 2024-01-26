"use client";

import { SlidersHorizontalIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@components/ui/sheet";
import Searchbar from "./Searchbar";

const SHEET_SIDES = ["top"] as const;

export function Filters() {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <SlidersHorizontalIcon className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent side={side}>
            <Searchbar />
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
