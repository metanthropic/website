import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Consumer Terms of Use for Metanthropic services. Scientific verification, content ownership, and usage restrictions for our interpretable AI systems.",

  openGraph: {
    title: "Terms of Use | Consumer Agreement",
    description: "Terms for using Metanthropic's consumer-facing interfaces and research demos.",
    images: [
      {
        url: "/images/og/og-policies.png",
        width: 1200,
        height: 630,
        alt: "Metanthropic Terms of Use",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms of Use",
    description: "Consumer terms for Metanthropic services.",
    images: ["/images/og/og-policies.png"],
  },

  alternates: {
    canonical: 'https://metanthropic.vercel.app/policies/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
