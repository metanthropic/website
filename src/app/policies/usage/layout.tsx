/* FILE: src/app/policies/usage/layout.tsx - NEW FILE */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usage Policy",
  description: "Acceptable use policy for Metanthropic models. Universal prohibitions, high-risk use cases, Glass Box requirements, and enforcement procedures.",

  openGraph: {
    title: "Usage Policy | Acceptable Use",
    description: "Boundaries between safe discovery and dangerous misuse of Metanthropic AI systems.",
    images: [
      {
        url: "/images/og/og-policies.png",
        width: 1200,
        height: 630,
        alt: "Metanthropic Usage Policy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Usage Policy",
    description: "AI built to benefit humanity.",
    images: ["/images/og/og-policies.png"],
  },

  alternates: {
    canonical: 'https://metanthropic.vercel.app/policies/usage',
  },
};

export default function UsageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
