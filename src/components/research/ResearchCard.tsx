'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ResearchCardProps {
  category: string;
  date: string;
  title: string;
  summary: string;
  link: string;
  // Add image prop (optional, so old data doesn't break)
  image?: string;
}

export default function ResearchCard({ category, date, title, summary, link, image }: ResearchCardProps) {
  return (
    <Link
      href={link}
      className="group flex flex-col h-full gap-4"
    >
      {/* --- THE IMAGE BOX (Borders & Background sit here now) --- */}
      <div className="relative aspect-[16/9] w-full bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden group-hover:border-[#3B82F6]/50 transition-all duration-500">

         {image ? (
           // 1. REAL IMAGE (If provided in data)
           <Image
             src={image}
             alt={title}
             fill
             className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
           />
         ) : (
           // 2. ABSTRACT PLACEHOLDER (Fallback if no image)
           <>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3B82F6_0%,transparent_40%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#0A0A0A)] opacity-30" />
           </>
         )}

         {/* Category Badge (Overlaid on image) */}
         <div className="absolute bottom-4 left-4 z-10">
            <span className="px-2 py-1 bg-[#030304]/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
              {category}
            </span>
         </div>
      </div>

      {/* --- THE TEXT CONTENT (No borders, sitting against page background) --- */}
      <div className="flex flex-col flex-grow px-1">
        <div className="text-xs text-gray-500 font-mono mb-3">{date}</div>

        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#3B82F6] transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4 flex-grow">
          {summary}
        </p>

        <div className="flex items-center text-[#3B82F6] text-xs font-bold uppercase tracking-widest gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
           Read Article <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}
