/* FILE: src/app/policies/disclosure/layout.tsx - NEW FILE */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Disclosure",
  description: "Guidelines for security researchers and ethical hackers. Safe Harbor policy, reporting procedures, and scope for vulnerability disclosure at Metanthropic.",

  openGraph: {
    title: "Responsible Disclosure | Security Research",
    description: "Safe Harbor for security researchers. Report vulnerabilities and help us build safer AI.",
    images: [
      {
        url: "/images/og/og-policies.png",
        width: 1200,
        height: 630,
        alt: "Metanthropic Responsible Disclosure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Responsible Disclosure",
    description: "We welcome security researchers.",
    images: ["/images/og/og-policies.png"],
  },

  alternates: {
    canonical: 'https://metanthropic.vercel.app/policies/disclosure',
  },
};

export default function DisclosureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
