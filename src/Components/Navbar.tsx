"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect, useState } from "react";

function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M6 18L18 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const { isAuthenticated, logout, myInfo } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-6 py-3 shadow-md ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg sm:text-xl font-bold tracking-wide">
          MyPortfolio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/blogs" className="hover:text-gray-300 transition">
            Blogs
          </Link>
          <Link href="/dashboard" className="hover:text-gray-300 transition">
            Dashboard
          </Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 transition"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="hover:text-gray-300 transition">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        aria-hidden={!menuOpen}
        className={`md:hidden bg-gray-800 w-full origin-top transform transition-all duration-200 ease-out ${
          menuOpen
            ? "max-h-[500px] opacity-100 mt-3 py-4 px-4 rounded-b-lg"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block py-2"
          >
            About
          </Link>
          <Link
            href="/blogs"
            onClick={() => setMenuOpen(false)}
            className="block py-2"
          >
            Blogs
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="block py-2"
          >
            Dashboard
          </Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 text-left py-2"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block py-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
