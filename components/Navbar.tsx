import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, Lock } from "lucide-react";

const navItems = [
  { name: "Home", href: "/apartments" },
  { name: "Listing", href: "/apartments" },
  { name: "Property", href: "/apartments" },
  { name: "Pages", href: "/apartments" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 bg-white">
      <div className="relative flex items-center justify-center h-full px-6 lg:px-10">
        {/* Left: Logo */}
        <div className="absolute left-6 lg:left-10 flex items-center gap-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-black rounded-full p-1">
              <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            </div>
            <span className="text-base font-semibold tracking-tight">Casa</span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 text-sm font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="absolute right-6 lg:right-10 flex items-center gap-4">
          <Link
            href="/signin"
            className="flex items-center gap-1 text-sm font-semibold"
          >
            <Lock className="size-4" />
            Login / Sign Up
          </Link>

          <Button className="rounded-full flex items-center gap-1">
            Add Listing
            <ArrowUpRight className="size-4" />
          </Button>

          <div className="rounded-full border border-black p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
