const WORDPRESS_API_URL = "https://update.zaimdigital.com/wp-json/wp/v2";

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  author: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export async function getPosts(perPage: number = 10, page: number = 1): Promise<{ posts: WPPost[]; totalPages: number }> {
  const res = await fetch(
    `${WORDPRESS_API_URL}/posts?per_page=${perPage}&page=${page}&_embed`,
    { next: { revalidate: 3600 } } // Revalidate every hour
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);

  return { posts, totalPages };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(
    `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return null;
  }

  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(
      `${WORDPRESS_API_URL}/posts?per_page=100&page=${page}&_fields=slug`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) break;

    const posts = await res.json();
    slugs.push(...posts.map((p: { slug: string }) => p.slug));

    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
    hasMore = page < totalPages;
    page++;
  }

  return slugs;
}

export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(
    `${WORDPRESS_API_URL}/categories?per_page=50`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export async function getRelatedPosts(currentPostId: number, categoryIds: number[], limit: number = 3): Promise<WPPost[]> {
  if (categoryIds.length === 0) return [];

  const res = await fetch(
    `${WORDPRESS_API_URL}/posts?categories=${categoryIds.join(",")}&exclude=${currentPostId}&per_page=${limit}&_embed`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getReadingTime(content: string): number {
  const text = stripHtml(content);
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Sanitize WordPress content to fix HTTP links and update old URLs
 */
export function sanitizeContent(content: string): string {
  let sanitized = content;

  // Convert HTTP links to HTTPS for zaimdigital.com domain
  sanitized = sanitized.replace(/http:\/\/(www\.)?zaimdigital\.com/g, "https://www.zaimdigital.com");

  // Fix old labcorp subdomain links
  sanitized = sanitized.replace(/http:\/\/labcorp\.zaimdigital\.com\/?/g, "https://www.zaimdigital.com/nos_produits/labcorp-laboratoire-btp");
  sanitized = sanitized.replace(/https:\/\/labcorp\.zaimdigital\.com\/?/g, "https://www.zaimdigital.com/nos_produits/labcorp-laboratoire-btp");

  // Fix old smoothfix subdomain links
  sanitized = sanitized.replace(/http:\/\/smoothfix\.zaimdigital\.com\/?/g, "https://www.zaimdigital.com/nos_produits/smoothfix-gmao");
  sanitized = sanitized.replace(/https:\/\/smoothfix\.zaimdigital\.com\/?/g, "https://www.zaimdigital.com/nos_produits/smoothfix-gmao");

  // Fix old contact page URL
  sanitized = sanitized.replace(/https:\/\/www\.zaimdigital\.com\/contact\/?/g, "https://www.zaimdigital.com/contactez-nous");

  return sanitized;
}
