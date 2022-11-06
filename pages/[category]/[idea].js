import { MDXRemote } from "next-mdx-remote"
import React from "react"
import IdeaPage from "../../Components/IdeaPage"
import MdxComponents from "../../Components/MdxComponents"
import { getFileByIdea, getFiles } from "../../lib/mdx-processor"

export default function idea({ mdxSource }) {
  return (
    <div>
      <IdeaPage>
        <MDXRemote {...mdxSource} components={MdxComponents} />
      </IdeaPage>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = await getFileByIdea(params.category, `${params.idea}.mdx`)
  return {
    props: post,
  }
}

export async function getStaticPaths() {
  const files = await getFiles()
  return {
    paths: files.map((file) => ({
      params: {
        idea: file.file.replace(/\.mdx/, ""),
        category: file.folderName,
      },
    })),
    fallback: false,
  }
}
