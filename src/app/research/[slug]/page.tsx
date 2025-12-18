/* FILE: src/app/research/[slug]/page.tsx */
import React from 'react';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import ShareButton from '@/components/ui/ShareButton';
import { Linkedin, Twitter } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { AUTHORS } from '@/lib/author-data';
import { MDXButton } from '@/components/mdx/MDXButton';
import TextToSpeech from '@/components/ui/TextToSpeech';

const components = {
  MDXButton,
  Button: MDXButton,
  Image,
};

// --- DYNAMIC SEO METADATA ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const post = await getPostBySlug(slug);
        return {
            title: post.meta.title,
            description: post.meta.summary,
            openGraph: {
                title: post.meta.title,
                description: post.meta.summary,
                images: [post.meta.image || '/images/announcement.png'],
                type: 'article',
                publishedTime: post.meta.date,
            },
            twitter: {
                card: 'summary_large_image',
                title: post.meta.title,
                description: post.meta.summary,
                images: [post.meta.image || '/images/announcement.png'],
            }
        };
    } catch (e) {
        return { title: 'Post Not Found' };
    }
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

// --- HELPER: CLEAN MDX FOR SPEECH ---
function cleanMDXForSpeech(mdxContent: string): string {
    return mdxContent
        // 1. Add period after headers so they don't merge with body text
        .replace(/^(#+\s+.*)$/gm, '$1. ')
        .replace(/^#+\s+/gm, '')
        // 2. Remove formatting
        .replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/```[\s\S]*?```/g, '')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
        .replace(/<[^>]*>/g, '')
        // 3. Replace newlines with periods to force natural sentence breaks
        .replace(/\n+/g, '. ')
        // 4. Cleanup multiple spaces/dots
        .replace(/\s+/g, ' ')
        .replace(/\.\./g, '.')
        .trim();
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let post;
    try {
        post = await getPostBySlug(slug);
    } catch (e) {
        notFound();
    }

    const { meta, content } = post;
    const postAuthors = (meta.authors || []).map(id => AUTHORS[id]).filter(Boolean);

    // Prepare combined text for the speech engine
    const articleBody = cleanMDXForSpeech(content);
    const spokenText = `Title: ${meta.title}. Summary: ${meta.summary}. ${articleBody}`;

    // Logic for the primary action button
    const primaryLink = meta.paperUrl || meta.actionUrl;
    const primaryLabel = meta.paperUrl ? "Read paper" : (meta.actionLabel || "View Resource");

    return (
        <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
            <Navbar />

            <main className="pt-32 pb-20">
                <header className="max-w-4xl mx-auto px-6 mb-12 text-center flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-6 text-xs font-medium uppercase tracking-widest text-gray-500">
                        <span>{meta.date}</span>
                        {meta.tags && meta.tags.map((tag, i) => (
                            <React.Fragment key={tag}>
                                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                                <span className={i === 0 ? "text-[#3B82F6]" : ""}>{tag}</span>
                            </React.Fragment>
                        ))}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-white max-w-3xl">
                        {meta.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-10 max-w-2xl">
                        {meta.summary}
                    </p>

                    {primaryLink && (
                        <a
                            href={primaryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors mb-10"
                        >
                            {primaryLabel}
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L9.35355 6.35355C9.15829 6.54882 8.84171 6.54882 8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    )}

                    <div className="w-full max-w-3xl border-y border-white/10 py-4 flex justify-between items-center text-sm text-gray-400">
                        <TextToSpeech text={spokenText} />
                        <ShareButton title={meta.title} />
                    </div>
                </header>

                <section className="max-w-5xl mx-auto px-6 mb-24">
                    <div className="relative aspect-[21/9] bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden group">
                        <Image
                            src={meta.image || "/images/announcement.png"}
                            alt={meta.title}
                            fill
                            priority
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 1280px) 100vw, 1280px"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0a0a00,#0a0a0a)] z-10 opacity-60 pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3B82F6_0%,transparent_70%)] opacity-20 pointer-events-none" />
                    </div>
                    <div className="text-center text-xs text-gray-600 font-mono mt-4 uppercase tracking-wider">
                        {meta.imageCaption || "Figure 1"}
                    </div>
                </section>

                <article className="max-w-2xl mx-auto px-6 prose prose-invert prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:text-gray-400 prose-p:leading-relaxed prose-a:text-[#3B82F6] prose-li:text-gray-400 prose-strong:text-white prose-strong:font-bold">
                    <MDXRemote source={content} components={components} />

                    <div className="not-prose mt-24 pt-12 border-t border-white/10">
                        <div className="flex flex-wrap gap-2 mb-12">
                            {meta.tags && meta.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-full hover:bg-white/20 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Author</div>
                                <div className="flex flex-col gap-2">
                                    <div className="text-white text-lg font-serif">
                                        {postAuthors.map((author, index) => (
                                            <React.Fragment key={author.name}>
                                                <a
                                                    href={author.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="border-b border-white/30 hover:border-white transition-all hover:text-[#3B82F6]"
                                                >
                                                    {author.name}
                                                </a>
                                                {index < postAuthors.length - 1 && <span className="text-gray-500 mx-2">&</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {postAuthors.map(a => a.role).filter(Boolean).join(" • ")}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Connect</div>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/company/metanthropic/" target='_blank' className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                                    <a href="https://twitter.com/metanthropic" target='_blank' className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
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
