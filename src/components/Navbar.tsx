"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1D35]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        {/* Nigerian stripe on Navbar (When scrolled) */}
        <div
          className={`absolute left-2 md:left-10 top-0 bottom-0 w-2 flex flex-col pointer-events-none transition-opacity duration-300 ${
            scrolled ? "opacity-70" : "opacity-0"
          }`}
        >
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
            <p className="hidden md:block text-[#D4A855] text-[9px] tracking-[0.25em] uppercase font-medium max-w-[140px] leading-tight">
              Because even protectors need help
            </p>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:w-0 after:bg-[#D4A855] after:transition-all after:duration-200 hover:after:w-full ${
                  pathname === l.href
                    ? "text-white after:w-full"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 border border-[#BF8C3A] text-[#D4A855] hover:bg-[#BF8C3A] hover:text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-200"
          >
            Support TGK
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden h-11 w-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white transition-all duration-200 hover:bg-white/10"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-[60] bg-black/45 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Menu */}
      <aside
        className={`lg:hidden fixed top-0 right-0 z-[70] h-screen w-full max-w-sm transform-gpu will-change-transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full border-l border-white/10 bg-[#081728] shadow-[-12px_0_30px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* Soft background accents */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,168,85,0.14),transparent_32%)] pointer-events-none" />

          {/* Nigerian stripe */}
          <div className="absolute top-0 left-0 h-full w-[5px] flex flex-col">
            <div className="flex-1 bg-[#008751]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#008751]" />
          </div>

          <div className="relative z-10 flex h-full flex-col px-8 pt-6 pb-8">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4A855]/80 mb-2">
                  Navigation
                </p>
                <h2 className="text-white text-2xl font-semibold leading-tight">
                  Menu
                </h2>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-11 w-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white transition-all duration-200 hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="mt-10 flex flex-col">
              {links.map((l, i) => {
                const active = pathname === l.href;

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group border-b border-white/10 py-4 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-lg font-medium transition-colors duration-200 ${
                          active
                            ? "text-[#D4A855]"
                            : "text-white/80 group-hover:text-white"
                        }`}
                      >
                        {l.label}
                      </span>

                      <span
                        className={`text-xs tracking-[0.25em] uppercase transition-colors duration-200 ${
                          active
                            ? "text-[#D4A855]"
                            : "text-white/30 group-hover:text-[#D4A855]"
                        }`}
                      >
                        0{i + 1}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="mt-auto rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4A855]/75 mb-2">
                Support the mission
              </p>
              <p className="text-sm leading-6 text-white/75 mb-5">
                Help us stand for those who serve and protect society.
              </p>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#BF8C3A] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#d19a44]"
              >
                Support TGK
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}