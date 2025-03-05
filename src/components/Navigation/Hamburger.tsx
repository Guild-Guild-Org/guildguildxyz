"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Deep Dive", path: "/deep" },
  ];

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className="relative z-50 w-10 h-10 bg-gray-200 dark:bg-black rounded-full flex items-center justify-center focus:outline-none border dark:border-white"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-5 h-5 flex flex-col justify-center items-center">
          <span 
            className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-200 ${
              isOpen ? 'absolute rotate-45' : ''
            }`}
          />
          <span 
            className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-200 ${
              isOpen ? 'opacity-0' : 'my-1'
            }`}
          />
          <span 
            className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-200 ${
              isOpen ? 'absolute -rotate-45' : ''
            }`}
          />
        </div>
      </button>

      {/* Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-64 bg-black z-40 transform transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 mt-10">
          <nav>
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    onClick={closeMenu}
                    className={`block py-2 text-lg text-white transition-all ${
                      pathname === item.path 
                        ? 'font-bold border-b border-white' 
                        : 'hover:pl-2'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
