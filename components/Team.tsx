import Image from "next/image";

const people = [
  {
    name: "Muhammad Zohaib Iqbal",
    role: "Client Manager",
    imageUrl: "/zohaib.png",
  },
  {
    name: "Hafiz Khaleeq",
    role: "Client Manager",
    imageUrl: "/hafiz-khaleeq.png",
  },
  {
    name: "Ali Irtaza",
    role: "Client Manager",
    imageUrl: "/ali-irtaza.png",
  },
  {
    name: "Tayyab Mehboob",
    role: "Client Manager",
    imageUrl: "/tayyab.png",
  },
];

export default function Team() {
  return (
    <div className="pt-16 sm:pt-24">
      <div className="mx-auto grid max-w-7xl px-4 sm:px-6 lg:px-8 gap-x-8 gap-y-20 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8">
            A dedicated group of professionals committed to turning your
            property dreams into reality. With a wealth of experience, market
            insight, and personalized service, our team is here to guide you
            through every step of your real estate journey.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt="Client Manager"
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-red-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
