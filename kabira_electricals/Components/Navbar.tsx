"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg transition-all">
      {/* Container Bar matching Hero grid margins */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* LOGO (LEFT) */}
        <div id="logo">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo_ke_transparent.svg"
              alt="Kabira Electricals Logo"
              width={160}
              height={40}
              style={{ width: "auto", height: "36px" }}
              className="drop-shadow-md group-hover:scale-105 transition-transform"
              priority
            />
            <div className="hidden sm:block font-bold text-base sm:text-lg leading-none tracking-tight text-white group-hover:text-amber-400 transition-colors">
              KABIRA <span className="text-amber-500">ELECTRICALS</span>
            </div>
          </Link>
        </div>

        {/* DESKTOP LINKS & MOBILE BUTTON (RIGHT) */}
        <div id="links" className="flex items-center">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-white/10 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Quote Button */}
          <Link
            href="#contact"
            className="hidden md:inline-flex ml-4 px-6 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md hover:scale-105 transform duration-200"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

      </div>

      {/* FULL-WIDTH MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl z-40 transition-all">
          <nav className="flex flex-col items-center py-6 gap-4 font-medium text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setmobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setmobileMenuOpen(false)}
              className="mt-2 px-8 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center shadow-lg transition-all text-sm"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
