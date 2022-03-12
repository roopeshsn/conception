import {
  Center,
  Container,
  Grid,
  GridItem,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import categories from "../db/categories";

export default function HomePage() {
  return (
    <Container maxW='container.md'>
      <Navbar />
      <Grid px={2} py={2} templateColumns='repeat(2, 1fr)' gap={4}>
        {categories.map((category) => {
          return (
            <GridItem
              h='100px'
              key={category.key}
              bg='tomato'
              px={2}
              py={2}
              color='white'
              borderRadius={8}
            >
              <Link href={`/${category.href}`} passHref>
                <ChakraLink>
                  <Text fontSize={{ base: "20px", md: "24px" }}>
                    {category.title}
                  </Text>
                </ChakraLink>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
}
