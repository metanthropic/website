import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Thesis from '@/components/sections/Thesis';
import ResearchGrid from '@/components/sections/ResearchGrid';
import Footer from '@/components/sections/Footer';

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
