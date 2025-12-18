import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Safety Approach",
  description: "How we approach the technical and ethical challenges of building reliable AI systems.",
};

export default function SafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
