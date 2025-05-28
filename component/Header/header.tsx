"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const crumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((crumb, idx, arr) => ({
      label: crumb.charAt(0).toUpperCase() + crumb.slice(1),
      href: "/" + arr.slice(0, idx + 1).join("/"),
    }));

  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition-colors"
        >
          E-Math
        </Link>
        {/* Desktop Breadcrumb */}
        <div className="hidden md:flex items-center text-lg space-x-2">
          <Link href="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="/courses"
            className="hover:text-yellow-300 transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-300 transition-colors"
          >
            Contact
          </Link>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded border border-gray-300 bg-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-1 bg-gray-700 mb-1 rounded"></span>
          <span className="block w-6 h-1 bg-gray-700 mb-1 rounded"></span>
          <span className="block w-6 h-1 bg-gray-700 rounded"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-2 text-lg bg-white rounded shadow p-4">
            <Link
              href="/"
              className="text-blue-700 hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-blue-700 hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/courses"
              className="text-blue-700 hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/contact"
              className="text-blue-700 hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
}
