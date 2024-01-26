import Image from "next/image";
import AziziDevelopments from "@images/azizi-developments.png";
import Damac from "@images/damac.png";
import DanubeProperties from "@images/danube-properties.png";
import Riviera from "@images/riviera.png";
import SobhaRealty from "@images/sobha-realty.png";
import Link from "next/link";

export default function LogoClouds() {
  return (
    <div className="pt-16 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="pb-16 sm:pb-24 text-center text-lg font-semibold leading-8">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Link href="/azizi-properties-uae-dubai">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={AziziDevelopments}
              alt="Azizi Developments"
              width={500}
              height={150}
            />
          </Link>
          <Link href="/damac-properties-uae-dubai">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Damac}
              alt="Damac"
              width={500}
              height={150}
            />
          </Link>
          <Link href="/danube-propeties-uae-dubai">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={DanubeProperties}
              alt="Danube Properties"
              width={500}
              height={150}
            />
          </Link>
          <Link href="/riviera-properties-uae-dubai">
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={Riviera}
              alt="Riviera"
              width={500}
              height={150}
            />
          </Link>
          <Link href="/sobha-realty-properties-uae-dubai">
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={SobhaRealty}
              alt="Sobha Realty"
              width={500}
              height={150}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
