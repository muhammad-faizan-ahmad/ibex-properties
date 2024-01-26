import Image from "next/image";
import Link from "next/link";
import HomePageImage from "@images/hero.gif";
import Team from "@components/Team";
import LogoClouds from "@components/LogoClouds";
import { client } from "@lib/sanityClient";
import FeaturedPropertiesList from "@components/FeaturedPropertiesList";
import { groq } from "next-sanity";

const query = groq`*[_type == "properties" && isFeatured == true] | order(_createdAt desc) [0...3] {
  _id,
  title,
  slug,
  "image": image[].asset->url,
  alt,
  category[]->,
  developerd->,
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

export const revalidate = 60;

export default async function HomePage() {
  const properties = await client.fetch(query);
  return (
    <main>
      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8080] to-[#ff5454] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(50% 0%, 100% 35%, 100% 100%, 0 100%, 0 35%)",
            }}
          />
        </div>
        <div className="pt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold -tracking-tight sm:text-6xl">
                Explore Real Estate Globally!
              </h1>
              <p>
                Find your dream property anywhere in the world.{" "}
                <span className="text-red-600 dark:text-red-500">
                  Let Ibex Properties assist you.
                </span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/featured-properties-uae-dubai"
                  className="rounded-md bg-red-600 hover:bg-red-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Featured Properties
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center space-x-2 text-md font-semibold leading-6 text-gray-900 dark:text-gray-300"
                >
                  Read More...
                </Link>
              </div>
            </div>

            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl">
                <Image
                  unoptimized
                  src={HomePageImage}
                  alt=""
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        ></div>
      </div>
      <FeaturedPropertiesList properties={properties} />
      <LogoClouds />
      <Team />
    </main>
  );
}
