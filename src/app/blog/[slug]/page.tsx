import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import {
  getPostBySlug,
  getAllPostSlugs,
  getRelatedPosts,
  formatDate,
  stripHtml,
  getReadingTime,
} from "@/lib/wordpress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé | ZAIM DIGITAL",
    };
  }

  const excerpt = stripHtml(post.excerpt.rendered);

  return {
    title: `${stripHtml(post.title.rendered)} | ZAIM DIGITAL Blog`,
    description: excerpt.substring(0, 160),
    openGraph: {
      title: stripHtml(post.title.rendered),
      description: excerpt.substring(0, 160),
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [post._embedded["wp:featuredmedia"][0].source_url]
        : [],
    },
  };
}

export const revalidate = 3600;

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const author = post._embedded?.author?.[0];
  const categories = post._embedded?.["wp:term"]?.[0] || [];
  const readingTime = getReadingTime(post.content.rendered);

  const relatedPosts = await getRelatedPosts(post.id, post.categories, 3);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-6 py-16 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <Badge
                key={cat.id}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20"
              >
                {cat.name}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-8"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            {author && (
              <div className="flex items-center gap-3">
                {author.avatar_urls?.["48"] && (
                  <Image
                    src={author.avatar_urls["48"]}
                    alt={author.name}
                    width={40}
                    height={40}
                    unoptimized
                    className="rounded-full"
                  />
                )}
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{author.name}</span>
                </div>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <section className="px-6 lg:px-8 -mt-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={featuredImage.source_url}
                alt={featuredImage.alt_text || stripHtml(post.title.rendered)}
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <article
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-slate-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-ul:my-6 prose-li:my-2
              prose-img:rounded-xl prose-img:shadow-lg
              prose-blockquote:border-l-primary prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 py-16 lg:px-8 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Articles similaires
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => {
                const relatedImage = relatedPost._embedded?.["wp:featuredmedia"]?.[0];
                const relatedExcerpt = stripHtml(relatedPost.excerpt.rendered);

                return (
                  <Card
                    key={relatedPost.id}
                    className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1"
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="relative h-48 w-full overflow-hidden">
                        {relatedImage ? (
                          <Image
                            src={relatedImage.source_url}
                            alt={relatedImage.alt_text || relatedPost.title.rendered}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary to-blue-600">
                            <span className="text-3xl font-bold text-white/50">
                              {relatedPost.title.rendered.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <CardContent className="p-5">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <h3
                          className="font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors mb-2"
                          dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                        />
                      </Link>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {relatedExcerpt}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-primary px-6 py-16 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Besoin d'une solution digitale ?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contactez-nous pour discuter de votre projet et découvrir nos solutions.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 px-8 py-6 shadow-lg"
            asChild
          >
            <Link href="/contactez-nous">
              Nous contacter
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
