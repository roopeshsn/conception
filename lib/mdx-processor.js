import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { promises as fs } from "fs";
import matter from "gray-matter";

const ROOT = process.cwd();

export async function getFiles(type) {
  const postsDirectory = path.join(ROOT, "db/all-ideas", type);
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames;
}

export async function getFileByIdea(type, fileName) {
  const postsDirectory = path.join(ROOT, "db/all-ideas", type);
  const filePath = path.join(postsDirectory, fileName);
  const source = await fs.readFile(filePath, "utf-8");
  const mdxSource = await serialize(source, { parseFrontmatter: true });
  return { mdxSource };
}

export async function getAllFiles() {
  const postsDirectory = path.join(ROOT, "db/all-ideas");
  const fileNames = await fs.readdir(postsDirectory);
  const allFileData = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const source = await fs.readFile(filePath, "utf-8");
    const { data } = matter(source);
    return {
      path: fileName.replace(/\.js/, ""),
      ...data,
    };
  });
  console.log(allFileData);
}
