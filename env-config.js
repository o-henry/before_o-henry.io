const debug = process.env.NODE_ENV !== "production";
const name = "https://o-henry.github.io/";

module.exports = {
  "process.env.BACKEND_URL": !debug ? `/${name}` : "",
};
