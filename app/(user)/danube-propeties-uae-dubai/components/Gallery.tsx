"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className="max-w-2xl md:max-w-7xl mx-auto grid gap-4 md:grid-cols-3">
      <div className="md:col-span-2 relative h-[300px] md:h-[480px] w-full rounded-md overflow-hidden mb-4 md:mb-0">
        <Image src={images[index]} alt="" fill objectFit="cover" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative h-[180px] md:h-[240px] w-full rounded-md overflow-hidden"
          >
            <Image
              src={img}
              alt=""
              fill
              className={`border ${
                i === index
                  ? "border-2 border-gray-600 dark:border-gray-300"
                  : "border-none"
              } object-cover cursor-pointer transition duration-300 ease-in-out`}
              onMouseEnter={() => setIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
