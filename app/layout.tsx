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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://fasteq.online';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Core identity ────────────────────────────────────────────────────────
  title: {
    default: "FASTEQ — Global Engineering & AI Architecture Studio",
    template: "%s | FASTEQ",
  },
  description:
    "Award-winning software & AI architecture studio engineering high-fidelity web ecosystems, custom AI agents, and luxury digital products for global enterprises.",
  keywords: [
    "FASTEQ",
    "software engineering studio",
    "AI architecture",
    "Next.js development",
    "web development agency",
    "custom AI agents",
    "enterprise web development",
    "luxury UI/UX design",
    "full stack development",
    "cloud infrastructure",
  ],
  authors: [{ name: "FASTEQ Studio", url: BASE_URL }],
  creator: "FASTEQ Studio",
  publisher: "FASTEQ Studio",

  // ── Canonical & alternates ───────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Indexing ─────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "FASTEQ",
    title: "FASTEQ — Global Engineering & AI Architecture Studio",
    description:
      "Award-winning software & AI architecture studio engineering high-fidelity web ecosystems, custom AI agents, and luxury digital products.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FASTEQ — Engineering the Unimaginable",
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@fasteq",
    creator: "@fasteq",
    title: "FASTEQ — Global Engineering & AI Architecture Studio",
    description:
      "Award-winning studio engineering high-fidelity web ecosystems, AI infrastructure, and luxury digital products.",
    images: ["/opengraph-image"],
  },

  // ── Verification (add codes after registering in Search Console) ─────────
  verification: {
    google: "977ef236dc2cb44b",
    // bing: "REPLACE_WITH_BING_VERIFICATION_CODE",
  },

  // ── App metadata ─────────────────────────────────────────────────────────
  applicationName: "FASTEQ",
  category: "technology",
  classification: "Software Engineering & AI Agency",
};

export const viewport: Viewport = {
  themeColor: "#0D2E2F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ── JSON-LD: Organization + WebSite schemas ──────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "FASTEQ",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/assets/images/logo.png`,
    width: 180,
    height: 180,
  },
  description:
    "Award-winning global software & AI architecture studio engineering high-frequency web ecosystems with mathematical precision.",
  foundingDate: "2023",
  founders: [
    {
      "@type": "Person",
      name: "Anas Ramzan",
      jobTitle: "Founder & CEO",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@fasteq.online",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.instagram.com/fasteq_/?utm_source=ig_web_button_share_sheet",
    "https://www.linkedin.com/company/fasteq1/",
    "https://x.com/fasteq",
  ],
  areaServed: "Worldwide",
  knowsAbout: [
    "Next.js Development",
    "AI Engineering",
    "UI/UX Design",
    "Cloud Infrastructure",
    "Software Architecture",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "FASTEQ",
  description: "Global Engineering & AI Architecture Studio",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/portfolio?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* JSON-LD: WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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