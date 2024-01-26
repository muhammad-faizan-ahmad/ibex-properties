import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Properties } from "@typing";
import Link from "next/link";

type Props = {
  properties: Properties[];
};

export default function FeaturedPropertiesList({ properties }: Props) {
  return (
    <div className="pt-16 sm:pt-24">
      <div className="bg-transparent drop-shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none lg:py-32">
            <h2 className="pb-16 sm:pb-24 text-2xl font-bold text-center">
              Featured Properties
            </h2>

            <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {properties.map((property) => (
                <div
                  key={property.title}
                  className="group relative border shadow-inner rounded-md pb-4"
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-t-md sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image
                      src={property.image && property.image[0]}
                      alt={property.alt}
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 mx-4 text-sm text-gray-600 dark:text-gray-300">
                    <Link
                      href={`/featured-properties-uae-dubai/${property.slug.current}`}
                    >
                      <span className="absolute inset-0" />
                      {property.title}
                    </Link>
                  </h3>
                  <p className="mx-4 text-base font-semibold">
                    AED {property.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 lg:pt-0 flex justify-center">
        <Link href={`/featured-properties-uae-dubai`}>
          <Button>Show All</Button>
        </Link>
      </div>
    </div>
  );
}
