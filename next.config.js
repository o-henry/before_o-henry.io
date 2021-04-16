const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assertPrefix: process.env.NEXT_PUBLIC_BASE_PATH + "/",
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
