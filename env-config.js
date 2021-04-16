// const debug = process.env.NODE_ENV !== "production";
// const name = "o-henry.github.io/";

// module.exports = {
//   "process.env.BACKEND_URL": !debug ? `/${name}` : "",
// };

const debug = process.env.DEPLOY_TARGET !== "gh-pages";
const name = "o-henry.github.io/";

module.exports = {
  "process.env.BACKEND_URL": debug ? `/${name}` : "",
};
