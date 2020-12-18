const Module = require("module");
const path = require("path");
const fs = require("fs");

const PATH = {};
loadRewrites();

function loadRewrites() {
  const isDirectory = source => fs.lstatSync(source).isDirectory();

  for (const fileName of fs.readdirSync(__dirname)) {
    const filePath = path.resolve(__dirname, fileName);
    if (!isDirectory(filePath)) continue;

    const packageJsonPath = path.resolve(filePath, "package.json");
    if (!fs.existsSync(packageJsonPath)) continue;

    const $package = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    if (!("$path" in $package)) continue;

    PATH[$package.$path.name] = path.resolve(filePath, $package.$path.target);
  }
}

function transformRequest(request) {
  for (const [alias, target] of Object.entries(PATH)) {
    if (
      request.startsWith(alias) &&
      (alias.length == request.length || request[alias.length] == "/") // so it matches "@test" and "@test/..." but not "@test_something_else"
    ) {
      return target + request.slice(alias.length);
    }
  }

  return null;
}

const $_resolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  const newRequest = transformRequest(request);
  if (newRequest != null) request = newRequest;

  return $_resolveFilename.call(this, request, parent, isMain, options);
};