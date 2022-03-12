import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box>
      <Flex justify='space-between' align='center' px={2} py={4}>
        <Text fontSize='2xl' fontWeight='medium'>
          <Link href={`/`}>Conception</Link>
        </Text>
        <Text fontSize='lg' color='gray.500'>
          Switch Theme
        </Text>
      </Flex>
    </Box>
  );
}
