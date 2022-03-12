import { MDXRemote } from "next-mdx-remote";
import React from "react";
import MdxComponents from "../../Components/MdxComponents";
import { getFileByIdea, getFiles } from "../../lib/mdx-processor";

export default function idea({ mdxSource }) {
  console.log(mdxSource.frontmatter);
  return (
    <div>
      <MDXRemote {...mdxSource} components={MdxComponents} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = await getFileByIdea("app-ideas", `${params.idea}.mdx`);
  console.log(post);
  return {
    props: post,
  };
}

export async function getStaticPaths() {
  const posts = await getFiles("app-ideas");
  const some = posts.map((post) => ({
    params: {
      idea: post.replace(/\.mdx/, ""),
      category: "app-ideas",
    },
  }));
  console.log(some);

  return {
    paths: posts.map((post) => ({
      params: {
        idea: post.replace(/\.mdx/, ""),
        category: "app-ideas",
      },
    })),
    fallback: false,
  };
}
