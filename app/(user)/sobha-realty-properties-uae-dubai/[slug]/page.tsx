import { client } from "@lib/sanityClient";
import { Properties } from "@typing";
import Gallery from "../components/Gallery";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@components/RichTextComponent";

import {
  BuildingIcon,
  ScanIcon,
  MapPinIcon,
  BedSingleIcon,
  BathIcon,
  ArmchairIcon,
} from "lucide-react";
import { MdCall, MdWhatsapp, MdEmail } from "react-icons/md";
import Link from "next/link";
import { groq } from "next-sanity";
import { Separator } from "@components/ui/separator";

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
    *[_type=="properties" && references(*[_type == "developer" && title == "Sobha Realty"]._id)]{
      slug
    }`;

  const slugs: Properties[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function SobhaRealtyProperty({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = groq`
  *[_type == "properties" && references(*[_type == "developer" && title == "Sobha Realty"]._id) && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
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

  const property: Properties = await client.fetch(query, { slug });

  return (
    <div className="pt-6">
      {/* PROPERTY GALLERY */}
      <Gallery images={property.image} />

      {/* PROPERTY FEATURES */}
      <div className="pt-12 grid grid-cols-2 md:grid-cols-3 place-items-center">
        {[
          { icon: <BuildingIcon />, label: property.propertyType },
          { icon: <ScanIcon />, label: `${property.area} sqft.` },
          { icon: <MapPinIcon />, label: property.location },
          { icon: <BedSingleIcon />, label: `${property.beds} Beds` },
          { icon: <BathIcon />, label: `${property.bath} Baths` },
          { icon: <ArmchairIcon />, label: property.furnishingPreferences },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg flex flex-col items-center justify-center text-center"
          >
            {feature.icon}
            <h5 className="mt-2 text-sm font-semibold">{feature.label}</h5>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 place-content-between lg:gap-x-8 px-4 sm:px-6 lg:px-8 lg:pt-6">
          {/* PROPERTY TITLE, DETAILS AND AMENITIES */}
          {/* PROPERTY TITLE */}
          <div className="col-span-2 lg:pr-8 lg:border-r border-gray-600 dark:border-gray-300">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {property.title}
              </h1>
            </div>
            {/* PROPERTY DETAILS */}
            <div className="mt-8 text-justify">
              <PortableText
                value={property.body}
                components={RichTextComponents}
              />
            </div>

            {/* PROPERTY AMENITIES */}
            <div>
              <h2 className="mt-8 text-lg font-semibold mb-2">Amenities</h2>
              <ul className="list-disc list-inside">
                {property.amenities.map((amenity) => (
                  <li key={amenity._key}>{amenity.amenity}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 max-h-fit w-full max-w-xl mx-auto ring-2 ring-gray-600 dark:ring-gray-300 shadow-lg p-6 rounded-lg">
            {/* PROPERTY PRICE */}
            <h2 className="text-2xl font-bold mb-4 text-center">Price</h2>
            <p className="text-3xl text-center text-red-600 font-bold">
              AED {property.price}
            </p>

            <Separator className="my-4" />

            {/* PROPERTY CONTACT DETAILS */}
            <div className="flex items-center justify-center space-x-6">
              <div>
                <Link href="tel:971566840818">
                  <MdCall className="text-3xl text-red-600 hover:text-red-500" />
                </Link>
              </div>

              <div>
                <Link href="https://api.whatsapp.com/send?phone=971566840818">
                  <MdWhatsapp className="text-3xl text-green-500 hover:text-green-400" />
                </Link>
              </div>

              <div>
                <Link href="mailto:zohaibgg222@gmail.com">
                  <MdEmail className="text-3xl text-blue-500 hover:text-blue-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
