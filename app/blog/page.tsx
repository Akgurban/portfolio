import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { getAllPosts, getAllCategories, getFeaturedPosts } from '@/lib/blog';
import { formatDistanceToNow } from 'date-fns';

export const metadata: Metadata = {
  title: 'Blog - Akgurban',
  description: 'Read my latest thoughts on web development, TypeScript, React, and modern programming practices.',
  openGraph: {
    title: 'Blog - Akgurban',
    description: 'Read my latest thoughts on web development, TypeScript, React, and modern programming practices.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Akgurban',
    description: 'Read my latest thoughts on web development, TypeScript, React, and modern programming practices.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            My Blog
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thoughts, tutorials, and insights about modern web development
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="text-sm">
              {posts.length} Articles
            </Badge>
            <Badge variant="outline" className="text-sm">
              {categories.length} Categories
            </Badge>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.slice(0, 2).map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                      </time>
                      <Separator orientation="vertical" className="h-4" />
                      <Clock className="w-4 h-4" />
                      <span>{post.readingTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-3">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}

        <Separator className="mb-16" />

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8">All Posts</h2>
          <div className="grid gap-6">
            {posts.map((post, index) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                        </time>
                        <Separator orientation="vertical" className="h-4" />
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                    </div>
                    {post.featured && (
                      <Badge variant="default" className="shrink-0">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-3">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`} className="gap-1">
                        Read
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        {categories.length > 0 && (
          <section className="mt-16 pt-16 border-t">
            <h2 className="text-2xl font-bold mb-8">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button key={category} variant="outline" asChild>
                  <Link href={`/blog?category=${encodeURIComponent(category.toLowerCase())}`}>
                    {category}
                  </Link>
                </Button>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}