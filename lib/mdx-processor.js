import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { promises as fs } from "fs";
import matter from "gray-matter";

const ROOT = process.cwd();

export async function getFiles() {
  const postsDirectory = path.join(ROOT, "db/all-ideas");
  const folderNames = await fs.readdir(postsDirectory);
  const filesArr = await Promise.all(
    folderNames.map(async (folderName) => {
      const folderPath = path.join(postsDirectory, folderName);
      const files = await fs.readdir(folderPath);
      return files.map((file) => {
        return {
          file,
          folderName,
        };
      });
    })
  );

  const formattedFiles = filesArr.flat(1);
  return formattedFiles;
}

// Reading a file frontmatter and returing it. But unfortunately, it throws an error
// function getFileData(files) {
//   const fileData = files.map(async (eachFile) => {
//     const filePath = path.join(eachFile.folderPath, eachFile.file);
//     const source = await fs.readFile(filePath, "utf-8");
//     const { data } = matter(source);
//     return {
//       file: eachFile.file,
//       ...data,
//     };
//   });
//   return fileData;
// }

export async function getFileByIdea(type, fileName) {
  const postsDirectory = path.join(ROOT, "db/all-ideas", type);
  const filePath = path.join(postsDirectory, fileName);
  const source = await fs.readFile(filePath, "utf-8");
  const mdxSource = await serialize(source, { parseFrontmatter: true });
  return { mdxSource };
}

export async function getAllCategory() {
  const postsDirectory = path.join(ROOT, "db/all-ideas");
  const folderNames = await fs.readdir(postsDirectory);
  return folderNames.map((folder) => {
    let words = folder.split("-");
    let levelOneProcessed = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let levelTwoProcessed = levelOneProcessed.join(" ");
    return {
      title: levelTwoProcessed,
      href: folder,
    };
  });
}

export async function getIdeasFrontmatterByCategory(type) {
  const postsDirectory = path.join(ROOT, "db/all-ideas", type);
  const fileNames = await fs.readdir(postsDirectory);
  const allIdeasFrontmatterByCategory = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const content = await fs.readFile(filePath, "utf-8");
      const { data } = matter(content);
      return {
        fileName,
        ...data,
      };
    })
  );
  return allIdeasFrontmatterByCategory;
}
