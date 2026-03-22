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
    color: "bg-[#0B1D35]",
    accent: "text-[#D4A855]",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    desc: "We provide comprehensive welfare support for officers and their families — including scholarships for children, healthcare initiatives, and housing improvement grants.",
    items: ["Children's scholarship fund", "Healthcare access support", "Housing improvement grants", "Emergency family assistance"],
  },
  {
    icon: Heart,
    number: "02",
    title: "Mental Health Training",
    tag: "Police",
    color: "bg-[#152C4E]",
    accent: "text-[#D4A855]",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    desc: "Stress and trauma are occupational realities for officers. We provide professional workshops, group counseling, and one-on-one support to address mental health within the force.",
    items: ["Professional counseling sessions", "Stress management workshops", "Peer support groups", "Trauma recovery programs"],
  },
  {
    icon: Users,
    number: "03",
    title: "Community Engagement",
    tag: "Police & Public",
    color: "bg-[#1E3A63]",
    accent: "text-[#D4A855]",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    desc: "We design structured engagement programs that bring officers and community members together — rebuilding trust through dialogue, visibility, and shared experiences.",
    items: ["Community dialogue forums", "School outreach programs", "Joint neighborhood patrols", "Public appreciation events"],
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Advocacy & Awareness",
    tag: "Police & Government",
    color: "bg-[#0B1D35]",
    accent: "text-[#D4A855]",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    desc: "Systemic change requires systemic action. We work with government bodies and international organizations to advocate for proper remuneration, better infrastructure, and policy reform.",
    items: ["Legislative advocacy", "Media awareness campaigns", "International partnerships", "Policy reform submissions"],
  },
];

export default function ProgramsPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        label="What We Do"
        title="Our"
        titleItalic="Programs"
        subtitle="Four strategic pillars — from individual welfare to systemic policy reform."
        img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
      />

      {/* Programs */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 flex flex-col gap-32">
          {programs.map((p, i) => {
            const Icon = p.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={p.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <ScrollReveal animation={isEven ? "reveal-left" : "reveal-right"}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${p.color} opacity-60`} />
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                        <Icon size={18} className="text-white" />
                      </div>
                      <span className="text-white text-xs tracking-widest uppercase border border-white/25 bg-white/10 px-3 py-1.5 rounded-full">{p.tag}</span>
                    </div>
                    <p className="absolute bottom-6 right-6 text-white/15 font-light text-8xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.number}</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation={isEven ? "reveal-right" : "reveal-left"}>
                  <span className="gold-bar mb-6" />
                  <p className={`text-xs tracking-[0.35em] uppercase font-semibold mb-4 ${p.accent}`}>{p.tag}</p>
                  <h2 className="text-4xl md:text-5xl font-light text-[#0B1D35] mb-7 leading-tight">{p.title}</h2>
                  <p className="text-[#8A96A3] text-base leading-9 mb-9">{p.desc}</p>
                  <ul className="flex flex-col gap-4 mb-12">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[#0B1D35] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BF8C3A] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="group inline-flex items-center gap-3 text-[#0B1D35] font-semibold text-sm border-b border-[#BF8C3A] pb-1 hover:text-[#BF8C3A] transition-colors">
                    Get involved in this program
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#F9F6EF]">
        <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <span className="gold-bar mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-light text-[#0B1D35] mb-7">
              Want to Support<br /><em className="text-[#BF8C3A]">a Program?</em>
            </h2>
            <p className="text-[#8A96A3] text-base leading-9 mb-12">
              Whether you donate, volunteer your skills, or partner with us — there is a role for everyone in this mission.
            </p>
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 bg-[#0B1D35] hover:bg-[#152C4E] text-white font-medium px-9 py-4 rounded-full transition-all duration-300 text-sm">
              Contact Us <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
