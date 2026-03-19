import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "yildizhotelcappadocia.com" }],
        destination: "https://www.yildizhotelcappadocia.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
