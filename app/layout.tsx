import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ['600', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "FASTEQ — Global Engineering & AI Architecture Studio",
  description: "Award-winning studio engineering high-fidelity web ecosystems, AI infrastructure, and luxury digital products.",
};

export const viewport: Viewport = {
  themeColor: "#0D2E2F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased font-body bg-[#F8F6F3] text-[#0D2E2F] selection:bg-brand-copper selection:text-white`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}