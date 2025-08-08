import React from "react";
import HeroSection from "./_components/HeroSection";
import Features from "./_components/Features";
import Listings from "./_components/Listings";
import PopularPlaces from "./_components/PopularPlaces";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Listings />
      <PopularPlaces />
    </div>
  );
};

export default LandingPage;
