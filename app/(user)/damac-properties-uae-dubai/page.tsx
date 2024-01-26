import Image from "next/image";
import Link from "next/link";
import { client } from "@lib/sanityClient";
import { groq } from "next-sanity";
import { Property } from "@typing";

export const revalidate = 60;
const query = groq`*[_type == "properties" && references(*[_type == "developer" && title == "Damac Properties"]._id)] | order(_createdAt desc) {
  _id,
  title,
  slug,
  "image": image[].asset->url,
  alt,
  category[]->,
  developer->,
  propertyType,
  location,
  beds,
  bath,
  furnishingPreferences,
  amenities,
  area,
  price,
  isOffPlan,
  isFeatured,
  body
}`;

export default async function DamacProperties() {
  const properties = await client.fetch(query);
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="pb-16 sm:pb-12 text-2xl font-bold text-center tracking-tight">
          Damac Properties
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {properties.map((property: Property) => (
            <div
              key={property._id}
              className="group relative border shadow-inner rounded-md pb-4"
            >
              <div className="relative aspect-h-1 aspect-w-1 w-full h-56 md:h-48 rounded-t-md overflow-hidden lg:aspect-none group-hover:opacity-75">
                <Image
                  src={property.image && property.image[0]}
                  alt={property.alt}
                  fill
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 mx-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-600 dark:text-gray-300">
                    <Link
                      href={`/featured-properties-uae-dubai/${property.slug.current}`}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {property.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {property.location}
                  </p>
                </div>
                <p className="text-sm font-medium">AED {property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
