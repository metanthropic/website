import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "We are committed to ensuring that artificial general intelligence benefits all of humanity.",
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
