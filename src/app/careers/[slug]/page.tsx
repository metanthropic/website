'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Share2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { JOB_POSTS } from '@/lib/jobs-data';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export default function JobPostPage({ params }: PageProps) {
  // Find the job data
  const job = JOB_POSTS.find((p) => p.slug === params.slug);

  if (!job) {
    notFound(); // Returns 404 if slug doesn't match
  }

  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6">

        {/* BREADCRUMB */}
        <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white mb-12 transition-colors">
           <ArrowLeft size={16} /> Back to Careers
        </Link>

        {/* 1. HEADER */}
        <header className="mb-12 border-b border-white/10 pb-12">
           <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">{job.title}</h1>
           <div className="text-lg text-gray-400 mb-8 font-light">
              {job.team} — {job.location}
           </div>

           <div className="flex gap-4">
              <button className="bg-[#3B82F6] text-white px-8 py-3 rounded-sm font-bold hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
                 Apply now <ArrowUpRight size={16} />
              </button>
              <button className="border border-white/20 text-white px-4 py-3 rounded-sm hover:bg-white/10 transition-colors">
                 <Share2 size={20} />
              </button>
           </div>

           <p className="mt-6 text-xs text-gray-500">
             (opens in a new window) By applying to this role, you will be considered for similar roles across all teams at Metanthropic.
           </p>
        </header>

        {/* 2. JOB DESCRIPTION */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-gray-400 prose-li:text-gray-400">

           <h3>About the Role</h3>
           <p className="whitespace-pre-line leading-relaxed">
             {job.description}
           </p>

           <h3>We expect you to:</h3>
           <ul>
             {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
             ))}
           </ul>

           <h3>Nice to have:</h3>
           <ul>
             {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
             ))}
           </ul>

           {/* 3. ABOUT METANTHROPIC */}
           <div className="my-16 pt-12 border-t border-white/10">
             <h3>About Metanthropic</h3>
             <p>
               Metanthropic is an AI research and deployment company dedicated to ensuring that general-purpose artificial intelligence benefits all of humanity. We push the boundaries of the capabilities of AI systems and seek to safely deploy them to the world through our products. AI is an extremely powerful tool that must be created with safety and human needs at its core.
             </p>
             <p>
               We are an equal opportunity employer, and we do not discriminate on the basis of race, religion, color, national origin, sex, sexual orientation, age, veteran status, disability, genetic information, or other applicable legally protected characteristic.
             </p>
             <p className="text-sm italic opacity-70">
               For additional information, please see Metanthropic’s Affirmative Action and Equal Employment Opportunity Policy Statement.
             </p>
           </div>

           {/* 4. LEGAL / BACKGROUND CHECK */}
           <div className="text-xs text-gray-600 space-y-4 mb-16">
              <p>
                Background checks for applicants will be administered in accordance with applicable law, and qualified applicants with arrest or conviction records will be considered for employment consistent with those laws, including the San Francisco Fair Chance Ordinance and the California Fair Chance Act.
              </p>
              <p>
                To notify Metanthropic that you believe this job posting is non-compliant, please submit a report. We are committed to providing reasonable accommodations to applicants with disabilities.
              </p>
              <p className="font-bold text-[#3B82F6]">
                Metanthropic Global Applicant Privacy Policy
              </p>
           </div>

           {/* 5. CLOSING STATEMENT */}
           <div className="bg-[#121214] p-8 rounded-sm border-l-2 border-[#3B82F6] my-12">
              <p className="text-white font-medium text-lg mb-2">
                At Metanthropic, we believe artificial intelligence has the potential to help people solve immense global challenges.
              </p>
              <p className="text-gray-400">
                Join us in shaping the future of technology.
              </p>
           </div>

           {/* 6. COMPENSATION & FINAL CTA */}
           <div className="not-prose border-t border-white/10 pt-8 mt-12">
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Compensation</div>
              <div className="text-3xl font-serif text-white mb-8">
                 {job.salary}
              </div>
              <button className="bg-[#3B82F6] text-white px-12 py-4 rounded-sm font-bold hover:bg-blue-600 transition-colors inline-flex items-center gap-2 text-lg">
                 Apply now <ArrowUpRight size={20} />
              </button>
           </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
