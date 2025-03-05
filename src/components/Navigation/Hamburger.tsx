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
        className="relative z-50 w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center focus:outline-none"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-5 h-5 flex flex-col justify-center items-center">
          <span 
            className={`block w-5 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-200 ${
              isOpen ? &rsquo;absolute rotate-45&rsquo; : &rsquo;&rsquo;
            }`}
          />
          <span 
            className={`block w-5 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-200 ${
              isOpen ? &rsquo;opacity-0&rsquo; : &rsquo;my-1&rsquo;
            }`}
          />
          <span 
            className={`block w-5 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-200 ${
              isOpen ? &rsquo;absolute -rotate-45&rsquo; : &rsquo;&rsquo;
            }`}
          />
        </div>
      </button>

      {/* Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200 ${
          isOpen ? &rsquo;opacity-100&rsquo; : &rsquo;opacity-0 pointer-events-none&rsquo;
        }`}
        onClick={closeMenu}
      />

      {/* Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-64 bg-black z-40 transform transition-transform duration-200 ease-in-out ${
          isOpen ? &rsquo;translate-x-0&rsquo; : &rsquo;translate-x-full&rsquo;
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
                        ? &rsquo;font-bold border-b border-white&rsquo; 
                        : &rsquo;hover:pl-2&rsquo;
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
