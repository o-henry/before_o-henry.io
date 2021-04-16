const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const debug = process.env.DEPLOY_TARGET !== "gh-pages";
const name = "log";

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/blog": { page: "/blog" },
    };
  },
  basePath: "/log",
  assertPrefix: "/log",
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
