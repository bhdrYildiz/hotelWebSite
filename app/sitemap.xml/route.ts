import { rooms } from "@/app/data/rooms";
import { tours } from "@/app/data/tours";
import { blogPosts } from "@/app/data/blogPosts";

const baseUrl = "https://www.yildizhotelcappadocia.com";

function isoDate(d: Date) {
  return d.toISOString().split("T")[0];
}

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

type UrlEntry = {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number; 
};

export async function GET() {
  const today = isoDate(new Date());

  const staticEntries: UrlEntry[] = [
    { loc: "/", changefreq: "weekly", priority: 1.0, lastmod: today },
    { loc: "/about", changefreq: "monthly", priority: 0.6, lastmod: today },
    { loc: "/rooms", changefreq: "weekly", priority: 0.9, lastmod: today },
    { loc: "/tours", changefreq: "weekly", priority: 0.8, lastmod: today },
    { loc: "/gallery", changefreq: "monthly", priority: 0.6, lastmod: today },
    { loc: "/contact", changefreq: "yearly", priority: 0.5, lastmod: today },
    { loc: "/blog", changefreq: "weekly", priority: 0.7, lastmod: today },
    { loc: "/reservation", changefreq: "weekly", priority: 0.7, lastmod: today },
  ];

  const roomEntries: UrlEntry[] = rooms.map((room) => ({
    loc: `/rooms/${room.id}`,
    changefreq: "monthly",
    priority: 0.8,
    lastmod: today,
  }));

  const tourEntries: UrlEntry[] = tours.map((tour) => ({
    loc: `/tours/${tour.id}`,
    changefreq: "monthly",
    priority: 0.7,
    lastmod: today,
  }));

  const blogEntries: UrlEntry[] = blogPosts.map((post) => ({
    loc: `/blog/${post.slug}`,
    changefreq: "yearly",
    priority: 0.6,
    lastmod: post.publishedAt
      ? isoDate(new Date(post.publishedAt))
      : today,
  }));

  const allEntries = [
    ...staticEntries,
    ...roomEntries,
    ...tourEntries,
    ...blogEntries,
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map((u) => {
    const loc = escapeXml(`${baseUrl}${u.loc}`);
    const lastmod = u.lastmod ? `\n    <lastmod>${escapeXml(u.lastmod)}</lastmod>` : "";
    const changefreq = u.changefreq ? `\n    <changefreq>${u.changefreq}</changefreq>` : "";
    const priority =
      typeof u.priority === "number" ? `\n    <priority>${u.priority.toFixed(1)}</priority>` : "";

    return `  <url>
    <loc>${loc}</loc>${lastmod}${changefreq}${priority}
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
