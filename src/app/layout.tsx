import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tucson Buyers Club",
  description: "Local group buying power for everyday households.",
  metadataBase: new URL("https://tucson-buyers-club.vercel.app"),
  openGraph: {
    title: "Tucson Buyers Club",
    description: "Local group buying power for everyday households.",
    url: "https://tucson-buyers-club.vercel.app",
    siteName: "Tucson Buyers Club",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tucson Buyers Club" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tucson Buyers Club",
    description: "Local group buying power for everyday households.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
