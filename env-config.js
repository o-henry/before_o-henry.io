const debug = process.env.NODE_ENV !== "production";
const name = "log";

module.exports = {
  "process.env.BACKEND_URL": !debug ? `/${name}` : "",
};
