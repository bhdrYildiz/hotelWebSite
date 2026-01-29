import { rooms } from "@/app/data/rooms";
import { tours } from "@/app/data/tours";
import { blogPosts } from "@/app/data/blogPosts";

export async function GET() {
  const baseUrl = "https://www.yildizhotelcappadocia.com";

  const staticRoutes = [
    "",
    "/about",
    "/rooms",
    "/tours",
    "/gallery",
    "/contact",
    "/blog",
  ];
  const dynamicRoomRoutes = rooms.map((room) => `/rooms/${room.id}`);
  const dynamicTourRoutes = tours.map((tour) => `/tours/${tour.id}`);
  const dynamicBlogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  const allRoutes = [
    ...staticRoutes,
    ...dynamicRoomRoutes,
    ...dynamicTourRoutes,
    ...dynamicBlogRoutes,
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
