import {
  Box,
  Container,
  Flex,
  Img,
  Button,
  Text,
  Link as ChakraLink,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
// import Image from "next/image";
import { useRouter } from "next/router";

export default function CategoryPage({ ideas }) {
  const router = useRouter();
  return (
    <Container maxW='container.md'>
      <Navbar />
      <Box py={4}>
        <Button size='sm' onClick={() => router.push("/")}>
          Back to the collection
        </Button>
        {ideas.map((idea) => {
          return (
            <Box key={idea.title}>
              <Flex justify='space-between' align='center' my={4} gap={2}>
                <Flex direction='column' flexGrow={1}>
                  <Link
                    href={`/${idea.category}/${idea.fileName.replace(
                      /\.mdx/,
                      ""
                    )}`}
                    passHref
                  >
                    <ChakraLink>
                      <Text as='h2' fontSize={{ base: "20px", md: "32px" }}>
                        {idea.title}
                      </Text>
                    </ChakraLink>
                  </Link>
                  <Text
                    my={2}
                    fontSize={{ base: "16px", md: "16px" }}
                    noOfLines={[1, 1]}
                  >
                    {idea.summary}
                  </Text>
                  <Flex mt={1}>
                    <Text fontSize={{ base: "12px", md: "14px" }}>
                      {idea.category}
                    </Text>
                    {idea.tags.map((tag) => (
                      <Text
                        ml={1}
                        key={tag}
                        fontSize={{ base: "12px", md: "14px" }}
                      >
                        {tag}
                      </Text>
                    ))}
                  </Flex>
                </Flex>
                {/* <Flex>
                  <Image
                    src='https://via.placeholder.com/150'
                    width={150}
                    height={150}
                    alt={`${idea.title}`}
                  ></Image>
                </Flex> */}
              </Flex>
              <Divider orientation='horizontal' />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
