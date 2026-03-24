"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Asset = {
  public_id: string;
  asset_folder?: string | null;
  format: string;
  resource_type: "image" | "video" | "raw";
  secure_url: string;
  url?: string;
  width?: number;
  height?: number;
  created_at?: string;
  bytes?: number;
  display_name?: string;
};

type Props = {
  folder?: string;
  galleryHref?: string;
};

export default function OutreachGalleryPreview({
  folder = "Pictures from outreach",
  galleryHref = "/gallery",
}: Props) {
  const [latestAsset, setLatestAsset] = useState<Asset | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLatestAsset = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({ folder });

      const res = await fetch(
        `/api/cloudinary/folder-assets?${params.toString()}`,
        {
          cache: "no-store",
        }
      );

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Failed to load assets");
      }

      const assets: Asset[] = data.assets || [];

      if (assets.length === 0) {
        setLatestAsset(null);
        return;
      }

      const sortedAssets = [...assets].sort((a, b) => {
        const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return dateB - dateA;
      });

      setLatestAsset(sortedAssets[0]);
    } catch (err: any) {
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestAsset();
  }, [folder]);

  if (loading) {
    return <div className="py-12 text-center">Loading image...</div>;
  }

  if (error) {
    return <div className="py-12 text-center text-red-500">{error}</div>;
  }

  if (!latestAsset) {
    return <div className="py-12 text-center">No images found.</div>;
  }

  return (
    <div className="space-y-6">
      <Link href={galleryHref} className="block">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer">
          {latestAsset.resource_type === "video" ? (
            <video
              src={latestAsset.secure_url}
              className="h-[400px] w-full object-cover transition-transform duration-300 hover:scale-105"
              muted
            />
          ) : (
            <img
              src={latestAsset.secure_url}
              alt="Most recent outreach"
              className="h-[400px] w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>
      </Link>

      <div className="text-center">
        <Link
          href={galleryHref}
          className="inline-block rounded-full bg-[#BF8C3A] px-6 py-3 font-medium text-white transition-colors hover:bg-[#D4A855]"
        >
          View Gallery
        </Link>
      </div>
    </div>
  );
}