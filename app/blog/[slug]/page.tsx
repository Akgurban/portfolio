import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog';
import { BlogPostingJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, ['title', 'excerpt', 'coverImage', 'date', 'author', 'category', 'tags']);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Akgurban`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, ['title', 'excerpt', 'coverImage', 'date', 'author', 'category', 'tags', 'content']);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      {/* Structured Data */}
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        author={post.author}
        image={post.coverImage}
        url={`https://akgurban.vercel.app/blog/${post.slug}`}
        keywords={post.tags}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://akgurban.vercel.app' },
          { name: 'Blog', url: 'https://akgurban.vercel.app/blog' },
          { name: post.title, url: `https://akgurban.vercel.app/blog/${post.slug}` },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <article className="container mx-auto px-4 py-16 md:py-24">
        {/* Back button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            {post.coverImage && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </header>

          <Separator className="mb-12" />

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content || ''}</ReactMarkdown>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="text-center text-muted-foreground">
              <p>Written by {post.author}</p>
              <p className="text-sm mt-2">Published on {format(new Date(post.date), 'MMMM d, yyyy')}</p>
            </div>
          </footer>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-16 border-t">
              <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {relatedPost.category}
                      </Badge>
                      <span>•</span>
                      <span>{relatedPost.readingTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </div>
    </>
  );
}