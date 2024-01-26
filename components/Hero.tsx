import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white text-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Easy way to find a perfect property
            </h1>
            <p className="text-lg mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="flex justify-end">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src=""
                  alt="Property 1"
                  className="rounded-lg shadow-lg object-contain"
                  fill
                />
                <Image
                  src=""
                  alt="Property 2"
                  className="rounded-lg shadow-lg object-contain"
                  fill
                />
                <Image
                  src=""
                  alt="Property 3"
                  className="rounded-lg shadow-lg object-contain"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Image
            src=""
            alt="City landscape"
            className="object-contain max-w-full h-auto"
            fill
          />
        </div>
      </div>
    </section>
  );
}
