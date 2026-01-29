"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getAllBlogPosts } from "@/app/data/blogPosts";

function formatDateBadge(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return { day: "--", monthYear: "--" };

  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" });
  const year = d.getFullYear().toString().slice(-2);
  return { day, monthYear: `${month} / ${year}` };
}

export default function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 6);

  return (
    <section className="bg-white py-24 font-cormorant overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="h-px w-14 bg-[#ab9a8b]/70" />
            <p className="text-sm md:text-base uppercase tracking-[0.35em] text-[#ab9a8b] font-bold">
              BLOG YAZILARI
            </p>
            <span className="h-px w-14 bg-[#ab9a8b]/70" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1c2c34] tracking-wide mb-4">
            KAPADOKYA REHBERİ
          </h2>
          <p className="text-[#1c2c34] leading-relaxed text-base font-semibold tracking-wide max-w-3xl mx-auto mb-12">
            Ürgüp ve Kapadokya için kısa, pratik gezi notları ve öneriler.
          </p>
        </div>

        <div className="relative group">
          <button
            type="button"
            aria-label="Önceki"
            className="blog-swiper-prev hidden lg:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 h-14 w-14 rounded-full border border-black/10 bg-white/80 backdrop-blur transition
            opacity-0 pointer-events-none cursor-pointer group-hover:opacity-100 group-hover:pointer-events-auto"
          >
            <span className="text-2xl text-[#1c2c34] leading-none">‹</span>
          </button>
          <button
            type="button"
            aria-label="Sonraki"
            className="blog-swiper-next hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 h-14 w-14 rounded-full border border-black/10 bg-white/80 backdrop-blur transition
            opacity-0 pointer-events-none cursor-pointer group-hover:opacity-100 group-hover:pointer-events-auto"
          >
            <span className="text-2xl text-[#1c2c34] leading-none">›</span>
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".blog-swiper-prev",
              nextEl: ".blog-swiper-next",
            }}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="blog-swiper"
          >
            {posts.map((post) => {
              const badge = formatDateBadge(post.publishedAt);
              return (
                <SwiperSlide key={post.slug}>
                  <article className="group">
                    <Link href={`/blog/${post.slug}`} className="block" prefetch={false}>
                      <div className="relative overflow-hidden">
                        <div className="relative h-[320px] md:h-[420px] overflow-hidden shadow-lg">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 520px"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        <div className="absolute left-5 top-5 h-[86px] w-[86px] bg-[#1c2c34] text-white flex flex-col items-center justify-center shadow-lg">
                          <div className="text-4xl font-light leading-none">
                            {badge.day}
                          </div>
                          <div className="text-xs tracking-wider mt-1 opacity-90">
                            {badge.monthYear}
                          </div>
                        </div>
                      </div>

                      <div className="pt-7">
                        <h3 className="text-2xl md:text-3xl font-light text-[#1c2c34] leading-snug mb-3">
                          {post.title}
                        </h3>
                        <p className="text-[#1c2c34] leading-relaxed text-base font-semibold tracking-light line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center bg-[#1c2c34] hover:bg-[#ab9a8b] text-white px-10 py-3 text-sm font-bold tracking-wider transition-colors duration-300"
            prefetch={false}
          >
            TÜM YAZILARI GÖR
          </Link>
        </div>
      </div>
    </section>
  );
}

