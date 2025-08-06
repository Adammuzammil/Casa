import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Buy", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" className="">
            <div className="flex items-center gap-2">
              <Image src="/logo2.svg" alt="Logo" width={28} height={28} />
              <span>CASA</span>
            </div>
          </Link>
        </div>

        <p className="text-primary-200 hidden md:block">
          Discover your perfect rental apartment with our advanced search
        </p>

        {/* Menus */}
        <nav>
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
