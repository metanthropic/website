import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore our latest publications on AI safety, model interpretability, and dataset distillation.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
