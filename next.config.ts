import type { NextConfig } from "next";
import WebpackObfuscator from "webpack-obfuscator";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config: Configuration): Configuration => {
    if (process.env.NODE_ENV === "production") {
      config!.plugins!.push(new WebpackObfuscator({ stringArrayRotate: true }));
      return config;
    }
    return config;
  },
};

export default nextConfig;
