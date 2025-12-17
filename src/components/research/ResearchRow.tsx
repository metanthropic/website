import Link from 'next/link';

interface ResearchRowProps {
  category: string;
  date: string;
  title: string;
  summary: string;
  link: string;
}

export default function ResearchRow({ category, date, title, summary, link }: ResearchRowProps) {
  return (
    <Link
      href={link}
      className="group py-8 border-b border-white/10 hover:border-[#3B82F6]/50 transition-colors grid md:grid-cols-12 gap-4 items-start"
    >
      {/* Col 1: Metadata */}
      <div className="md:col-span-3 space-y-2">
        <div className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">
          {category}
        </div>
        <div className="text-sm text-gray-500 font-mono">
          {date}
        </div>
      </div>

      {/* Col 2: Content */}
      <div className="md:col-span-9">
        <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 font-light leading-relaxed max-w-3xl line-clamp-2">
          {summary}
        </p>
      </div>
    </Link>
  );
}
