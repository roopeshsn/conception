const path = require("path");
const fs = require("fs");

const ROOT = process.cwd();

function getAllCategories() {
  const postsDirectory = path.join(ROOT, "db/all-ideas");
  const folderNames = fs.readdirSync(postsDirectory);
  return folderNames;
}

module.exports = { getAllCategories };
