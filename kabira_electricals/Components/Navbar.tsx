"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between">
        
        {/* LOGO (LEFT) */}
        <div id="logo">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo_ke_transparent.svg"
              alt="Kabira Electricals Logo"
              width={140}
              height={32}
              style={{ width: "auto", height: "28px" }}
              className="drop-shadow-md group-hover:scale-105 transition-transform sm:h-[36px]"
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
            className="md:hidden p-1.5 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

      </div>

      {/* POLISHED MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl z-40 transition-all px-5 py-4 space-y-4">
          {/* Brand header on Top Left inside Drawer */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
            <span className="font-bold text-xs text-white tracking-wide uppercase">
              Kabira <span className="text-amber-500">Electricals</span>
            </span>
          </div>

          {/* Compact Nav Links & CTA */}
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setmobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors uppercase tracking-wide py-1"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 w-full">
              <Link
                href="#contact"
                onClick={() => setmobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wide shadow-md transition-all"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;