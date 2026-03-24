export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1800&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F3C]/92 via-[#1A3461]/85 to-[#0D1F3C]/80" />
      </div>

      {/* Nigerian flag accent strip */}
      <div className="absolute top-0 left-0 w-2 h-full z-10 flex flex-col">
        <div className="flex-1 bg-[#008751]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#008751]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-14 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="anim-fadeIn inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#008751] animate-pulse" />
          <span className="text-white/90 text-xs tracking-widest uppercase font-medium">Registered NGO · Nigeria</span>
        </div>

        <h1 className="font-display anim-fadeUp d-100 text-5xl md:text-7xl lg:text-8xl text-white font-semibold leading-[1.05] mb-6">
          The Guardians'
          <span className="block text-[#E4AE4A] italic">Keeper</span>
        </h1>

        <p className="anim-fadeUp d-200 text-white/70 text-lg md:text-xl font-light tracking-wide mb-4">
          …because even protectors need help
        </p>

        <p className="anim-fadeUp d-300 text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          We humanize and support the Nigerian Police Force — improving community relationships, 
          police welfare, and building a safer Nigeria for everyone.
        </p>

        <div className="anim-fadeUp d-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/programs"
            className="bg-[#C8922A] hover:bg-[#E4AE4A] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#C8922A]/30 text-sm tracking-wide"
          >
            Our Programs
          </a>
          <a
            href="/contact"
            className="border border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide"
          >
            Support the Mission
          </a>
        </div>

        {/* Stats bar */}
        <div className="anim-fadeUp d-500 mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto border-t border-white/10 pt-10">
          {[
            { num: "102",  label: "Raincoats Donated" },
            { num: "4",    label: "Locations Reached" },
            { num: "250K", label: "Officers we hope to serve" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl text-[#E4AE4A] font-semibold">{s.num}</p>
              <p className="text-white/50 text-xs mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/40 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-white animate-bounce" style={{ animationDuration: "1.5s" }} />
        </div>
      </div>
    </section>
  );
}