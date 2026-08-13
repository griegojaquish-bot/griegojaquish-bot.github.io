import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.ECS_STATIC === "1"
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
