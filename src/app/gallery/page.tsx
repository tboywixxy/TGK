import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { albums } from "@/data/galleryData";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "TGK Gallery | The Guardian's Keeper in Action",
  description:
    "Explore the TGK gallery and see The Guardian's Keeper in action through outreach photos and videos supporting police welfare and safer communities.",
  path: "/gallery",
  image: albums[0].coverImage,
});

export default function GalleryPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        label="Photo & Video Gallery"
        title="Our"
        titleItalic="Moments"
        subtitle="Capturing the impact of our outreach programs through photos and videos."
        img={albums[0].coverImage}
        imgAlt="TGK outreach moments captured during community support visits in Lagos"
      />

      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">
          <ScrollReveal className="mb-18 text-center">
            <span className="gold-bar mx-auto mb-6" />
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#BF8C3A]">
              Our Outreach Albums
            </p>
            <h2 className="text-5xl font-light text-[#0B1D35]">
              Captured <em className="text-[#BF8C3A]">Moments</em>
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {albums.map((album, i) => (
              <ScrollReveal key={album.id} delay={i * 0.1}>
                <Link href={`/gallery/${album.id}`}>
                  <div className="lift group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={album.coverImage}
                      alt={`${album.title} from The Guardian's Keeper outreach gallery`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35] via-[#0B1D35]/30 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <p className="mb-2 text-lg font-semibold leading-snug text-white">
                        {album.title}
                      </p>
                      <p className="mb-3 text-sm text-white/70">{album.date}</p>
                      <p className="text-xs leading-relaxed text-white/60">
                        {album.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs font-medium text-[#D4A855]">
                          {album.media.length}{" "}
                          {album.media.length === 1 ? "item" : "items"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/impact"
              className="group inline-flex items-center gap-3 text-[#0B1D35] font-semibold text-sm border-b border-[#BF8C3A] pb-1 hover:text-[#BF8C3A] transition-colors"
            >
              Read the impact report behind these moments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
