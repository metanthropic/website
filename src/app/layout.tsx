/* FILE: src/app/layout.tsx */
import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
    metadataBase: new URL('https://metanthropic.vercel.app'),

    title: {
        default: "Metanthropic | Building Safe & Beneficial AGI",
        template: "%s | Metanthropic",
    },

    description: "Metanthropic is an AI research laboratory dedicated to solving the physics of intelligence. We build verifiable, interpretable AGI systems where safety is an intrinsic property.",

    keywords: [
        "AI",
        "AGI",
        "Artificial General Intelligence",
        "Machine Learning",
        "AI Safety",
        "Interpretability",
        "Research",
        "Constitutional AI",
        "Mechanistic Interpretability",
        "AI Alignment",
        "Deep Learning",
        "Neural Networks"
    ],

    authors: [{ name: "Metanthropic Research Lab" }],
    creator: "Metanthropic",
    publisher: "Metanthropic",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://metanthropic.vercel.app",
        title: "Metanthropic | Building Safe & Beneficial AGI",
        description: "An AI research laboratory dedicated to solving the physics of intelligence through verifiable, interpretable systems.",
        siteName: "Metanthropic",
        images: [
            {
                url: "/images/og/og-home.png",
                width: 1200,
                height: 630,
                alt: "Metanthropic - Solving the Physics of Intelligence",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Metanthropic | Building Safe & Beneficial AGI",
        description: "Dedicated to solving the physics of intelligence through verifiable AI systems.",
        images: ["/images/og/og-home.png"],
        creator: "@ek10sh",
        site: "@ek10sh",
    },

    icons: {
        icon: "/favicon.png",
        shortcut: "/icon-small.png",
        apple: "/icon-small.png",
    },

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

    alternates: {
        canonical: 'https://metanthropic.vercel.app',
    },

    verification: {
        google: 'your-google-verification-code',
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
