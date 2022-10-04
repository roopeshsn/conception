import React from "react";
import { Box, Flex, Text, Link as ChakraLink, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box>
      <Flex justify='space-between' align='center' py={4}>
        <Heading fontSize='3xl' fontWeight={500}>
          <Link href={`/`} passHref>
            <ChakraLink>Conception</ChakraLink>
          </Link>
        </Heading>
        <Button size='sm' color='gray.500'>
          Switch Theme
        </Button>
      </Flex>
    </Box>
  );
}
