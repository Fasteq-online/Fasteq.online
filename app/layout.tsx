import type { Metadata, Viewport } from "next";
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

// SEO Metadata Configuration
export const metadata: Metadata = {
  title: {
    default: "FASTEQ — Engineering the Future",
    template: "%s | FASTEQ Studio"
  },
  description: "FASTEQ is a technical design studio architecting luxury digital products, high-speed web ecosystems, and autonomous AI systems.",
  keywords: ["Digital Studio", "AI Engineering", "Next.js Development", "UI/UX Design", "Custom Software", "FASTEQ"],
  authors: [{ name: "FASTEQ Team" }],
  creator: "FASTEQ Studio",
  
  // Open Graph (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fasteq.com", // Apni domain yahan likhen
    siteName: "FASTEQ",
    title: "FASTEQ — Engineering the Future",
    description: "Technical design studio for visionary enterprises.",
    images: [
      {
        url: "/og-image.jpg", // public folder mein ye image honi chahiye
        width: 1200,
        height: 630,
        alt: "FASTEQ Studio"
      }
    ]
  },

  // Twitter (X) Card
  twitter: {
    card: "summary_large_image",
    title: "FASTEQ Studio",
    description: "Architecting Digital Legacies.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  }
};

export const viewport: Viewport = {
  themeColor: "#0D2E2F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body 
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased font-body bg-[#F8F6F3] text-[#0D2E2F]`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}