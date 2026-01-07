import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { getPosts, formatDate, stripHtml, getReadingTime } from "@/lib/wordpress";

export const metadata = {
  title: "Blog | ZAIM DIGITAL - Actualités et Conseils",
  description: "Découvrez nos articles sur le développement logiciel, la digitalisation des entreprises, les ERP et les solutions métiers.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const { posts } = await getPosts(12);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl animate-fade-in-slow" />
          <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-100/50 to-transparent blur-3xl animate-fade-in-slower" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl w-full animate-fade-in">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 text-primary px-6 py-2 text-sm font-medium"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              Blog
            </Badge>

            <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Actualités et{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                conseils d'experts
              </span>
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl font-light">
              Restez informé des dernières tendances en développement logiciel, digitalisation et solutions métiers.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative px-6 py-24 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
              const categories = post._embedded?.["wp:term"]?.[0] || [];
              const excerpt = stripHtml(post.excerpt.rendered);
              const readingTime = getReadingTime(post.content.rendered);

              return (
                <Card
                  key={post.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      {featuredImage ? (
                        <Image
                          src={featuredImage.source_url}
                          alt={featuredImage.alt_text || post.title.rendered}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary to-blue-600">
                          <span className="text-4xl font-bold text-white/50">
                            {post.title.rendered.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>

                  <CardContent className="p-6 space-y-4">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      {categories.slice(0, 2).map((cat) => (
                        <Badge
                          key={cat.id}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                        >
                          {cat.name}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`}>
                      <h2
                        className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </Link>

                    {/* Excerpt */}
                    <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed">
                      {excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{readingTime} min</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                    >
                      Lire l'article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
