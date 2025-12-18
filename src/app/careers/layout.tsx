import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join us in solving the most important technical challenges of our time. View open positions at Metanthropic.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
