#!/usr/bin/env node
const FS = require("fs");
const PATH = require("path");

const name = process.argv
  .find((arg) => arg.startsWith("--name="))
  ?.replace("--name=", "");
const path = process.argv
  .find((arg) => arg.startsWith("--path="))
  ?.replace("--path=", "");

if (!name) {
  console.error("No new name found.");
  return process.exit(1);
}

if (name.endsWith("rename-package")) {
  console.error("No new name found.");
  return process.exit(1);
}

const packageJson = require(PATH.resolve(process.cwd(), path, "package.json"));

console.log('Current name is "' + packageJson.name + '"');
console.log('New name will be "' + name + '"');
packageJson.name = name;

FS.writeFileSync(
  PATH.resolve(process.cwd(), "package.json"),
  JSON.stringify(packageJson, null, 2)
);
