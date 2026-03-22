import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Users, Megaphone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
        <img
          src="/bg-img.jpeg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D35]/80 via-[#0B1D35]/70 to-[#0B1D35]" />

        {/* Nigerian stripe */}
        <div className="absolute left-2 md:left-10 top-0 h-full w-2 flex flex-col z-10 opacity-70">
          <div className="flex-1 bg-[#008751]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#008751]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center pt-32 pb-20 sm:pt-36 sm:pb-24">
          <div className="inline-flex items-center gap-2.5 border border-white/20 bg-white/8 backdrop-blur-sm rounded-full px-5 py-2 mb-10 sm:mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006B42] animate-pulse" />
            <span className="text-white/75 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-medium">
              Registered Nigerian NGO
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light leading-[1] sm:leading-[0.95] mb-6">
            The
            <br />
            Guardians&apos;
            <br />
            <em className="text-[#D4A855] not-italic font-light">Keeper</em>
          </h1>

          <p className="text-white/60 text-base sm:text-lg md:text-xl font-light tracking-wide mt-6 sm:mt-8 mb-12 sm:mb-14 max-w-lg mx-auto px-2">
            &hellip;because even protectors need help
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-3 bg-[#BF8C3A] hover:bg-[#D4A855] text-white font-medium px-9 py-4 rounded-full transition-all duration-300 text-sm tracking-wide hover:shadow-2xl hover:shadow-[#BF8C3A]/30 w-full sm:w-auto"
            >
              Discover Our Mission
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/25 text-white hover:border-white/50 hover:bg-white/10 font-medium px-9 py-4 rounded-full transition-all duration-300 text-sm tracking-wide w-full sm:w-auto"
            >
              Support the Cause
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            {[
              { end: 102, suffix: "+", label: "Items Donated" },
              { end: 4, suffix: "", label: "Locations Reached" },
              { end: 250000, suffix: "+", label: "Officers We Serve" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-4xl md:text-5xl font-light text-[#D4A855]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <CountUp end={s.end} suffix={s.suffix} />
                </p>
                <p className="text-white/40 text-xs mt-2 tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION STRIP ─────────────────────────────────── */}
      <section className="bg-[#BF8C3A] py-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm font-medium tracking-wide text-center md:text-left">
            Humanizing and supporting the Nigerian Police Force — one step at a
            time.
          </p>
          <Link
            href="/programs"
            className="flex-shrink-0 text-white border border-white/40 hover:bg-white hover:text-[#BF8C3A] text-xs tracking-widest uppercase font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
          >
            See Programs
          </Link>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────────── */}
      <section className="py-24 sm:py-28 bg-[#F9F6EF]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <ScrollReveal>
                <span className="gold-bar mb-6" />
                <p className="text-[#BF8C3A] text-xs tracking-[0.35em] uppercase font-semibold mb-5">
                  Who We Are
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#0B1D35] leading-tight mb-8 sm:mb-10">
                  Protecting
                  <br />
                  Those Who
                  <br />
                  <em className="text-[#BF8C3A]">Protect Us</em>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-[#8A96A3] text-base leading-8 sm:leading-9 mb-6">
                  The Guardians&apos; Keeper (TGK) is a registered Nigerian
                  foundation focused on the welfare, mental health, and dignity
                  of the Nigerian Police Force. We believe that a supported,
                  humanized police force is the foundation of good governance.
                </p>
                <p className="text-[#8A96A3] text-base leading-8 sm:leading-9 mb-10 sm:mb-12">
                  Despite choosing service over hardship, many officers operate
                  without basic resources, fair pay, or community trust. TGK
                  bridges that gap — through welfare programs, mental health
                  support, community outreach, and policy advocacy.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-[#0B1D35] font-semibold text-sm border-b border-[#BF8C3A] pb-1 hover:text-[#BF8C3A] transition-colors"
                >
                  Our full story
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Shield,
                  title: "Welfare",
                  desc: "Scholarships, healthcare and housing for police families",
                  delay: 0.1,
                },
                {
                  icon: Heart,
                  title: "Mental Health",
                  desc: "Counseling and workshops addressing trauma within the force",
                  delay: 0.2,
                },
                {
                  icon: Users,
                  title: "Community",
                  desc: "Rebuilding trust between officers and the public",
                  delay: 0.3,
                },
                {
                  icon: Megaphone,
                  title: "Advocacy",
                  desc: "Pushing for policy reform and proper remuneration",
                  delay: 0.4,
                },
              ].map(({ icon: Icon, title, desc, delay }) => (
                <ScrollReveal
                  key={title}
                  animation="reveal-scale"
                  delay={delay}
                >
                  <div className="lift bg-white rounded-2xl p-6 sm:p-7 border border-[#0B1D35]/6 h-full">
                    <div className="w-11 h-11 rounded-xl bg-[#0B1D35] flex items-center justify-center mb-5">
                      <Icon size={18} className="text-[#D4A855]" />
                    </div>
                    <h3 className="font-semibold text-[#0B1D35] text-base mb-3">
                      {title}
                    </h3>
                    <p className="text-[#8A96A3] text-sm leading-7">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FIRST OUTREACH HIGHLIGHT ──────────────────────── */}
      <section className="py-24 sm:py-28 bg-[#0B1D35] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[520px] lg:w-[600px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-full bg-[#BF8C3A]/8 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal animation="reveal-left">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                  alt="Outreach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    First Outreach — November 2025
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    Lagos, Nigeria · 4 Divisions Visited
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="max-w-2xl">
              <ScrollReveal animation="reveal-right">
                <span className="gold-bar mb-6" />
                <p className="text-[#D4A855] text-xs tracking-[0.35em] uppercase font-semibold mb-5">
                  Our First Step
                </p>
                <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight mb-8 sm:mb-10">
                  Raincoats for
                  <br />
                  <em className="text-[#D4A855]">Our Officers</em>
                </h2>
                <p className="text-white/50 text-base leading-8 sm:leading-9 mb-10 sm:mb-12">
                  In our inaugural outreach, five volunteers visited four police
                  divisions across Lagos, distributing 102 raincoats — a simple
                  act of dignity for officers who brave the elements without
                  basic protection.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { end: 102, suffix: "", label: "Raincoats" },
                  { end: 97, suffix: "", label: "Officers" },
                  { end: 4, suffix: "", label: "Divisions" },
                ].map((s, i) => (
                  <ScrollReveal key={s.label} delay={i * 0.1}>
                    <div className="border border-white/12 rounded-2xl p-6 text-center bg-white/3 h-full">
                      <p
                        className="text-4xl font-light text-[#D4A855]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        <CountUp end={s.end} suffix={s.suffix} />
                      </p>
                      <p className="text-white/40 text-xs mt-2">{s.label}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.3}>
                <Link
                  href="/impact"
                  className="group mt-10 sm:mt-12 inline-flex items-center gap-3 text-[#D4A855] font-semibold text-sm border-b border-[#BF8C3A]/50 pb-1 hover:border-[#D4A855] transition-colors"
                >
                  View full impact report
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────── */}
      <section className="py-24 sm:py-28 bg-[#F9F6EF]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <ScrollReveal>
            <span className="gold-bar mx-auto mb-8" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#0B1D35] leading-tight mb-8">
              Be a Keeper of
              <br />
              <em className="text-[#BF8C3A]">the Keepers</em>
            </h2>
            <p className="text-[#8A96A3] text-base leading-8 sm:leading-9 max-w-2xl mx-auto mb-12 sm:mb-14">
              Join us in supporting the men and women who dedicate their lives
              to protecting Nigeria. Every act of support — no matter how small
              — creates ripples that transform communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#0B1D35] hover:bg-[#152C4E] text-white font-medium px-9 py-4 rounded-full transition-all duration-300 text-sm tracking-wide w-full sm:w-auto"
              >
                Get Involved
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-3 border border-[#0B1D35]/20 text-[#0B1D35] hover:border-[#BF8C3A] hover:text-[#BF8C3A] font-medium px-9 py-4 rounded-full transition-all duration-300 text-sm tracking-wide w-full sm:w-auto"
              >
                Our Programs
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}