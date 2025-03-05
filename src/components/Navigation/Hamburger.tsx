"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Deep Dive", path: "/deep" },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">

      {/* Hamburger Button */}
      <button
        className="flex flex-col justify-center items-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span 
          className={`block w-5 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform rotate-45 translate-y-1' : ''
          }`}
        ></span>
        <span 
          className={`block w-5 h-0.5 bg-gray-800 dark:bg-gray-200 mt-1 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span 
          className={`block w-5 h-0.5 bg-gray-800 dark:bg-gray-200 mt-1 transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform -rotate-45 -translate-y-1' : ''
          }`}
        ></span>
      </button>

      {/* Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button 
              onClick={closeMenu}
              className="text-white"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    onClick={closeMenu}
                    className={`block py-2 px-4 rounded transition-colors text-white ${
                      pathname === item.path 
                        ? 'font-bold border-b-2 border-white' 
                        : 'hover:bg-gray-900'
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

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
}
