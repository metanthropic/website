/* FILE: src/app/layout.tsx */
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  // 1. Base URL for all relative links (images, og:url)
  metadataBase: new URL('https://metanthropic.vercel.app'),

  // 2. Title Template: "Page Name | Metanthropic"
  title: {
    default: "Metanthropic",
    template: "%s | Metanthropic",
  },

  description: "An research organization dedicated to safe and broadly beneficial Artificial General Intelligence.",

  keywords: ["AI", "AGI", "Machine Learning", "Safety", "Interpretability", "Research", "Metanthropic"],

  authors: [{ name: "Metanthropic Lab" }],
  creator: "Metanthropic Lab",

  // 3. Open Graph (Facebook, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://metanthropic.vercel.app",
    title: "Metanthropic",
    description: "Building safe and broadly beneficial Artificial General Intelligence.",
    siteName: "Metanthropic",
    images: [
      {
        url: "/images/announcement.png", // Uses your existing branding image
        width: 1200,
        height: 630,
        alt: "Metanthropic Research Lab",
      },
    ],
  },

  // 4. Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Metanthropic",
    description: "Dedicated to safe and broadly beneficial AGI.",
    images: ["/images/announcement.png"],
    creator: "@metanthropic", // Update if your handle is different
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  // 5. Robots (Ensure Google indexes you)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased bg-[#030304]`}>
        {children}
      </body>
    </html>
  );
}
