"use client";

import { BadgeCheck, House, LucideIcon, Star } from "lucide-react";
import React from "react";

import { useTheme } from "next-themes";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";
import MinimalCard, {
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";

const featuresData = [
  {
    title: "Wide Range of Properties",
    description:
      "Explore a diverse selection of properties to find your optimal match.",
    icon: House,
    color: "text-blue-500",
    src: "/houses.svg",
  },
  {
    title: "Verified Listings",
    description:
      "Find trustworthy and verified rental listings to ensure a hassle-free experience.",
    icon: BadgeCheck,
    color: "text-green-500",
    src: "/verify.svg",
  },
  {
    title: "Browse Rental Listings with Ease",
    description:
      "Get access to user reviews and ratings for a better understanding of rental options.",
    icon: Star,
    color: "text-yellow-500",
    src: "/reviews.svg",
  },
];

const Features = () => {
  return (
    <section className="px-4 md:px-10 py-24 bg-background">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
        Why Choose Casa?
      </h2>
      <p className="text-base sm:text-lg text-center mb-10 max-w-md mx-auto">
        We offer a range of features to make your property search easier and
        more efficient
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
        {featuresData.map((feature, index) => (
          <FeaturesCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

const FeaturesCard = ({
  title,
  description,
  icon: Icon,
  color,
  src,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  src: string;
}) => {
  return (
    <MinimalCard className="m-2 w-[460px] ">
      <MinimalCardImage className="h-[320px]" src={src} alt={title} />
      <MinimalCardTitle>{title}</MinimalCardTitle>
      <MinimalCardDescription className="pt-2">
        {description}
      </MinimalCardDescription>
    </MinimalCard>
  );
};

export default Features;
