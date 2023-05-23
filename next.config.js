/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");
const intercept = require("intercept-stdout");

const nextConfig = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  publicRuntimeConfig: {
    IS_DEV: process.env.NODE_ENV !== "production",
  },
});

/**
 * Hide warning of RecoilJS when hot reload
 */
intercept((text) => (text.includes("Duplicate atom key") ? "" : text));

module.exports = nextConfig;
