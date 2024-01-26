import Image from "next/image";
import IbexPropertiesLogo from "@images/IbexPropertiesLogo.png";
import Link from "next/link";
import { Filters } from "./Filters";
import { ModeToggle } from "./ModeToggle";
import { Sidebar } from "./Sidebar";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between p-5">
        <div>
          <Image
            src={IbexPropertiesLogo}
            alt="Ibex Properties Logo"
            priority
            width={50}
            height={50}
          />
        </div>
        <div className="hidden md:inline-flex items-center space-x-4">
          <Link href="/buy-properties-uae">Buy</Link>
          <Link href="/rent-properties-uae-dubai">Rent</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <Filters />
          </div>
          <div>
            <ModeToggle />
          </div>
          <div className="sm:hidden inline-flex">
            <Sidebar />
          </div>
        </div>
      </nav>
    </header>
  );
}
