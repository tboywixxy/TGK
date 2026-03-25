import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import PageHero from "@/components/PageHero";

const stats = [
  { end: 102,     suffix: "",  label: "Raincoats Distributed",     note: "To officers across 4 Lagos divisions" },
  { end: 97,      suffix: "",  label: "Officers Directly Reached",  note: "Plus 5 given to TGK volunteers" },
  { end: 4,       suffix: "",  label: "Divisions Visited",          note: "Police Training School, Ikeja, Maroko, VI" },
  { end: 5,       suffix: "",  label: "Volunteers Deployed",        note: "Fully funded outreach team" },
  { end: 1223940, suffix: "",  label: "Naira Spent (Total)",        note: "Every kobo publicly accounted for", prefix: "₦" },
  { end: 250000,  suffix: "+", label: "Officers We Aim to Reach",   note: "The Nigerian Police Force nationwide" },
];

const expenditure = [
  { item: "102 Raincoats (Quality Reflective)",            amount: 950000 },
  { item: "Fuel — full-day movement",                      amount: 44000 },
  { item: "Water & Chocolate for stations",                amount: 73790 },
  { item: "TGK T-Shirts (10 pieces, front & back print)",  amount: 130000 },
  { item: "Libra Logistics — Port Harcourt to Lagos",      amount: 6150 },
  { item: "Driver fee — Monday Adejoh",                    amount: 20000 },
];

const locations = [
  { name: "Nigerian Police Training School", area: "Lagos State",   img: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353044/IMG-20251126-WA0054_1_atxu6w.jpg" },
  { name: "Ikeja Divisional Headquarters",   area: "Ikeja, Lagos",  img: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353040/IMG-20251128-WA0003_lgfvrx.jpg" },
  { name: "Maroko Divisional Headquarters",  area: "Maroko, Lagos", img: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353039/IMG-20251128-WA0002_cjeysp.jpg" },
  { name: "Victoria Island Divisional HQ",   area: "V/I, Lagos",    img: "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353035/IMG-20251126-WA0050_u3c7yr.jpg" },
];

export default function ImpactPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        label="First Outreach Report"
        title="Our"
        titleItalic="Impact"
        subtitle="Transparent reporting on every action taken and every naira spent — November 2025."
        img="https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353039/IMG-20251128-WA0001_w2zt6d.jpg"
      />

      {/* Stats grid */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal className="mb-18 text-center">
            <span className="gold-bar mx-auto mb-6" />
            <p className="text-[#BF8C3A] text-xs tracking-[0.35em] uppercase font-semibold mb-5">By the Numbers</p>
            <h2 className="text-5xl font-light text-[#0B1D35]">First Outreach — <em className="text-[#BF8C3A]">Results</em></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div className="lift group border border-[#0B1D35]/8 rounded-2xl p-10 bg-[#F9F6EF] hover:bg-[#0B1D35] transition-colors duration-500 h-full text-center">
                  <p className="text-5xl md:text-6xl font-light text-[#BF8C3A] group-hover:text-[#D4A855] transition-colors mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    <CountUp end={s.end} suffix={s.suffix} prefix={s.prefix ?? ""} />
                  </p>
                  <p className="text-[#0B1D35] group-hover:text-white font-semibold text-sm mb-2 transition-colors">{s.label}</p>
                  <p className="text-[#8A96A3] group-hover:text-white/45 text-xs transition-colors">{s.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-28 bg-[#F9F6EF]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal className="mb-16">
            <span className="gold-bar mb-6" />
            <p className="text-[#BF8C3A] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Locations Visited</p>
            <h2 className="text-4xl font-light text-[#0B1D35]">Where We <em className="text-[#BF8C3A]">Went</em></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.name} delay={i * 0.1}>
                <div className="lift group rounded-2xl overflow-hidden relative aspect-[3/4]">
                  <img src={loc.img} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35] via-[#0B1D35]/30 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <p className="text-white font-semibold text-sm leading-snug">{loc.name}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006B42]" />
                      <span className="text-white/50 text-xs">{loc.area}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expenditure */}
      <section className="py-28 bg-[#0B1D35]">
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal className="mb-14">
            <span className="gold-bar mb-6" />
            <p className="text-[#D4A855] text-xs tracking-[0.35em] uppercase font-semibold mb-5">Full Transparency</p>
            <h2 className="text-4xl font-light text-white">Expenditure <em className="text-[#D4A855]">Breakdown</em></h2>
            <p className="text-white/40 text-sm mt-3">Every naira, publicly reported.</p>
          </ScrollReveal>
          <div className="flex flex-col gap-3">
            {expenditure.map((e, i) => (
              <ScrollReveal key={e.item} delay={i * 0.07}>
                <div className="flex items-center justify-between border border-white/10 rounded-xl px-7 py-5 bg-white/3 hover:bg-white/6 transition-colors">
                  <span className="text-white/65 text-sm">{e.item}</span>
                  <span className="text-[#D4A855] font-semibold text-sm flex-shrink-0 ml-8">
                    ₦{e.amount.toLocaleString()}
                  </span>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.5}>
              <div className="flex items-center justify-between bg-[#BF8C3A] rounded-xl px-7 py-5 mt-2">
                <span className="text-white font-semibold">Total Expenditure</span>
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>₦1,223,940</span>
              </div>
              <p className="text-white/30 text-xs mt-4 italic pl-1">
                * Vehicle donated by Hope Okwa — no vehicle cost incurred save fueling.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <ScrollReveal className="mb-14 text-center">
            <span className="gold-bar mx-auto mb-6" />
            <h2 className="text-4xl font-light text-[#0B1D35]">The Volunteers Who <em className="text-[#BF8C3A]">Made It Happen</em></h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {["Elizabeth Obode", "Juwon Ifalade", "Anne Obode", "Chinonso Nnamah", "Monday Adejoh"].map((v, i) => (
              <ScrollReveal key={v} delay={i * 0.1}>
                <div className="flex items-center gap-3 border border-[#0B1D35]/12 rounded-full px-7 py-3.5 bg-[#F9F6EF]">
                  <div className="w-8 h-8 rounded-full bg-[#0B1D35] flex items-center justify-center text-[#D4A855] text-xs font-bold flex-shrink-0">
                    {v[0]}
                  </div>
                  <span className="text-[#0B1D35] text-sm font-medium">{v}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download Report */}
      <section className="py-28 bg-[#F9F6EF]">
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 text-center">
          <ScrollReveal>
            <span className="gold-bar mx-auto mb-6" />
            <h2 className="text-4xl font-light text-[#0B1D35] mb-6">Download Our <em className="text-[#BF8C3A]">Full Report</em></h2>
            <p className="text-[#8A96A3] text-sm mb-10">Get the complete PDF report of our first outreach, including detailed breakdowns and photos.</p>
            <a
              href="/files/tgk-1.pdf"
              download="The Guardians Keeper first outreach"
              className="inline-flex items-center gap-3 bg-[#BF8C3A] hover:bg-[#D4A855] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#BF8C3A]/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Report
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
