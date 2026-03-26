import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, Shield, Heart, Users, Megaphone } from "lucide-react";

const programs = [
  {
    icon: Shield,
    number: "01",
    title: "Welfare Programs",
    tag: "Police",
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

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid gap-6 md:gap-8">
            {programs.map((p) => {
              const Icon = p.icon;

              return (
                <article
                  key={p.title}
                  className="rounded-[28px] border border-[#E8E1D4] bg-white p-6 md:p-8 lg:p-10 shadow-sm transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="grid gap-6 lg:grid-cols-[110px_1fr] lg:gap-8">
                    <div className="flex lg:flex-col items-start lg:items-center gap-4">
                      <div className="flex h-18 w-18 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-[#0B1D35]">
                        <Icon
                          size={32}
                          className="text-[#D4A855]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <div className="flex items-center gap-3 lg:flex-col lg:gap-2">
                        <span className="inline-flex items-center rounded-full border border-[#D4A855]/30 bg-[#FFF9ED] px-4 py-1.5 text-[10px] tracking-[0.22em] uppercase text-[#0B1D35]">
                          {p.tag}
                        </span>
                        <span
                          className="text-4xl md:text-5xl font-light leading-none text-[#0B1D35]/10"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {p.number}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-[#0B1D35]">
                          {p.title}
                        </h2>
                        <span className="mt-4 hidden h-px w-16 bg-[#D4A855]/60 md:block" />
                      </div>

                      <p className="mb-6 max-w-3xl text-[15px] leading-7 text-[#73808D] md:text-base md:leading-8">
                        {p.desc}
                      </p>

                      <div className="mb-8 grid gap-3 sm:grid-cols-2">
                        {p.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-[#EEE7DA] bg-[#FCFBF8] px-4 py-4"
                          >
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#BF8C3A]" />
                            <span className="text-sm leading-7 text-[#0B1D35] md:text-[15px]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0B1D35]"
                      >
                        <span className="relative">
                          Get involved in this program
                          <span className="absolute left-0 -bottom-1 h-px w-full bg-[#BF8C3A]" />
                        </span>
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F6EF] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
          <span className="gold-bar mx-auto mb-8" />
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-light text-[#0B1D35]">
            Want to Support
            <br />
            <em className="text-[#BF8C3A]">a Program?</em>
          </h2>
          <p className="mb-10 text-base leading-8 text-[#8A96A3]">
            Whether you donate, volunteer your skills, or partner with us —
            there is a role for everyone in this mission.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1D35] px-9 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#152C4E]"
          >
            Contact Us
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}