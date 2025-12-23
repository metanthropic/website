/* FILE: src/app/policies/layout.tsx - UPDATE THE METADATA */
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

const POLICY_LINKS = [
  { label: 'Privacy Policy', href: '/policies/privacy' },
  { label: 'Responsible Disclosure', href: '/policies/disclosure' },
  { label: 'Terms: Commercial', href: '/policies/commercial-terms' },
  { label: 'Terms: Consumer', href: '/policies/terms' },
  { label: 'Usage Policy', href: '/policies/usage' },
];

export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        <aside className="md:col-span-3 hidden md:block sticky top-32 h-fit">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 px-3">
            Terms & Policies
          </div>
          <nav className="flex flex-col space-y-1">
            {POLICY_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-sm text-sm font-medium transition-colors block ${
                    isActive
                      ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-l-2 border-[#3B82F6]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </aside>


        <div className="md:col-span-9">
           <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-a:text-[#3B82F6] prose-p:text-gray-400 prose-li:text-gray-400 prose-strong:text-white">
              {children}
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
