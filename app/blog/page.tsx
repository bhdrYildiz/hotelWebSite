import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "@/app/data/blogPosts";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BlogSidebar from "@/app/blog/BlogSidebar";
import PageHero from "../components/PageHero";

type SearchParams = {
  q?: string;
  tag?: string;
  category?: string;
  page?: string;
};

function formatDateBadge(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return { day: "--", monthYear: "--" };
  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = d.getFullYear().toString().slice(-2);
  return { day, monthYear: `${month} ${year}` };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const allPosts = getAllBlogPosts();

  const q = (sp?.q ?? "").trim().toLowerCase();
  const tag = (sp?.tag ?? "").trim();
  const category = (sp?.category ?? "").trim();

  const filtered = allPosts.filter((p) => {
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q);

    const matchesTag = !tag || (p.tags ?? []).includes(tag);
    const matchesCategory = !category || (p.categories ?? []).includes(category);

    return matchesQ && matchesTag && matchesCategory;
  });

  const pageSize = 4;
  const page = Math.max(1, Number(sp?.page ?? "1") || 1);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);

  const start = (safePage - 1) * pageSize;
  const posts = filtered.slice(start, start + pageSize);

  const allTags = Array.from(
    new Set(allPosts.flatMap((p) => p.tags ?? []))
  ).sort((a, b) => a.localeCompare(b, "tr"));

  const allCategories = Array.from(
    new Set(allPosts.flatMap((p) => p.categories ?? []))
  ).sort((a, b) => a.localeCompare(b, "tr"));

  const categories = allCategories;
  const recentPosts = allPosts.slice(0, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    coverImage: p.coverImage,
    author: p.author,
    publishedAt: p.publishedAt,
  }));

  const makePageHref = (p: number) => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (tag) sp.set("tag", tag);
    if (category) sp.set("category", category);
    sp.set("page", String(p));
    return `/blog?${sp.toString()}`;
  };

  return (
    <>
      <Header />
      <main className="bg-white font-cormorant">
        <PageHero
          title="BLOG"
          subtitle="- SİZİN İÇİN HAZIRLADIĞIMIZ BLOG YAZILARI -"
          backgroundImage="/images/turlar/balon3.jpg"
          breadcrumbs={[
            { label: 'ANA SAYFA', href: '/' },
            { label: 'BLOG' },
          ]}
        />

        <section className="py-20 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-12 lg:gap-16 items-start">
              <div>
                <div className="space-y-16">
                  {posts.map((post) => {
                    const badge = formatDateBadge(post.publishedAt);
                    const metaTags = (post.tags ?? []).slice(0, 3);
                    return (
                      <article key={post.slug} className="border-b border-black/10 pb-14">
                        <Link href={`/blog/${post.slug}`} className="block group">
                          <div className="relative">
                            <div className="relative h-[260px] md:h-[360px] overflow-hidden bg-gray-100">
                              <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 900px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>

                            <div className="absolute left-6 top-6 w-[84px] h-[84px] bg-[#ab9a8b] text-white flex flex-col items-center justify-center">
                              <div className="text-4xl font-light leading-none">
                                {badge.day}
                              </div>
                              <div className="mt-1 text-xs tracking-widest bg-[#1c2c34] px-2 py-1 w-full text-center">
                                {badge.monthYear}
                              </div>
                            </div>
                          </div>

                          <div className="pt-8">
                            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                              {post.author ?? "Yıldız Otel"}
                              <span className="mx-3">·</span>
                              {metaTags.length ? metaTags.join(", ") : "Kapadokya"}
                            </p>

                            <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1c2c34] leading-tight">
                              {post.title}
                            </h2>

                            <div className="h-px w-16 bg-[#ab9a8b] mt-5" />

                            <p className="mt-6 text-gray-600 leading-relaxed">
                              {post.excerpt}
                            </p>

                            <div className="mt-8 inline-flex items-center gap-3 text-[#1c2c34] tracking-[0.25em] text-xs font-bold uppercase">
                              <span>Devamını Oku</span>
                              <span className="text-base leading-none">→</span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center flex-wrap gap-3 mt-10">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={makePageHref(p)}
                      className={`h-12 w-12 grid place-items-center border text-sm ${p === safePage
                        ? "bg-[#1c2c34] text-white border-[#1c2c34]"
                        : "bg-white text-[#1c2c34] border-black/10 hover:border-[#ab9a8b]"
                        }`}
                    >
                      {p}
                    </Link>
                  ))}
                  {safePage < totalPages && (
                    <Link
                      href={makePageHref(safePage + 1)}
                      className="h-12 w-12 grid place-items-center border border-black/10 hover:border-[#ab9a8b]"
                      aria-label="Next page"
                    >
                      »
                    </Link>
                  )}
                </div>

              </div>

              <BlogSidebar categories={categories} tags={allTags} recentPosts={recentPosts} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

