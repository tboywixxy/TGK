import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Elizabeth Obode",
    role: "Chairman & Co-Founder",
    bio: "A strategy consultant and Supernumerary Police (SPY) officer. Elizabeth believes national transformation must begin with protecting those who protect others.",
    img: "/Elizabeth-CEO.jpeg",
  },
  {
    name: "Juwon Ifalade",
    role: "Co-Founder",
    bio: "An engineer and passionate educator who has spent years mentoring students across Nigeria. He believes dignity should be extended to all who serve the nation.",
    img: "/Juwon.jpeg",
  },
  {
    name: "Teslim Idowu",
    role: "Co-Founder",
    bio: "An engineer with experience deploying renewable energy systems in underserved regions, he has witnessed firsthand how human safety shapes community well-being.",
    img: "/Idowu.jpeg",
  },
  {
    name: "Ibrahim Yisa",
    role: "Co-Founder",
    bio: "A technologist and civic leader who joined the School of Politics, Policy and Governance to better understand systems affecting national development.",
    img: "/Yisa.jpeg",
  },
];

const values = [
  { title: "Dignity",         desc: "Every person who chooses service deserves to be treated with dignity and respect." },
  { title: "Transparency",    desc: "We publish every naira spent and every outcome achieved — full accountability to our supporters." },
  { title: "Community",       desc: "We build bridges between officers and the communities they serve, not walls." },
  { title: "Systemic Change", desc: "We go beyond charity — we advocate for policy reform that creates lasting impact." },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        label="Our Story"
        title="About"
        titleItalic="TGK"
        subtitle="A foundation born from the belief that national transformation starts with those who dedicate their lives to protecting others."
        img="https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353004/IMG-20251126-WA0006_amc2sq.jpg"
        imgClassName="object-[50%_35%]"
      />

      {/* Story */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <ScrollReveal animation="reveal-left">
                <span className="gold-bar mb-6" />
                <p className="text-[#BF8C3A] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Our Motivation</p>
                <h2 className="text-5xl font-light text-[#0B1D35] leading-tight">
                  Why We<br /><em className="text-[#BF8C3A]">Exist</em>
                </h2>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal animation="reveal-right">
                <p className="text-[#8A96A3] text-base leading-9 mb-7">
                  The Guardians&apos; Keeper was founded by a group of professionals who share a deep conviction: that Nigeria cannot achieve the security and governance it deserves without first addressing the welfare of those tasked with its protection.
                </p>
                <p className="text-[#8A96A3] text-base leading-9 mb-7">
                  Many Nigerian police officers come from humble beginnings. Despite limited opportunities, they chose service over crime — dedicating their lives to protecting others while receiving inadequate pay, scarce resources, and little community trust.
                </p>
                <p className="text-[#8A96A3] text-base leading-9">
                  We exist to change that. Not through sympathy, but through structured, transparent, and measurable support that humanizes the force and rebuilds the trust that makes communities safer for everyone.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-[#F9F6EF]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal className="text-center mb-18">
            <span className="gold-bar mx-auto mb-6" />
            <h2 className="text-5xl font-light text-[#0B1D35]">Our <em className="text-[#BF8C3A]">Values</em></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} animation="reveal-scale" delay={i * 0.1}>
                <div className="lift bg-white rounded-2xl p-8 border border-[#0B1D35]/6 h-full">
                  <p className="text-[#BF8C3A] text-4xl font-light mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>0{i + 1}</p>
                  <h3 className="text-[#0B1D35] font-semibold text-lg mb-3">{v.title}</h3>
                  <p className="text-[#8A96A3] text-sm leading-7">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal className="mb-16">
            <span className="gold-bar mb-6" />
            <p className="text-[#BF8C3A] text-xs tracking-[0.35em] uppercase font-semibold mb-5">The People</p>
            <h2 className="text-5xl font-light text-[#0B1D35]">
              Founding <em className="text-[#BF8C3A]">Team</em>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.1}>
                <div className="lift group rounded-3xl overflow-hidden border border-[#0B1D35]/8">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white font-semibold">{m.name}</p>
                      <p className="text-[#D4A855] text-xs mt-0.5">{m.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#8A96A3] text-sm leading-7">{m.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-24 bg-[#0B1D35]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "CAC Registration",   val: "No. 8997651",      note: "Federal Republic of Nigeria — Corporate Affairs Commission" },
                { label: "SCUML Certificate",  val: "RN: SC 121405428", note: "Registered Dec 3, 2025 — Anti-Money Laundering Compliant" },
                { label: "Tax Identification", val: "33695925-0001",    note: "Federal Inland Revenue Service — Nigeria" },
              ].map((doc) => (
                <div key={doc.label} className="border border-white/10 rounded-2xl p-8 bg-white/3">
                  <p className="text-[#D4A855] text-xs tracking-widest uppercase font-semibold mb-3">{doc.label}</p>
                  <p className="text-white text-2xl font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{doc.val}</p>
                  <p className="text-white/35 text-xs leading-5">{doc.note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
