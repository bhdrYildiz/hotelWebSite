import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { getAllBlogPosts, getBlogPostBySlug } from "@/app/data/blogPosts";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BlogSidebar from "@/app/blog/BlogSidebar";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import PageHero from "@/app/components/PageHero";

const BASE_URL = "https://www.yildizhotelcappadocia.com";

type PageParams = { slug: string };

function formatDateBadge(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return { day: "--", monthYear: "--" };
  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = d.getFullYear().toString().slice(-2);
  return { day, monthYear: `${month} ${year}` };
}

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const url = `${BASE_URL}/blog/${post.slug}`;
  const ogImage =
    post.coverImage.startsWith("http") ? post.coverImage : `${BASE_URL}${post.coverImage}`;

  return {
    title: `${post.title} | Yıldız Otel Ürgüp`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Yıldız Otel Ürgüp`,
      description: post.excerpt,
      url,
      siteName: "Yıldız Otel Kapadokya",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      locale: "tr_TR",
      type: "article",
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<PageParams> }
) {
  const { slug } = await params;

  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((x) => x.slug === post.slug);
  const newerPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined;
  const previousPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : undefined;

  const allTags = Array.from(new Set(allPosts.flatMap((x) => x.tags ?? []))).sort((a, b) =>
    a.localeCompare(b, "tr")
  );
  const allCategories = Array.from(new Set(allPosts.flatMap((x) => x.categories ?? []))).sort(
    (a, b) => a.localeCompare(b, "tr")
  );
  const recentPosts = allPosts.slice(0, 3).map((x) => ({
    slug: x.slug,
    title: x.title,
    coverImage: x.coverImage,
    author: x.author,
    publishedAt: x.publishedAt,
  }));

  const badge = formatDateBadge(post.publishedAt);
  const metaTags = (post.tags ?? []).slice(0, 4);
  const shareUrl = `${BASE_URL}/blog/${post.slug}`;
  return (
    <>
      <Header />
      <main className="bg-white font-cormorant">
        <PageHero
          title="BLOG"
          subtitle="- SİZİN İÇİN HAZIRLADIĞIMIZ BLOG YAZILARI -"
          backgroundImage="/images/turlar/tur27.jpg"
          breadcrumbs={[
            { label: "ANA SAYFA", href: "/" },
            { label: "BLOG", href: "/blog" },
            { label: post.title },
          ]}
        />

        <section className="py-20 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-12 lg:gap-16 items-start">
              <div>
                <div className="mb-8">
                  <Link
                    href="/blog"
                    className="text-sm tracking-wider text-[#ab9a8b] hover:underline"
                  >
                    ← Blog’a dön
                  </Link>
                </div>

                <article>
                  <div className="relative">
                    <div className="relative h-[260px] md:h-[420px] overflow-hidden bg-gray-100">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute left-6 top-6 w-[84px] h-[84px] bg-[#ab9a8b] text-white flex flex-col items-center justify-center">
                      <div className="text-4xl font-light leading-none">{badge.day}</div>
                      <div className="mt-1 text-xs tracking-widest bg-[#1c2c34] px-2 py-1 w-full text-center">
                        {badge.monthYear}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      {post.author ?? "Yıldız Otel Ürgüp"}
                      <span className="mx-3">·</span>
                      {metaTags.length ? metaTags.join(", ") : "Kapadokya"}
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-black leading-tight">
                      {post.title}
                    </h2>

                    <div className="h-px w-16 bg-[#ab9a8b] mt-5" />

                    <div className="mt-8 text-gray-700 leading-relaxed">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({ children }) => (
                            <h2 className="text-2xl md:text-3xl font-semibold text-black/90 mt-10 mb-4">
                              {children}
                            </h2>
                          ),

                          h2: ({ children }) => (
                            <h2 className="text-2xl md:text-3xl font-semibold text-black/90 mt-10 mb-4">
                              {children}
                            </h2>
                          ),

                          h3: ({ children }) => (
                            <h3 className="text-xl md:text-2xl font-semibold text-black/90 mt-8 mb-3">
                              {children}
                            </h3>
                          ),

                          p: ({ children }) => <p className="text-black/90 font-bold mb-5">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc text-black/90 font-bold pl-6 mb-5">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal text-black/90 font-bold pl-6 mb-5">{children}</ol>,
                          li: ({ children }) => <li className="mb-2 font-bold text-black/90">{children}</li>,
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 font-bold border-[#ab9a8b] pl-4 italic text-black/90 my-6">
                              {children}
                            </blockquote>
                          ),
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              className="text-[#ab9a8b] underline underline-offset-4 hover:text-[#1c2c34]"
                              rel={href?.startsWith("http") ? "noreferrer noopener" : undefined}
                              target={href?.startsWith("http") ? "_blank" : undefined}
                            >
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {post.content}
                      </ReactMarkdown>

                    </div>

                    <div className="mt-14 pt-10 border-t border-black/10">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <span className="text-sm tracking-[0.25em] text-[#1c2c34] uppercase">
                          Paylaş:
                        </span>
                        <div className="flex items-center gap-3">
                          {[
                            {
                              href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                shareUrl
                              )}`,
                              label: "Facebook",
                              icon: <FaFacebookF />,
                            },
                            {
                              href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                shareUrl
                              )}&text=${encodeURIComponent(post.title)}`,
                              label: "Twitter",
                              icon: <FaTwitter />,
                            },
                            {
                              href: "https://www.instagram.com/urgupyildizhotel/",
                              label: "Instagram",
                              icon: <FaInstagram />,
                            },
                            {
                              href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                shareUrl
                              )}`,
                              label: "LinkedIn",
                              icon: <FaLinkedinIn />,
                            },
                          ].map((s) => (
                            <a
                              key={s.label}
                              href={s.href}
                              aria-label={s.label}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-11 w-11 rounded-full border border-black/10 grid place-items-center text-[#1c2c34] hover:border-[#ab9a8b] hover:text-[#ab9a8b] transition"
                            >
                              <span className="text-sm">{s.icon}</span>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="mt-10 bg-black/[0.04] border border-black/10 p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          <div className="flex items-center gap-5">
                            {previousPost ? (
                              <>
                                <Link
                                  href={`/blog/${previousPost.slug}`}
                                  className="relative w-24 h-24 overflow-hidden bg-gray-100 shrink-0"
                                  aria-label="Previous post"
                                >
                                  <Image
                                    src={previousPost.coverImage}
                                    alt={previousPost.title}
                                    fill
                                    sizes="96px"
                                    className="object-cover"
                                  />
                                </Link>
                                <Link
                                  href={`/blog/${previousPost.slug}`}
                                  className="min-w-0 group"
                                  aria-label={`Previous post: ${previousPost.title}`}
                                >
                                  <p className="text-xs uppercase tracking-[0.25em] text-[#ab9a8b]">
                                    Önceki Yazı
                                  </p>
                                  <div className="h-px w-16 bg-[#ab9a8b] mt-2 group-hover:w-24 transition-all duration-300" />
                                </Link>
                              </>
                            ) : (
                              <div className="text-xs text-gray-500 tracking-[0.25em] uppercase">
                                Önceki Yazı
                                <div className="h-px w-16 bg-[#ab9a8b] mt-2" />
                              </div>
                            )}
                          </div>

                          <div className="flex items-center justify-start md:justify-end gap-5">
                            {newerPost ? (
                              <Link
                                href={`/blog/${newerPost.slug}`}
                                className="min-w-0 text-left md:text-right group"
                                aria-label={`Newer post: ${newerPost.title}`}
                              >
                                <p className="text-xs uppercase tracking-[0.25em] text-[#ab9a8b]">
                                  Sonraki Yazı
                                </p>
                                <div className="h-px w-16 bg-[#ab9a8b] mt-2 md:ml-auto group-hover:w-24 transition-all duration-300" />
                              </Link>
                            ) : (
                              <div className="text-xs text-gray-500 tracking-[0.25em] uppercase text-left md:text-right">
                                Sonraki Yazı
                                <div className="h-px w-16 bg-[#ab9a8b] mt-2 md:ml-auto" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <BlogSidebar categories={allCategories} tags={allTags} recentPosts={recentPosts} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

