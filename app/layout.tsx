import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://sethumj.netlify.app/"
  ),
  title: "Sethu Portfolio",
  description: "Developer Portfolio By Sethu Mettukulam Jagadeesan",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Sethu MJ",
    "Sethu Mettukulam Jagadeesan",
    "Sethu",
  ],
  openGraph: {
    title: "Sethu Mettukulam Jagadeesan",
    description: "Software Engineer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
