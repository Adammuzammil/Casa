import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Listings = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 py-24 bg-background">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">Popular Listings</h1>

        <div className="flex items-center gap-2 border border-black rounded-full md:px-6 md:py-4 p-2">
          <Link href="/all" className="hidden md:block">
            Explore All
          </Link>
          <ArrowUpRight className="" />
        </div>
      </div>

      <p className="mt-3 font-normal">
        Explore latest and featured properties for sell,rent & mortgage
      </p>

      {properties.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard property={property} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listings;
