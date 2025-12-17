import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ShareButton from '@/components/ui/ShareButton';
import { Linkedin, Twitter, PlayCircle } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// 1. Generate Static Params (Builds all pages at build time)
export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

// 2. The Page Component
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let post;
    try {
        post = await getPostBySlug(slug);
    } catch (e) {
        notFound();
    }

    const { meta, content } = post;

    return (
        <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
            <Navbar />

            <main className="pt-32 pb-20">

                {/* 1. CENTERED HEADER */}
                <header className="max-w-4xl mx-auto px-6 mb-16 text-center flex flex-col items-center">

                    {/* Top Meta: Date & Categories */}
                    <div className="flex items-center gap-3 mb-6 text-xs font-medium uppercase tracking-widest text-gray-500">
                        <span>{meta.date}</span>
                        {meta.tags && meta.tags.map((tag, i) => (
                            <React.Fragment key={tag}>
                                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                                <span className={i === 0 ? "text-[#3B82F6]" : ""}>{tag}</span>
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-white max-w-3xl">
                        {meta.title}
                    </h1>

                    {/* Subtitle / Summary */}
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-10 max-w-2xl">
                        {meta.summary}
                    </p>

                    {/* Action Bar */}
                    <div className="w-full max-w-3xl border-y border-white/10 py-4 flex justify-between items-center text-sm text-gray-400">
                        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <PlayCircle size={16} />
                            <span>Listen to Mission (3 min)</span>
                        </div>

                        {/* Dynamic Share Button */}
                        <ShareButton title={meta.title} />
                    </div>
                </header>

                {/* 2. OPTIONAL: HERO IMAGE */}
                <section className="max-w-5xl mx-auto px-6 mb-24">
                    <div className="relative aspect-[21/9] bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden group">
                        <Image
                            src="/images/announcement.png" // Path to your image
                            alt={meta.title}
                            fill
                            priority
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 1280px) 100vw, 1280px"
                        />

                        {/* Visual Overlay Effects */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0a0a00,#0a0a0a)] z-10 opacity-60 pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3B82F6_0%,transparent_70%)] opacity-20 pointer-events-none" />
                    </div>
                    <div className="text-center text-xs text-gray-600 font-mono mt-4">
                        FIG 1: THE COHERENCE HORIZON
                    </div>
                </section>

                {/* 3. MARKDOWN CONTENT */}
                {/* ADDED CLASS: prose-strong:text-white */}
                <article className="max-w-2xl mx-auto px-6 prose prose-invert prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:text-gray-400 prose-p:leading-relaxed prose-a:text-[#3B82F6] prose-li:text-gray-400 prose-strong:text-white prose-strong:font-bold">
                    <MDXRemote source={content} />

                    {/* 4. BOTTOM METADATA (Author) */}
                    <div className="not-prose mt-24 pt-12 border-t border-white/10">
                        {/* Tags Pills */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {meta.tags && meta.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-full hover:bg-white/20 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Author Section */}
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Author</div>
                                <div className="flex items-center gap-3">
                                    <span className="text-white border-b border-white/30 pb-0.5 hover:border-white cursor-pointer transition-all">
                                        {meta.author}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Connect</div>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/ekjot-singh-153110268" target='_blank' className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                                    <a href="https://x.com/ek10sh" target='_blank' className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

            </main>
            <Footer />
        </div>
    );
}
