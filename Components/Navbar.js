import React from "react";
import { Box, Flex, Text, Link as ChakraLink, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box>
      <Flex justify='space-between' align='center' px={2} py={4}>
        <Text fontSize='2xl' fontWeight='medium'>
          <Link href={`/`} passHref>
            <ChakraLink>Conception</ChakraLink>
          </Link>
        </Text>
        <Button size='sm' color='gray.500'>
          Switch Theme
        </Button>
      </Flex>
    </Box>
  );
}
