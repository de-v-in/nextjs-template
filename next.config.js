/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const intercept = require("intercept-stdout");

const nextConfig = nextTranslate({
  reactStrictMode: false,
  swcMinify: true,
});

/**
 * Hide warning of RecoilJS when hot reload
 */
intercept((text) => (text.includes("Duplicate atom key") ? "" : text));

module.exports = nextConfig;
