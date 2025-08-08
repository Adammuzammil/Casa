import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cities = [
  {
    name: "Canada",
    listings: "840",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  },
  {
    name: "USA",
    listings: "1140",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    name: "Australia",
    listings: "950",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  },
  {
    name: "Dubai",
    listings: "570",
    image: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg",
  },
];

const PopularPlaces = () => {
  return (
    <section className="px-4 md:px-10 py-24 bg-background">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">Popular Cities</h1>

        <div className="flex items-center gap-2 border border-black rounded-full md:px-6 md:py-4 p-2">
          <Link href="/all" className="hidden md:block">
            Explore All
          </Link>
          <ArrowUpRight className="" />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center">
        {cities.map((city, index) => (
          <div key={index} className="text-center">
            <div className="w-80 h-0 mx-auto overflow-hidden rounded-full">
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{city.name}</h3>
            <p className="text-gray-500 text-sm">{city.listings} Listing</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPlaces;
