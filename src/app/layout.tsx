import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Guardians' Keeper | TGK Nigeria",
  description: "Because even protectors need help. TGK is a registered Nigerian NGO supporting the Nigerian Police Force.",
  verification: {
    google: "oZMd5giMvPxMXr_bLkUU59YDFwbO4lZOIS4io2MAHos",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
