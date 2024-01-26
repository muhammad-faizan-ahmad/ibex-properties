import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="pt-16 sm:pt-24">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          <Link href="/featured-properties-uae-dubai">Featured</Link>
          <Link href="/buy-properties-uae-dubai">Buy</Link>
          <Link href="/rent-properties-uae-dubai">Rent</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="my-8 flex justify-center space-x-6">
          <Link
            href="https://api.whatsapp.com/send?phone=971566840818"
            target="_blank"
          >
            <FaWhatsapp className="h-6 w-6 text-red-600 hover:text-red-500" />
          </Link>
          <Link href="" target="_blank">
            <FaInstagram className="h-6 w-6 text-red-600 hover:text-red-500" />
          </Link>
          <Link href="" target="_blank">
            <FaYoutube className="h-6 w-6 text-red-600 hover:text-red-500" />
          </Link>
          <Link href="" target="_blank">
            <FaLinkedin className="h-6 w-6 text-red-600 hover:text-red-500" />
          </Link>
        </div>
        <Separator />
        <div className="mt-8 flex justify-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ibex Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
