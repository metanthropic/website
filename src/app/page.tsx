/* FILE: src/app/page.tsx */
import type { Metadata } from "next";
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Thesis from '@/components/sections/Thesis';
import ResearchGrid from '@/components/sections/ResearchGrid';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: {
    absolute: "Metanthropic | Building Safe & Beneficial AGI"
  },
  description: "Metanthropic is an AI research lab focused on interpretability, safety, and the development of reliable artificial general intelligence architectures.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Thesis />
      <ResearchGrid />
      <Footer />
    </main>
  );
}
