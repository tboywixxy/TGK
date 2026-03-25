import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Users, Megaphone } from "lucide-react";

const programs = [
  {
    icon: Shield,
    number: "01",
    title: "Welfare Programs",
    tag: "Police",
    accent: "text-[#D4A855]",
    desc: "We provide comprehensive welfare support for officers and their families — including scholarships for children, healthcare initiatives, and housing improvement grants.",
    items: [
      "Children's scholarship fund",
      "Healthcare access support",
      "Housing improvement grants",
      "Emergency family assistance",
    ],
  },
  {
    icon: Heart,
    number: "02",
    title: "Mental Health Training",
    tag: "Police",
    accent: "text-[#D4A855]",
    desc: "Stress and trauma are occupational realities for officers. We provide professional workshops, group counseling, and one-on-one support to address mental health within the force.",
    items: [
      "Professional counseling sessions",
      "Stress management workshops",
      "Peer support groups",
      "Trauma recovery programs",
    ],
  },
  {
    icon: Users,
    number: "03",
    title: "Community Engagement",
    tag: "Police & Public",
    accent: "text-[#D4A855]",
    desc: "We design structured engagement programs that bring officers and community members together — rebuilding trust through dialogue, visibility, and shared experiences.",
    items: [
      "Community dialogue forums",
      "School outreach programs",
      "Joint neighborhood patrols",
      "Public appreciation events",
    ],
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Advocacy & Awareness",
    tag: "Police & Government",
    accent: "text-[#D4A855]",
    desc: "Systemic change requires systemic action. We work with government bodies and international organizations to advocate for proper remuneration, better infrastructure, and policy reform.",
    items: [
      "Legislative advocacy",
      "Media awareness campaigns",
      "International partnerships",
      "Policy reform submissions",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <PageHero
        label="What We Do"
        title="Our"
        titleItalic="Programs"
        subtitle="Four strategic pillars — from individual welfare to systemic policy reform."
        img="https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353013/IMG-20251126-WA0032_lg7hfc.jpg"
      />

      <section className="relative py-24 md:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-1/2 -translate-x-1/2 h-[78%] w-px bg-gradient-to-b from-transparent via-[#D4A855]/30 to-transparent hidden lg:block" />
          <div className="absolute top-20 left-0 w-72 h-72 bg-[#F9F6EF] rounded-full blur-3xl opacity-70" />
          <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#0B1D35]/[0.04] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-10">
          {programs.map((p, i) => {
            const Icon = p.icon;
            const isEven = i % 2 === 0;

            return (
              <ScrollReveal
                key={p.title}
                animation={isEven ? "reveal-left" : "reveal-right"}
              >
                <div
                  className={`group relative grid lg:grid-cols-[120px_1fr] gap-6 md:gap-8 rounded-[2rem] border border-[#E8E1D4] bg-white/95 backdrop-blur-sm p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(11,29,53,0.06)] hover:shadow-[0_18px_60px_rgba(11,29,53,0.10)] transition-all duration-500 ${
                    !isEven ? "lg:ml-16" : "lg:mr-16"
                  }`}
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#F9F6EF]/70 via-white to-[#F4EFE4]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex lg:flex-col items-start lg:items-center justify-between gap-4">
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-[#0B1D35] shadow-lg shadow-[#0B1D35]/10 group-hover:-translate-y-1 transition-transform duration-500">
                      <Icon
                        size={34}
                        className="text-[#D4A855]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="flex items-center gap-3 lg:flex-col lg:gap-1 lg:mt-4">
                      <span className="inline-flex items-center rounded-full border border-[#D4A855]/30 bg-[#FFF9ED] px-4 py-1.5 text-[10px] tracking-[0.28em] uppercase text-[#0B1D35]">
                        {p.tag}
                      </span>
                      <span
                        className="text-4xl md:text-5xl font-light text-[#0B1D35]/10 leading-none"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {p.number}
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="mb-5 flex items-start justify-between gap-4 flex-wrap">
                      <h2 className="text-3xl md:text-4xl font-light text-[#0B1D35] leading-tight">
                        {p.title}
                      </h2>

                      <span className="h-px w-16 bg-[#D4A855]/60 mt-4 hidden md:block" />
                    </div>

                    <p className="text-[#73808D] text-[15px] md:text-base leading-8 mb-8 max-w-3xl">
                      {p.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-10">
                      {p.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-[#EEE7DA] bg-[#FCFBF8] px-4 py-4 hover:bg-white hover:border-[#DCC08A] transition-colors duration-300"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-[#BF8C3A] flex-shrink-0" />
                          <span className="text-sm md:text-[15px] text-[#0B1D35] leading-7">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="group/link inline-flex items-center gap-3 text-[#0B1D35] font-semibold text-sm"
                    >
                      <span className="relative">
                        Get involved in this program
                        <span className="absolute left-0 -bottom-1 h-px w-full bg-[#BF8C3A] origin-left scale-x-100 group-hover/link:scale-x-110 transition-transform duration-300" />
                      </span>
                      <ArrowRight
                        size={15}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-[#F9F6EF]">
        <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <span className="gold-bar mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-light text-[#0B1D35] mb-7">
              Want to Support
              <br />
              <em className="text-[#BF8C3A]">a Program?</em>
            </h2>
            <p className="text-[#8A96A3] text-base leading-9 mb-12">
              Whether you donate, volunteer your skills, or partner with us —
              there is a role for everyone in this mission.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#0B1D35] hover:bg-[#152C4E] text-white font-medium px-9 py-4 rounded-full transition-all duration-300 text-sm"
            >
              Contact Us
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}