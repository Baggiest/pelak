import withPWA from '@ducanh2912/next-pwa';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const config = withPWA({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
  }
})(nextConfig);

export default config;
