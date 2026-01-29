"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FaFacebookF, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";

type RecentPost = {
  slug: string;
  title: string;
  coverImage: string;
  author?: string;
  publishedAt: string;
};

function formatDateSide(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function BlogSidebar(props: {
  categories: string[];
  tags: string[];
  recentPosts: RecentPost[];
}) {
  const categories = useMemo(
    () => props.categories.filter(Boolean).slice(0, 10),
    [props.categories]
  );
  const tags = useMemo(() => props.tags.filter(Boolean).slice(0, 12), [props.tags]);

  return (
    <aside className="lg:sticky lg:top-28 self-start">
      <div className="bg-white border border-black/10">
        <div className="p-8 text-center border-b border-black/10">
          <div className="flex justify-center">
            <div className="relative w-[110px] h-[110px] rounded-full overflow-hidden border border-black/10">
              <Image
                src="/images/yildizotelMavi.png"
                alt="Yıldız Otel"
                fill
                sizes="110px"
                className="object-contain rounded-full bg-white"
              />
            </div>
          </div>

          <p className="mt-5 text-xl font-light text-[#1c2c34]">Yıldız Otel</p>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Kapadokya ve Ürgüp için gezi notları ve kısa öneriler.
          </p>

          <div className="flex justify-center gap-4 mt-6 text-[#1c2c34]">
            <Link href="https://www.instagram.com/urgupyildizhotel/" aria-label="Instagram">
              <FaInstagram className="hover:text-[#ab9a8b] transition" />
            </Link>
            <Link href="https://www.instagram.com/urgupyildizhotel/" aria-label="Facebook">
              <FaFacebookF className="hover:text-[#ab9a8b] transition" />
            </Link>
            <Link
              href="https://www.tripadvisor.com.tr/Hotel_Review-g297989-d3161070-Reviews-Yildiz_Hotel-Urgup_Cappadocia.html"
              aria-label="Tripadvisor"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <FaTripadvisor className="hover:text-[#ab9a8b] transition" />
            </Link>
            <Link
              href="https://wa.me/905303897163"
              aria-label="Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <FaWhatsapp className="hover:text-[#ab9a8b] transition" />
            </Link>
          </div>
        </div>

        {/* Arama */}
        <div className="p-6 border-b border-black/10">
          <form action="/blog" method="get" className="flex">
            <input
              name="q"
              placeholder="Search..."
              className="w-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#ab9a8b]"
            />
            <button
              type="submit"
              aria-label="Search"
              className="shrink-0 w-12 bg-[#1c2c34] text-white hover:bg-[#ab9a8b] transition"
            >
              <span className="text-lg leading-none">⌕</span>
            </button>
          </form>
        </div>

        {/* Kategoriler */}
        <div className="p-6 border-b border-black/10">
          <div className="bg-[#1c2c34] text-white px-5 py-4 font-light tracking-wide">
            Categories
          </div>
          <div className="border border-black/10 border-t-0">
            <ul className="divide-y divide-black/10">
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    href={`/blog?category=${encodeURIComponent(c)}`}
                    className="block px-5 py-3 text-sm text-[#1c2c34] hover:bg-black/[0.02]"
                    prefetch={false}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="p-6 border-b border-black/10">
          <div className="bg-[#1c2c34] text-white px-5 py-4 font-light tracking-wide">
            Recent Posts
          </div>
          <div className="border border-black/10 border-t-0 divide-y divide-black/10">
            {props.recentPosts.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="flex gap-4 p-4 hover:bg-black/[0.02]"
                prefetch={false}
              >
                <div className="relative w-16 h-16 overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-[#1c2c34] leading-snug line-clamp-2">
                    {p.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {p.author ?? "Yıldız Otel"} - {formatDateSide(p.publishedAt)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="p-6 border-b border-black/10">
          <div className="bg-[#1c2c34] text-white px-5 py-4 font-light tracking-wide">
            Tags
          </div>
          <div className="border border-black/10 border-t-0 p-5 flex flex-wrap gap-3">
            {tags.map((t) => (
              <Link
                key={t}
                href={`/blog?tag=${encodeURIComponent(t)}`}
                className="px-4 py-2 text-xs bg-black/[0.04] text-[#1c2c34] hover:bg-black/[0.07] transition"
                prefetch={false}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

