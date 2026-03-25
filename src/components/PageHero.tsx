interface Props {
  label: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  img?: string;
  imgClassName?: string;
}

export default function PageHero({ label, title, titleItalic, subtitle, img, imgClassName }: Props) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden bg-[#0B1D35]">
      {img && (
        <img
          src={img}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover opacity-60 ${imgClassName || ""}`}
        />
      )}
      <div className={`absolute inset-0 ${img ? "bg-gradient-to-t from-[#0B1D35] via-[#0B1D35]/80 to-[#0B1D35]/40" : "bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#152C4E] via-[#0B1D35] to-[#0B1D35]"}`} />
      
      {/* Abstract shapes for no-image version */}
      {!img && (
        <>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A855]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4A855]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </>
      )}

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