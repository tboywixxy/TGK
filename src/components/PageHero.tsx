interface Props {
  label: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  img: string;
}

export default function PageHero({ label, title, titleItalic, subtitle, img }: Props) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden">
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35] via-[#0B1D35]/60 to-[#0B1D35]/20" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pb-14">
        <span className="inline-block text-[#D4A855] text-xs tracking-[0.35em] uppercase font-medium mb-3">{label}</span>
        <h1 className="text-5xl md:text-7xl text-white font-light leading-none">
          {title}{" "}
          {titleItalic && <em className="text-[#D4A855]">{titleItalic}</em>}
        </h1>
        {subtitle && <p className="text-white/60 mt-4 text-lg max-w-xl font-light">{subtitle}</p>}
      </div>
    </section>
  );
}