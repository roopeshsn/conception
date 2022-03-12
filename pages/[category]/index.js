import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import {
  getAllCategory,
  getIdeasFrontmatterByCategory,
} from "../../lib/mdx-processor";
// import { getAllFiles, getFiles } from "../../lib/mdx-processor";

export default function index({ files: ideas }) {
  const router = useRouter();
  console.log(ideas);
  const category = router.query.category;
  return (
    <div>
      {ideas.map((idea) => {
        return (
          <Flex>
            <Text fontSize='xl'>{idea.title}</Text>
          </Flex>
        );
      })}
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
