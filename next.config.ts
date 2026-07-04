import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "*.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;

