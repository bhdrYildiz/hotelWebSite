// app/robots.txt/route.ts
export async function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://www.yildizhotelcappadocia.com/sitemap.xml
  `.trim();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
