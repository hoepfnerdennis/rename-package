#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const packageJson = require(path.resolve(process.cwd(), "package.json"));
const newName = process.argv[process.argv.length - 1];
if (newName.endsWith("rename-package")) {
  console.error("No new name found.");
  return process.exit(1);
}
console.log('Current name is "' + packageJson.name + '"');
console.log('New name will be "' + newName + '"');
packageJson.name = newName;

fs.writeFileSync(
  path.resolve(process.cwd(), "package.json"),
  JSON.stringify(packageJson, null, 2)
);
