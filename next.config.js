/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://huzan2.github.io/NextJS_Movie";

const nextConfig = {
  reactStrictMode: false,
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/something",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    const API_KEY = process.env.API_KEY;

    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
