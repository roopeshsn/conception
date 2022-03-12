import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import CategoryPage from "../../Components/CategoryPage";
import {
  getAllCategory,
  getIdeasFrontmatterByCategory,
} from "../../lib/mdx-processor";

export default function index({ files: ideas }) {
  const router = useRouter();
  // console.log(ideas);
  const category = router.query.category;
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
        category: category.title,
      },
    })),
    fallback: false,
  };
}
