import {
  Box,
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
import Contribution from "./Contribution";

export default function HomePage({ categories }) {
  return (
    <Container maxW='container.md'>
      <Navbar />
      <Grid py={6} templateColumns='repeat(2, 1fr)' gap={4}>
        {categories.map((category) => {
          return (
            <GridItem
              h='100px'
              key={category.title}
              bg='tomato'
              px={2}
              py={2}
              color='white'
              borderRadius={8}
            >
              <Box>
                <Center>
                  <Link href={`/${category.href}`} passHref>
                    <ChakraLink>
                      <Text fontSize={{ base: "20px", md: "24px" }}>
                        {category.title}
                      </Text>
                    </ChakraLink>
                  </Link>
                </Center>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
      <Contribution />
    </Container>
  );
}
