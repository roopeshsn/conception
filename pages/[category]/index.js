import React from "react";
import CategoryPage from "../../Components/CategoryPage";
import {
  getAllCategory,
  getIdeasFrontmatterByCategory,
} from "../../lib/mdx-processor";

export default function index({ files: ideas }) {
  return (
    <div>
      <CategoryPage ideas={ideas} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const files = await getIdeasFrontmatterByCategory(params.category);
  return {
    props: { files },
  };
}

export async function getStaticPaths() {
  const categories = await getAllCategory();
  return {
    paths: categories.map((category) => ({
      params: {
        category: category.href,
      },
    })),
    fallback: false,
  };
}
