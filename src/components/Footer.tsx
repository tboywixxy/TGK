import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand — spans 5 cols */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#BF8C3A] flex items-center justify-center text-white font-bold text-sm">
                TGK
              </div>
              <div>
                <p className="font-semibold text-lg leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Guardians&apos; Keeper</p>
                <p className="text-[#D4A855] text-[10px] tracking-[0.3em] uppercase">Nigeria</p>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-7 max-w-xs">
              A registered Nigerian foundation dedicated to supporting and humanizing the Nigerian Police Force — because even protectors need help.
            </p>
            <div className="flex gap-3 mt-7">
              {[
                { Icon: Instagram, href: "https://instagram.com/theguardianskeeperr" },
                { Icon: Twitter,   href: "https://twitter.com/TheeguardiansK" },
                { Icon: Linkedin,  href: "https://linkedin.com/company/the-guardians-keeper" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/50 hover:bg-[#BF8C3A] hover:border-[#BF8C3A] hover:text-white transition-all duration-300">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <p className="text-white text-xs tracking-[0.25em] uppercase font-semibold mb-6">Navigate</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home",     href: "/home" },
                { label: "About Us", href: "/about" },
                { label: "Programs", href: "/programs" },
                { label: "Impact",   href: "/impact" },
                { label: "Contact",  href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/45 hover:text-[#D4A855] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-white text-xs tracking-[0.25em] uppercase font-semibold mb-6">Get in Touch</p>
            <div className="flex flex-col gap-4">
              <a href="mailto:social.theguardians@gmail.com" className="flex items-start gap-3 text-white/45 hover:text-white text-sm transition-colors">
                <Mail size={15} className="text-[#BF8C3A] mt-0.5 flex-shrink-0" />
                social.theguardians@gmail.com
              </a>
              <a href="tel:+2347073579759" className="flex items-center gap-3 text-white/45 hover:text-white text-sm transition-colors">
                <Phone size={15} className="text-[#BF8C3A] flex-shrink-0" />
                +234 707 357 9759
              </a>
              <a href="tel:+2348167827920" className="flex items-center gap-3 text-white/45 hover:text-white text-sm transition-colors">
                <Phone size={15} className="text-[#BF8C3A] flex-shrink-0" />
                +234 816 782 7920
              </a>
            </div>
            <div className="mt-8 p-4 rounded-xl border border-white/10 bg-white/3">
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Registered Body</p>
              <p className="text-white/60 text-xs">CAC Reg: 8997651</p>
              <p className="text-white/60 text-xs mt-0.5">SCUML: RN SC 121405428</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} The Guardian Keepers Foundation for Public Welfare and Care. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">TIN: 33695925-0001</p>
        </div>
      </div>
    </footer>
  );
}