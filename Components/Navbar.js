import React from "react";
import { Box, Flex, Text, Link as ChakraLink, Button } from "@chakra-ui/react";
import { useColorMode} from "@chakra-ui/color-mode";
import Link from "next/link";

export default function Navbar() {
  const {toggleColorMode} = useColorMode();
  return (
    <Box>
      <Flex justify='space-between' align='center' py={4}>
        <Text fontSize='2xl' fontWeight='medium'>
          <Link href={`/`} passHref>
            <ChakraLink>Conception</ChakraLink>
          </Link>
        </Text>
        <Button size='sm' color='gray.500' onClick={toggleColorMode}>
          Switch Theme
        </Button>
      </Flex>
    </Box>
  );
}
