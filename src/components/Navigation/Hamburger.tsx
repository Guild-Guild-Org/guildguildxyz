"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Deep Dive", path: "/deep" },
  ];

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className="relative z-50 w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-5 h-5 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-0.5 bg-black dark:bg-white my-1 transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-black dark:bg-white transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </div>
      </button>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}>
          <div className="absolute right-0 top-0 h-screen w-64 bg-black p-6 pt-16">
            <nav>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-white ${pathname === item.path ? 'font-bold' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
