"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",     href: "/home" },
  { label: "About",    href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact",   href: "/impact" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isHome = pathname === "/home";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B1D35]/95 backdrop-blur-xl shadow-xl py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      {/* Nigerian stripe on Navbar (When scrolled) */}
      <div className={`absolute left-2 md:left-10 top-0 bottom-0 w-2 flex flex-col pointer-events-none transition-opacity duration-500 ${scrolled ? "opacity-70" : "opacity-0"}`}>
        <div className="flex-1 bg-[#008751]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#008751]" />
      </div>

      <div className="max-w-7xl mx-auto pl-10 pr-5 md:px-16 flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-3">
          <img 
            src="/logo-remove-bg.png" 
            alt="TGK Logo" 
            className="h-10 md:h-14 w-auto object-contain" 
          />
          <p className="hidden md:block text-[#D4A855] text-[9px] tracking-[0.25em] uppercase font-medium max-w-[140px] leading-tight">Because even protectors need help</p>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium transition-colors ${
                pathname === l.href ? "text-white active" : "text-white/65 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 border border-[#BF8C3A] text-[#D4A855] hover:bg-[#BF8C3A] hover:text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300"
        >
          Support TGK
        </Link>


        {/* Mobile */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-[#0B1D35] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium transition-colors ${
                pathname === l.href ? "text-[#D4A855]" : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 bg-[#BF8C3A] text-white text-sm font-semibold px-5 py-3 rounded-full text-center">
            Support TGK
          </Link>
        </div>
      </div>
    </header>
  );
}