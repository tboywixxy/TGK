import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, Instagram, Twitter, Linkedin, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        label="Reach Out"
        title="Contact"
        titleItalic="Us"
        subtitle="Whether you want to donate, volunteer, partner, or simply learn more — we want to hear from you."
        img="https://res.cloudinary.com/df2e1ug1q/image/upload/v1774352998/WhatsApp_Image_2025-11-26_at_20.15.08_1_rrikko.jpg"
        imgClassName="object-[50%_35%]"
      />

      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left — Info */}
            <div>
              <ScrollReveal>
                <span className="gold-bar mb-6" />
                <p className="text-[#BF8C3A] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Get in Touch</p>
                <h2 className="text-5xl font-light text-[#0B1D35] leading-tight mb-8">
                  Let&apos;s Build a<br /><em className="text-[#BF8C3A]">Better Nigeria</em>
                </h2>
                <p className="text-[#8A96A3] text-base leading-9 mb-14">
                  TGK welcomes donors, volunteers, corporate partners, and advocates. Every connection we make brings us closer to a Nigeria where those who protect us are also protected.
                </p>
              </ScrollReveal>

              <div className="flex flex-col gap-6 mb-14">
                {[
                  { Icon: Mail,   val: "social.theguardians@gmail.com", href: "mailto:social.theguardians@gmail.com", label: "Email" },
                  { Icon: Phone,  val: "+234 707 357 9759",             href: "tel:+2347073579759",                  label: "Phone" },
                  { Icon: Phone,  val: "+234 816 782 7920",             href: "tel:+2348167827920",                  label: "Phone 2" },
                  { Icon: MapPin, val: "Lagos, Nigeria",                href: "#",                                   label: "Location" },
                ].map(({ Icon, val, href, label }, i) => (
                  <ScrollReveal key={label + i} delay={i * 0.1}>
                    <a href={href} className="flex items-center gap-5 group">
                      <div className="w-12 h-12 rounded-xl bg-[#F9F6EF] border border-[#0B1D35]/8 flex items-center justify-center group-hover:bg-[#BF8C3A] transition-colors flex-shrink-0">
                        <Icon size={17} className="text-[#BF8C3A] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[#0B1D35] text-sm group-hover:text-[#BF8C3A] transition-colors">{val}</span>
                    </a>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <p className="text-[#0B1D35] text-xs tracking-[0.25em] uppercase font-semibold mb-5">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Instagram, href: "https://instagram.com/theguardianskeeperr", label: "IG" },
                    { Icon: Twitter,   href: "https://twitter.com/TheeguardiansK",         label: "X" },
                    { Icon: Linkedin,  href: "https://linkedin.com/company/the-guardians-keeper", label: "LI" },
                  ].map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl border border-[#0B1D35]/12 flex items-center justify-center text-[#8A96A3] hover:bg-[#0B1D35] hover:text-[#D4A855] hover:border-[#0B1D35] transition-all duration-300">
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form */}
            <ScrollReveal animation="reveal-right">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ways to help */}
      <section className="py-28 bg-[#0B1D35]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal className="text-center mb-16">
            <span className="gold-bar mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-light text-white">Ways to <em className="text-[#D4A855]">Support TGK</em></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Donate",    desc: "Every naira funds welfare, resources, and programs for officers and their families." },
              { title: "Volunteer", desc: "Join our outreach teams and contribute your time and skills on the ground." },
              { title: "Partner",   desc: "Organisations and companies can amplify our impact through structured partnerships." },
              { title: "Advocate",  desc: "Spread the word, follow us, share our mission — change the national conversation." },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="lift border border-white/10 rounded-2xl p-8 bg-white/3 hover:bg-white/6 transition-colors h-full">
                  <p className="text-[#BF8C3A] text-3xl font-light mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>0{i + 1}</p>
                  <h3 className="text-white font-semibold text-lg mb-3">{c.title}</h3>
                  <p className="text-white/45 text-sm leading-7">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
