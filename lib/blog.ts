import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import readingTime from 'reading-time';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: string;
  content?: string;
  mdxSource?: MDXRemoteSerializeResult;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(fields: string[] = []): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.md$/, ''), fields))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string, fields: string[] = []): Post | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Post = {
    slug: realSlug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    coverImage: data.coverImage || undefined,
    date: data.date || '',
    author: data.author || '',
    category: data.category || '',
    tags: data.tags || [],
    featured: data.featured || false,
    readingTime: readingTime(content).text,
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'content') {
      (items as any)[field] = content;
    }
    if (field === 'mdxSource') {
      // This will be populated elsewhere
      return;
    }
    if (data[field] !== undefined) {
      (items as any)[field] = data[field];
    }
  });

  return items;
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts(['title', 'excerpt', 'coverImage', 'date', 'author', 'category', 'tags', 'slug', 'readingTime'])
    .filter(post => post.featured);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts(['title', 'excerpt', 'coverImage', 'date', 'author', 'category', 'tags', 'slug', 'readingTime'])
    .filter(post => post.category.toLowerCase() === category.toLowerCase());
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts(['title', 'excerpt', 'coverImage', 'date', 'author', 'category', 'tags', 'slug', 'readingTime'])
    .filter(post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
}

export function getAllCategories(): string[] {
  const posts = getAllPosts(['category']);
  const categories = [...new Set(posts.map(post => post.category))];
  return categories.sort();
}

export function getAllTags(): string[] {
  const posts = getAllPosts(['tags']);
  const tags = posts.flatMap(post => post.tags);
  const uniqueTags = [...new Set(tags)];
  return uniqueTags.sort();
}

export function getRecentPosts(count: number = 3): Post[] {
  return getAllPosts(['title', 'excerpt', 'coverImage', 'date', 'author', 'category', 'tags', 'slug', 'readingTime'])
    .slice(0, count);
}

export function getRelatedPosts(currentPost: Post, count: number = 3): Post[] {
  const allPosts = getAllPosts(['title', 'excerpt', 'coverImage', 'date', 'author', 'category', 'tags', 'slug', 'readingTime'])
    .filter(post => post.slug !== currentPost.slug);

  // Calculate related score based on common tags and category
  const scoredPosts = allPosts.map(post => {
    let score = 0;

    // Score based on common tags
    const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    score += commonTags.length * 2;

    // Score based on same category
    if (post.category === currentPost.category) {
      score += 3;
    }

    return { post, score };
  });

  // Sort by score and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(item => item.post);
}