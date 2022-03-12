import { useRouter } from "next/router";
import React from "react";
import { getAllFiles, getFiles } from "../../lib/mdx-processor";

export default function index({ fileNames }) {
  const router = useRouter();
  const category = router.query.category;
  console.log(fileNames);
  return <div>{category}</div>;
}

export async function getStaticProps() {
  const fileNames = await getAllFiles();
  console.log(fileNames);
  return {
    props: fileNames,
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
        category: "app-ideas",
      },
    })),
    fallback: false,
  };
}
