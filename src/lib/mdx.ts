/* FILE: src/lib/mdx.ts */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/research');

export interface PostMeta {
  title: string;
  date: string;
  tags: string[];
  authors: string[];
  summary: string;
  slug?: string;
  image?: string;
  imageCaption?: string;
  // NEW: Generic action buttons (e.g., "Read Charter", "View Code")
  paperUrl?: string;     // Kept for backward compatibility
  actionUrl?: string;    // New field for custom links
  actionLabel?: string;  // New field for custom button text
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    meta: data as PostMeta,
    content
  };
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);

  const posts = files
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return { slug, meta: data as PostMeta, content: '' };
    });

  return posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}
