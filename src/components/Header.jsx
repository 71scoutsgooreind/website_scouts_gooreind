// components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_image from "/src/assets/images/algemeen/JEFKELOGO.svg";

export default function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Jefke", href: "/jefke" },
    { name: "Leiding", href: "/leiding" },
    { name: "Groepen", href: "/groepen" },
    { name: "Inschrijven", href: "/inschrijven" },
    { name: "Uniform", href: "/uniform" },
    { name: "Verhuur", href: "/verhuur" },
    { name: "VOSOG", href: "/vosog" },
    { name: "GDPR", href: "/gdpr" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green-50 shadow-md">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={logo_image}
            alt="logo"
            className="w-16 h-16 rounded"
          />
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl m-0">
              Scouts Gooreind
            </h1>
            <small className="text-sm text-gray-500">71ste St. Jozef</small>
          </div>
        </div>
        <nav className="hidden md:flex flex-wrap gap-3 text-sm">
          {navItems.map((n) => (
            <Link
              key={n.name}
              to={n.href}
              className="px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-green-200 hover:text-green-800 transition-colors"
            >
              {n.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((n) => (
            <Link
              key={n.name}
              to={n.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-green-200 hover:text-green-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {n.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
