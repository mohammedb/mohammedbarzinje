import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { MotionProvider } from "@/components/ui/motion-provider";
import { Toaster } from "@/components/ui/toast";
import { configBootScript } from "@/lib/config";
import { sharedOpenGraph, siteConfig } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Only used for the italic "ship." in the hero headline
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Mohammed Barzinje",
    "Product Manager",
    "Senior Product Manager",
    "Product Manager Norway",
    "Product Lead",
    "Head of Product",
    "AI Product Manager",
    "Digital Product Manager",
    "Product Management",
    "Product Strategy",
    "Product Roadmap",
    "Stakeholder Management",
    "Esports Product Manager",
    "Marketplace Product Manager",
    "Esports World Cup",
    "ESL FACEIT Group",
    "Ditt Eventyr",
    "Enkelt.ai",
    "Riddle Esports",
    "ReddMaten",
    "Norway",
    "Sarpsborg",
    "Østfold",
    "Startup Founder",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  // Share images come from app/opengraph-image.tsx
  openGraph: {
    ...sharedOpenGraph,
    type: "profile",
    firstName: "Mohammed",
    lastName: "Barzinje",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  // No title, description or image here: Next.js copies them from each page's openGraph
  twitter: {
    card: "summary_large_image",
    creator: "@kekmekn",
    site: "@kekmekn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
  // verification: { google: "...", other: { "msvalidate.01": "..." } },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: configBootScript }} />
      </head>
      <body className="antialiased">
        <MotionProvider>
          <SmoothScroll />
          <ScrollProgress />
          {children}
          <CookieBanner />
          <Toaster />
        </MotionProvider>
      </body>
    </html>
  );
}
