import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ['600', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  weight: ['400', '500']
});

export const metadata: Metadata = {
  title: "FASTEQ — Engineering the Future",
  description: "Luxury Tech & AI Architecture Studio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased font-body bg-[#F8F6F3] text-[#0D2E2F]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}