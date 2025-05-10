import React from "react";
import { Button } from "@/components/ui/button";

const NavbarMenu = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              JadiJago
            </a>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {NavbarMenu.map((item, index) => (
              <a
                key={index}
                href={`/${item.href}`}
                className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:font-bold transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4 ml-6">
            <Button variant="outline" size="lg" className="px-4">
              Login
            </Button>
            <Button size="lg" className="px-4">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
