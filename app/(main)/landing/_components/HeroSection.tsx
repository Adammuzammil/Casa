import React from "react";
import Image from "next/legacy/image";
import {
  ArrowUpRight,
  CirclePoundSterling,
  House,
  LocateFixed,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  return (
    <section className="pt-24 px-10 pb-12">
      <div className="relative rounded-xl overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 flex items-end justify-between px-6 lg:px-16 py-20 h-[85vh] bg-black/40">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-7xl font-extrabold leading-tight mb-6 font-mono">
              Buy,Rent,& Sell <br /> Property
            </h1>
            <Button className="rounded-full px-6 py-6">
              Explore All Property
              <ArrowUpRight className="size-4" />
            </Button>
          </div>

          {/* Right Form Box */}
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm space-y-4 shadow-lg">
            <h2 className="text-xl font-semibold">
              Find your Best Property <br /> what do you want!
            </h2>

            {/* Location */}
            <div>
              <label className="text-sm text-gray-500">Location</label>
              <div className="relative mt-1">
                <Select>
                  <SelectTrigger className="w-full rounded-full pl-10">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Stockholm, Sweden</SelectItem>
                    <SelectItem value="dark">Helsinki, Finland</SelectItem>
                    <SelectItem value="system">Copenhagen, Denmark</SelectItem>
                  </SelectContent>
                </Select>
                <LocateFixed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4  pointer-events-none" />
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="text-sm text-gray-500">Property Type</label>
              <div className="relative mt-1">
                <Select>
                  <SelectTrigger className="w-full rounded-full pl-10">
                    <SelectValue placeholder="Select Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Apartment</SelectItem>
                    <SelectItem value="dark">House</SelectItem>
                    <SelectItem value="system">Villa</SelectItem>
                  </SelectContent>
                </Select>
                <House className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4  pointer-events-none" />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 rounded-full border text-sm">4 Bed</div>
              <div className="px-3 py-1 rounded-full border text-sm">
                2 Bathroom
              </div>
              <div className="px-3 py-1 rounded-full border text-sm">
                6×7.5 m²
              </div>
            </div>

            {/* Max Price */}
            <div>
              <label className="text-sm text-gray-500">Max Price</label>
              <div className="relative mt-1">
                <CirclePoundSterling className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                <input
                  type="text"
                  defaultValue="590.00 max"
                  className="w-full border rounded-full pl-10 pr-4 py-2 focus:outline-none"
                />
              </div>
            </div>

            <Button className="w-full rounded-full bg-orange-500 hover:bg-orange-600">
              <Search className="mr-2 size-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
