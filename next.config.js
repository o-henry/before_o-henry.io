const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const debug = process.env.NODE_ENV !== "production";
const name = "https://o-henry.github.io/";

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/project": { page: "/project" },
    };
  },
  assertPrefix: !debug ? `/${name}` : "",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
});
