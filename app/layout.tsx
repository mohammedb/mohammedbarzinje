import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { CustomCursor } from "@/components/ui/cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "Mohammed Barzinje",
  title: "Mohammed Barzinje | Senior Product Manager in Norway",
  description:
    "Senior Product Manager based in Norway with 10+ years experience in digital products, esports ecosystems, and marketplace development. Expert in agile methodologies, stakeholder management, and product strategy. Founder of ReddMaten & Riddle Esports.",
  url: "https://mohammedbarzinje.com",
  ogImage: "/og-image.png",
  links: {
    email: "mailto:mohammedbarzinje@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammed-barzinje-9237b5a5/",
  },
};

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
    "Digital Product Manager",
    "Product Management",
    "Product Strategy",
    "Agile Product Manager",
    "Tech Product Manager",
    "Stakeholder Management",
    "Product Roadmap",
    "User Experience",
    "Esports Product Manager",
    "Marketplace Product Manager",
    "Riddle Esports",
    "ReddMaten",
    "Norway",
    "Oslo",
    "Digital Products",
    "Entrepreneur",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@mohammedbarzinje",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <SmoothScroll />
        <ScrollProgress />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
