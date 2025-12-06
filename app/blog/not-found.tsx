import Link from 'next/link';
import { ArrowLeft, FileX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-8">
          <FileX className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the blog post you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="gap-2">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    </div>
  );
}