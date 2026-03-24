"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { albums } from "@/data/galleryData";

export default function AlbumPage({
  params,
}: {
  params: Promise<{ albumId: string }>;
}) {
  const { albumId } = use(params);
  const album = albums.find((a) => a.id === albumId);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null || !album) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev! > 0 ? prev! - 1 : album.media.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev! < album.media.length - 1 ? prev! + 1 : 0
        );
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, album]);

  if (!album) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-light text-[#0B1D35]">Album not found</h1>
          <Link href="/gallery" className="text-[#BF8C3A] hover:text-[#D4A855]">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const currentMedia = selectedIndex !== null ? album.media[selectedIndex] : null;

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : album.media.length - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev! < album.media.length - 1 ? prev! + 1 : 0));
  };

  return (
    <div className="overflow-x-hidden bg-white">
      <div className="bg-[#0B1D35] pt-32 pb-12 text-white">
        <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">
          <Link
            href="/gallery"
            className="relative z-10 mb-6 inline-flex items-center gap-2 text-[#D4A855] transition-colors hover:text-white"
          >
            <ChevronLeft size={20} />
            Back to Gallery
          </Link>
          <h1 className="mb-3 text-4xl font-light md:text-5xl">{album.title}</h1>
          <p className="mb-2 text-white/70">{album.date}</p>
          <p className="max-w-2xl text-white/60">{album.description}</p>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {album.media.map((media, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div
                  className="lift group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                  onClick={() => setSelectedIndex(i)}
                >
                  <img
                    src={media.thumbnail}
                    alt={media.caption}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {media.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <Play size={24} className="ml-1 text-white" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="truncate text-xs font-medium text-white">
                      {media.caption}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && currentMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <div className="relative mx-4 flex w-full max-w-5xl flex-col items-center">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-10 text-white transition-colors hover:text-[#D4A855]"
            >
              <X size={32} />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white transition-colors hover:bg-white/10 hover:text-[#D4A855]"
              title="Previous"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white transition-colors hover:bg-white/10 hover:text-[#D4A855]"
              title="Next"
            >
              <ChevronRight size={40} />
            </button>

            <div className="w-full overflow-hidden rounded-lg bg-black">
              {currentMedia.type === "image" ? (
                <img
                  src={currentMedia.url}
                  alt={currentMedia.caption}
                  className="max-h-[80vh] w-full object-contain"
                />
              ) : (
                <video
                  src={currentMedia.url}
                  controls
                  autoPlay
                  className="max-h-[80vh] w-full object-contain"
                />
              )}
            </div>

            <div className="w-full rounded-b-lg bg-[#0B1D35] p-4">
              <p className="mb-3 text-center text-white">{currentMedia.caption}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/50">
                  {selectedIndex + 1} / {album.media.length}
                </div>
                <div className="text-xs text-white/50">
                  Use arrow keys or click arrows to navigate
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}