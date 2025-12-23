/* FILE: src/app/policies/commercial-terms/layout.tsx - NEW FILE */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Terms",
  description: "Commercial API Terms of Service. Zero-training data guarantee, safety compliance, SLAs, and enterprise indemnification for Metanthropic's API platform.",

  openGraph: {
    title: "Commercial Terms | API Agreement",
    description: "Enterprise terms for Metanthropic API users. Zero-training guarantee and safety-first architecture.",
    images: [
      {
        url: "/images/og/og-policies.png",
        width: 1200,
        height: 630,
        alt: "Metanthropic Commercial Terms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Terms",
    description: "API terms with zero-training data guarantee.",
    images: ["/images/og/og-policies.png"],
  },

  alternates: {
    canonical: 'https://metanthropic.vercel.app/policies/commercial-terms',
  },
};

export default function CommercialTermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
