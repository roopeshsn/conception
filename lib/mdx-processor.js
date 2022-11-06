import path from "path"
import { serialize } from "next-mdx-remote/serialize"
import { promises as fs } from "fs"
import matter from "gray-matter"

const ROOT = process.cwd()

// To get file and folder name
export async function getFiles() {
  const postsDirectory = path.join(ROOT, "db/all-ideas")
  const folderNames = await fs.readdir(postsDirectory)
  const filesArr = await Promise.all(
    folderNames.map(async (folderName) => {
      const folderPath = path.join(postsDirectory, folderName)
      const files = await fs.readdir(folderPath)
      return files.map((file) => {
        return {
          file,
          folderName,
        }
      })
    }),
  )

  const formattedFiles = filesArr.flat(1)
  return formattedFiles
}

/* // Reading a file frontmatter and returing it. But unfortunately, it throws an error
function getFileData(files) {
  const fileData = files.map(async (eachFile) => {
    const filePath = path.join(eachFile.folderPath, eachFile.file);
    const source = await fs.readFile(filePath, "utf-8");
    const { data } = matter(source);
    return {
      file: eachFile.file,
      ...data,
    };
  });
  return fileData;
}
*/

// To get corresponding file content by the file name and type (type -> category)
export async function getFileByIdea(type, fileName) {
  const postsDirectory = path.join(ROOT, "db/all-ideas", type)
  const filePath = path.join(postsDirectory, fileName)
  const source = await fs.readFile(filePath, "utf-8")
  const mdxSource = await serialize(source, { parseFrontmatter: true })
  return { mdxSource }
}

// To get all categories from the file system (db -> app-ideas)
export async function getAllCategory() {
  const postsDirectory = path.join(ROOT, "db/all-ideas")
  const folderNames = await fs.readdir(postsDirectory)
  return folderNames.map((folder) => {
    let words = folder.split("-")
    let levelOneProcessed = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    let levelTwoProcessed = levelOneProcessed.join(" ")
    return {
      title: levelTwoProcessed,
      href: folder,
    }
  })
}

// To get the frontmatter of all ideas by type (type -> category)
// The frontmatter can be used to render the CategoryPage.js
export async function getIdeasFrontmatterByCategory(type) {
  const postsDirectory = path.join(ROOT, "db/all-ideas", type)
  const fileNames = await fs.readdir(postsDirectory)
  const allIdeasFrontmatterByCategory = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      const content = await fs.readFile(filePath, "utf-8")
      const { data } = matter(content)
      const tags = data.tags
      const tagsInArr = tags.split(",")
      const formattedTags = tagsInArr.map((tag) => tag.trim())
      return {
        fileName,
        title: data.title,
        category: data.category,
        summary: data.summary,
        tags: formattedTags,
        createdAt: data.createdAt,
        author: data.author,
      }
    }),
  )
  return allIdeasFrontmatterByCategory
}
