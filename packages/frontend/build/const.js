const path = require("path");

const CLIENT_ROOT = path.resolve(__dirname, "..");
const CLIENT_SRC = path.resolve(CLIENT_ROOT, "src");
const CLIENT_ASSETS = path.resolve(CLIENT_SRC, "assets");
const CLIENT_DIST = path.resolve(CLIENT_ROOT, "dist");
const PACKAGES_ROOT = path.resolve(CLIENT_ROOT, "..");

const BUILD_PATH = {
  CLIENT_ROOT,
  CLIENT_SRC,
  CLIENT_ASSETS,
  CLIENT_DIST,
  PACKAGES_ROOT,
};

exports.BUILD_PATH = BUILD_PATH;

exports.IS_DEV = process.env.NODE_ENV !== "production";