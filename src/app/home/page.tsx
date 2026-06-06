import type { Metadata } from "next";
import HomePageContent from "@/components/pages/HomePageContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "TGK | The Guardian's Keeper",
  description:
    "TGK, The Guardian's Keeper, supports police welfare, strengthens police-community trust, and promotes safer communities through social impact and technology-enabled initiatives.",
  path: "/",
  image:
    "https://res.cloudinary.com/df2e1ug1q/image/upload/v1774353044/IMG-20251126-WA0054_1_atxu6w.jpg",
});

export default function HomePage() {
  return <HomePageContent />;
}
